from app.forms import ListingForm
from flask import Blueprint, jsonify, session, request
from app.models import Listing,User, db

listings_routes = Blueprint('listings',__name__)

@listings_routes.route('/')
def all_listings():
    listings = Listing.query.filter(Listing.sold ==False).order_by(Listing.id.desc()).all()

    return {'listings':[listing.to_dict() for listing in listings]}
    
@listings_routes.route('/user/<int:id>')
def user_listings(id):
    listings = Listing.query.filter(Listing.userId ==id).order_by(Listing.id.desc()).all()

    return {'userListings':[listing.to_dict() for listing in listings]}
@listings_routes.route('/purchaser/<int:id>')
def purchased_listings(id):
    listings = Listing.query.filter(Listing.purchaserId ==id).order_by(Listing.id.desc()).all()

    return {'purchasedListings':[listing.to_dict() for listing in listings]}

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
        errors = form.errors
        return jsonify([f'{field.capitalize()}: {error}'
                for field in errors
                for error in errors[field]]),400

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
        errors = form.errors
        return jsonify([f'{field.capitalize()}: {error}'
                for field in errors
                for error in errors[field]]),400

@listings_routes.route('/<int:id>/sell', methods=["PUT"])
def sell_listing(id):
    listing = Listing.query.get(id)
    form = ListingForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data)
    if form.validate_on_submit():
        listing.sold = True
        listing.purchaserId = form.purchaserId.data
        db.session.commit()

        # listings = Listing.query.order_by(Listing.id.desc()).all()

        # return {'listings':[listing.to_dict() for listing in listings]}
        return listing.to_dict()
    else:
        errors = form.errors
        print(errors)
        return jsonify([f'{field.capitalize()}: {error}'
                for field in errors
                for error in errors[field]]),400


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