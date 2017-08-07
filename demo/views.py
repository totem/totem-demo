import flask
import sys
from flask import request

app = flask.Flask(__name__)


@app.route('/')
def hello_world():
    resp = flask.jsonify({
        'message': 'Hello World!',
        'python': sys.version,
        'headers': str(request.headers)
    })
    resp.headers['X-Frame-Options'] = 'SAMEORIGIN'
    return resp
