from demo.views import app
import time
import signal
import sys


def sigterm_handler(_signo, _stack_frame):
    # Raises SystemExit(0):
    print("Handling SIGTERM")
    time.sleep(150)
    print("Handling SIGTERM: Exit")
    sys.exit(0)


if __name__ == '__main__':
    signal.signal(signal.SIGTERM, sigterm_handler)
    app.run(debug=False, threaded=True, port=8080, host='0.0.0.0')
