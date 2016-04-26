FROM mhart/alpine-node:4.4.3
ENV INSTALL_DIR /opt/totem-demo

ADD package.json $INSTALL_DIR/package.json
RUN cd $INSTALL_DIR \
    && npm install --prod \
    && rm -rf ~/.npm

ADD . $INSTALL_DIR
WORKDIR $INSTALL_DIR

EXPOSE 8080
CMD ["node", "./bin/www"]