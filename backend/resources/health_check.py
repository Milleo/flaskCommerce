from flask_restful import Resource
from config import db
from models.product import Product

class Health_Check(Resource):
    def get(self):
        Product.query.all()
        return { 'message': 'Service is up and running' }, 200