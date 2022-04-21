from flask_restful import Resource

class Health_Check(Resource):
    def get(self):
        return { 'message': 'Service is up and running' }, 200