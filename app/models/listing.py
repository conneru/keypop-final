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
    subcategory = db.Column(db.String(100),default='')
    image = db.Column(db.String(500),nullable = False)
    sold = db.Column(db.Boolean, default=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    user = db.relationship("User", back_populates="listingUser",foreign_keys=[userId])
    purchaser = db.relationship("User", back_populates="listingPurchaser",foreign_keys=[purchaserId])

    def to_dict(self):
        if not self.purchaserId:
            purchaser = None
        else:
            purchaser = self.purchaser.username


        return {
            'id': self.id,
            'userId':self.userId,
            'purchaserId':self.purchaserId,
            'description':self.description,
            'price':self.price,
            'condition':self.condition,
            'category':self.category,
            'subcategory':self.subcategory,
            'image':self.image,
            'sold':self.sold,
            'createdAt':self.createdAt,
            'username':self.user.username,
            'profilepic':self.user.profilepic,
            'purchaser':purchaser
            # 'purchaser': self.purchaser
        }