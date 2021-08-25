from app.models import db, Listing

def seed_listings():
    test1 = Listing(userId = 1, purchaserId = 3,description='yes sir',price=10,condition='Exellent',category='Keyboard',image='https://i.pcmag.com/imagery/roundups/00aE5K1WsINRBBPjHLRHbXV-1..1569470766.jpg')

    db.session.add(test1)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_listings():
    db.session.execute('TRUNCATE listings RESTART IDENTITY CASCADE;')
    db.session.commit()