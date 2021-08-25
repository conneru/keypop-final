from .db import db
import datetime

class Listing(db.Model):
    __tablename__= 'listings'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer,db.ForeignKey('users.id'))
    purchaserId = db.Column(db.Integer,db.ForeignKey('users.id'))
    description = db.Column(db.String(500), nullable = False)
    price = db.Column(db.Integer, nullable = False)
    condition = db.Column(db.String(100),nullable = False)
    category = db.Column(db.String(100),nullable = False)
    subcategory = db.Column(db.String(100))
    image = db.Column(db.String(500),nullable = False)
    sold = db.Column(db.Boolean, default=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    user = db.relationship("User", back_populates="listingUser",foreign_keys=[userId])
    purchaser = db.relationship("User", back_populates="listingPurchaser",foreign_keys=[purchaserId])