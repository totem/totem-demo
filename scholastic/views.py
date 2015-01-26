import flask
import sys

app = flask.Flask(__name__)


@app.route('/')
def hello_world():
    return flask.jsonify({
        'message': 'Hello Worlb!',
        'python': sys.version

    })
