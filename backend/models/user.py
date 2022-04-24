from flask import Flask, jsonify, request
from config import db

class UserModel(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    name = db.Column(db.String(75), nullable=False)
    login = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(75), nullable=False)
    password = db.Column(db.String(200), nullable=False)
    

    def json(self):
        return {
            'id': self.id,
            'name': self.name,
            'login': self.login,
            'email': self.email,
            'password': self.password
        }

    @classmethod
    def find_by_auth(cls, login):
        user = cls.query.filter_by(login=login).first()
        if user:
            return user
        return None

    def save(self):
        db.session.add(self)
        db.session.commit()