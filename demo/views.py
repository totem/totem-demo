import flask
import sys
from flask import request

app = flask.Flask(__name__)


@app.route('/')
def hello_world():
    return flask.jsonify({
        'message': 'Hello Worlb!',
        'python': sys.version,
        'headers': str(request.headers)
    })
