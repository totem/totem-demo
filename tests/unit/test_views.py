from flask import json
from nose.tools import eq_
from server import app

client = app.test_client()


def test_hello_world():
    # When: I access root path
    resp = client.get('/')

    # Then: Expected response is returned
    eq_(resp.status_code, 200)
    eq_(resp.headers['Content-Type'], 'application/json')
    data = json.loads(resp.data.decode())
    eq_(data['message'].startswith('Hello'), True)
