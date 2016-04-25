FROM python:3.5.1-alpine

ADD requirements.txt /opt/totem-demo/
RUN \
  # Install Application Dependencies
  pip3  install --ignore-installed  --no-cache-dir -r /opt/totem-demo/requirements.txt \
  # Cleanup (Remove all tests folder and python compiled files)
  && find /usr/local \
    \( -type d -a -name test -o -name tests \) -exec echo rm -rf '{}' + \
    -o \( -type f -a -name '*.pyc' -o -name '*.pyo' \) -exec echo rm -f '{}' + \
  && rm -rf /usr/src/python ~/.cache /tmp/*
    

ADD . /opt/totem-demo
WORKDIR /opt/totem-demo

EXPOSE 8080
CMD ["python3", "server.py"]

