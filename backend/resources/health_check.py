from flask_restful import Resource
from config import db
from models.product import ProductModel

class Health_Check(Resource):
    def get(self):
        ProductModel.query.all()
        return { 'message': 'Service is up and running' }, 200