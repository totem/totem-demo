import flask
import sys
from flask import request

app = flask.Flask(__name__)


@app.route('/')
@app.route('/totem-demo')
def hello_world():
    return flask.jsonify({
        'message': 'Hello World v5!',
        'python': sys.version,
        'headers': str(request.headers)
    })
