from flask import Flask
from flask_restful import Api
from resources.health_check import Health_Check
from resources.admin.products import Products
from config import app

api = Api(app)

api.add_resource(Health_Check, '/test')
api.add_resource(Products, '/admin/products')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001, debug=True)