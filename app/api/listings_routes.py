from app.forms import ListingForm
from flask import Blueprint, jsonify, session, request
from app.models import Listing,User, db

listings_routes = Blueprint('listings',__name__)

@listings_routes.route('/')
def all_listings():
    listings = Listing.query.order_by(Listing.id.desc()).all()

    return {'listings':[listing.to_dict() for listing in listings]}

@listings_routes.route('/', methods=["POST"])
def create_listing():
    form = ListingForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data)
    if form.validate_on_submit():
        print('----------------------')
        listing = Listing(
            userId = form.userId.data,
            description=form.description.data,
            image=form.image.data,
            condition = form.condition.data,
            category = form.category.data,
            price = form.price.data,
            subcategory = form.subcategory.data
        )
        db.session.add(listing)
        db.session.commit()
        return listing.to_dict() 
    else:
        print(form.errors)

@listings_routes.route('/<int:id>', methods=["PUT"])
def edit_listing(id):
    listing = Listing.query.get(id)
    form = ListingForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data)
    if form.validate_on_submit():
        listing.userId = form.userId.data
        listing.description=form.description.data,
        listing.image=form.image.data,
        listing.condition = form.condition.data,
        listing.category = form.category.data,
        listing.subcategory = form.subcategory.data,
        listing.price = form.price.data
        db.session.commit()

        # listings = Listing.query.order_by(Listing.id.desc()).all()

        # return {'listings':[listing.to_dict() for listing in listings]}
        return listing.to_dict()
    else:
        print(form.errors)


@listings_routes.route('/<int:id>',methods=['DELETE'])
def delete_listing(id):
    listing = Listing.query.get(id)
    db.session.delete(listing)
    db.session.commit()
    return 'deleted'

@listings_routes.route('/<int:id>')
def get_one_listing(id):
    listing = Listing.query.get(id)
    
    return listing.to_dict()