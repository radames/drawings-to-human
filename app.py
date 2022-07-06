import os
from flask import Flask


app = Flask(__name__, static_url_path='/static')

mode = os.environ.get('FLASK_ENV', 'production')
dev = mode == 'development'


@app.route('/')
def index():
    return app.send_static_file('index.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0',  port=int(
        os.environ.get('PORT', 7860)), debug=True, use_reloader=dev)
