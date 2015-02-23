FROM totem/python-base:3.4-trusty

ADD requirements.txt /opt/totem-demo/
RUN /bin/bash -c "$(if pip3 1> /dev/null 2>&1; then echo pip3; else echo pip; fi)  install -r /opt/totem-demo/requirements.txt"

ADD . /opt/totem-demo
WORKDIR /opt/totem-demo


EXPOSE 8080
CMD ["server.py"]

