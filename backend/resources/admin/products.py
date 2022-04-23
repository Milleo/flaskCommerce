from flask_restful import Resource, reqparse
from models.product import ProductModel
from flask import jsonify

class Products(Resource):
    args = reqparse.RequestParser()
    args.add_argument('name', type=str, required=True, help="The field 'name' cannot be left blank")

    def get(self):
        products = ProductModel.query.all()
        return { 'products': [product.json() for product in products] }, 200

    def post(self):

        product_data = Products.args.parse_args()
        new_product = ProductModel(**product_data)

        try:
            new_product.save()
        except:
            return { 'message': 'An internal server error occoured'}, 500

        return { 'message': 'Product created' }, 200