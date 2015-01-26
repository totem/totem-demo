FROM totem/python-base:3.4-trusty

ADD requirements.txt /opt/scholastic/
RUN pip install -r /opt/scholastic/requirements.txt

ADD . /opt/scholastic
WORKDIR /opt/scholastic

EXPOSE 8080
CMD ["server.py"]