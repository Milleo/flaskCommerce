from flask import Flask, jsonify, request
from config import db

class ProductModel(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    name = db.Column(db.String(200), nullable=False)

    def json(self):
        return {
            'id': self.id,
            'name': self.name
        }

    def save(self):
        db.session.add(self)
        db.session.commit()