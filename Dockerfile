FROM totem/python-base:2.7-trusty

ADD requirements.txt /opt/scholastic/
RUN /bin/bash -c "$(if pip3 1> /dev/null 2>&1; then echo pip3; else echo pip; fi)  install -r /opt/scholastic/requirements.txt"

ADD . /opt/scholastic
WORKDIR /opt/scholastic

EXPOSE 8080
CMD ["server.py"]
