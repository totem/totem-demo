import os
import threading

print('Running job (forever) on node: {}'.format(os.getenv('HOST_IP')))
threading.Event().wait()
