from demo.views import app

if __name__ == '__main__':
    app.run(debug=True, threaded=True, port=8080, host='0.0.0.0')
