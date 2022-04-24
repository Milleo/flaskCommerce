import os
from seeder import ResolvingSeeder
from flask import Flask
from flask.cli import with_appcontext
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate



app = Flask(__name__)

db_host = os.getenv("DATABASE_HOST")
db_user = os.getenv("DATABASE_USER")
db_passwd = os.getenv("DATABASE_PASSWORD")
db_name = os.getenv("DATABASE_DATABASE_NAME")

database_uri = 'mysql+pymysql://{}:{}@{}/{}?charset=utf8mb4'.format(db_user, db_passwd, db_host, db_name)
app.config['SQLALCHEMY_DATABASE_URI'] = database_uri
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'the random string'

db = SQLAlchemy(app)

@app.before_first_request
def create_database():
    db.create_all()
    seeder = ResolvingSeeder(db.session)
    from models.user import UserModel
    #seeder.load_entities_from_json_file("./database/seeder.json")
    #db.session.commit()