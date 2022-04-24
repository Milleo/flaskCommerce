from flask_restful import Resource, reqparse
from models.user import UserModel
from flask import jsonify
from werkzeug.security import safe_str_cmp
import jwt
import datetime
from config import app

class Auth(Resource):
    args = reqparse.RequestParser()
    args.add_argument('login', type=str, required=True, help="The field 'name' cannot be left blank")
    args.add_argument('password', type=str, required=True, help="The field 'name' cannot be left blank")


    def post(self):
        login_data = Auth.args.parse_args()

        user = UserModel.find_by_auth(login_data['login'])
        print(login_data)
        if user and safe_str_cmp(user.password, login_data['password']):
            access_token = jwt.encode({"username": user.name, "exp": datetime.datetime.now() + datetime.timedelta(hours=12)}, app.config['SECRET_KEY'])
            return { 'access_token': access_token }, 200

        return { 'message': 'Access denied' }, 402