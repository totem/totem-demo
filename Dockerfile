FROM java:openjdk-8u77-jre-alpine
ENV INSTALL_DIR /opt/totem-demo
ENV MVN_VERSION 3.3.9
ENV M2_HOME /usr/share/maven

# Install Maven
RUN \
  grep '^networkaddress.cache.ttl=' $JAVA_HOME/lib/security/java.security \
      || echo 'networkaddress.cache.ttl=60' >> $JAVA_HOME/lib/security/java.security \
  && apk --update --no-cache add tar \
  && mkdir -p $M2_HOME \
  && wget -O /tmp/apache-maven-bin.tar.gz \
      http://apache.spinellicreations.com/maven/maven-3/${MVN_VERSION}/binaries/apache-maven-${MVN_VERSION}-bin.tar.gz \
  && cd /tmp && tar --strip-components=1 -zxvf apache-maven-bin.tar.gz -C /usr/share/maven \
  && ln -sf $M2_HOME/bin/mvn /usr/local/bin/mvn \
  && rm -rf ~/.cache /tmp/*

# Refresh Dependencies and cache it
ADD pom.xml $INSTALL_DIR/pom.xml
RUN cd $INSTALL_DIR \
    && mvn dependency:go-offline dependency:resolve-plugins \
    && mvn verify clean --fail-never

# Package JAR (offline mode)
ADD . $INSTALL_DIR
RUN cd $INSTALL_DIR \
    && mvn -o package \
    && mv $INSTALL_DIR/target/dropwizard*.jar $INSTALL_DIR/dropwizard.jar

WORKDIR $INSTALL_DIR

EXPOSE 8080 8081

CMD ["java", "-jar", "/opt/totem-demo/dropwizard.jar", "server"]