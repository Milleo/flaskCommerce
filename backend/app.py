from flask import Flask
from flask_restful import Api
from resources.health_check import Health_Check

app = Flask(__name__)
api = Api(app)
api.add_resource(Health_Check, '/test')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001, debug=True)