from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profilepic = db.Column(db.String(500), default='https://www.avoiderrors.com/wp-content/uploads/2017/06/Create-a-New-User-in-Windows-Server-2016.png')
    bio = db.Column(db.String(500))
    address = db.Column(db.String(200))
    state = db.Column(db.String(100))

    listingUser = db.relationship("Listing", back_populates="user",foreign_keys='Listing.userId')
    listingPurchaser = db.relationship("Listing", back_populates="purchaser", foreign_keys='Listing.purchaserId')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profilepic':self.profilepic,
            'bio': self.bio,
            'address':self.address,
            'state':self.state
        }
