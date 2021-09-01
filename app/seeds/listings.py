from app.models import db, Listing

def seed_listings():
    test1 = Listing(userId = 1, purchaserId = 3,description='yes sir',price=10,condition='Factory New',category='Keyboard',image='https://i.pcmag.com/imagery/roundups/00aE5K1WsINRBBPjHLRHbXV-1..1569470766.jpg')
    test2 = Listing(userId = 2, purchaserId = 3,description='yes sir',price=10,condition='Factory New',category='Keyboard',image='https://thegadgetflow.com/wp-content/uploads/2021/05/Top-5-mechanical-keyboards-for-your-workspace-blog-featured.jpeg')
    test3 = Listing(userId = 3, purchaserId = 3,description='yes sir',price=10,condition='Factory New',category='Keyboard',image='https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/11/Mechanical-Keyboard-Buying-Guide-Gear-Patrol-Feature.jpg')
    test4 = Listing(userId = 1, purchaserId = 3,description='yes sir',price=10,condition='Factory New',category='Keyboard',image='https://images.indianexpress.com/2021/06/Corsair-Mechanical-Keyboard.jpg')
    test5 = Listing(userId = 2, purchaserId = 3,description='yes sir',price=10,condition='Factory New',category='Keyboard',image='https://m.media-amazon.com/images/I/61N4RhDqCrL._AC_SY450_.jpg')
    test6 = Listing(userId = 3, purchaserId = 3,description='yes sir',price=10,condition='Factory New',category='Keyboard',image='https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-K2-hot-swappable-wireless-mechanical-keyboard-for-Mac-Windows-iOS-Gateron-switch-blue-with-type-C-RGB-white-backlight_1800x1800.jpg?v=1604558657')
    test7 = Listing(userId = 1, purchaserId = 3,description='yes sir',price=10,condition='Factory New',category='Keyboard',image='https://cdn.shopify.com/s/files/1/0003/0182/6108/products/20200814_113759_grande.jpg?v=1604264946')
    test8 = Listing(userId = 2, purchaserId = 3,description='yes sir',price=10,condition='Factory New',category='Keyboard',image='https://cdn.vox-cdn.com/thumbor/i4CZ-fGvDjbidhcTFQ9WLJZszYI=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/16351678/pseawell_190614_3491_0002.jpg')
    test9 = Listing(userId = 3, purchaserId = 3,description='yes sir',price=10,condition='Factory New',category='Keyboard',image='https://ae01.alicdn.com/kf/Ha3477c16d96d4ffd811c40c065d4889cq/DY64-Mechanical-Keyboard-RGB-Backlight-PBT-Keycaps-HotSawp-Gateron-Switches-Yellow-Brown-Red-White-Blue-Multicolour.jpg_Q90.jpg_.webp')
    test10 = Listing(userId = 1, purchaserId = 3,description='yes sir',price=10,condition='Factory New',category='Keyboard',image='https://m.media-amazon.com/images/I/71nRfZNacyL._AC_SL1500_.jpg')

    db.session.add(test1)
    db.session.add(test2)
    db.session.add(test3)
    db.session.add(test4)
    db.session.add(test5)
    db.session.add(test6)
    db.session.add(test7)
    db.session.add(test8)
    db.session.add(test9)
    db.session.add(test10)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_listings():
    db.session.execute('TRUNCATE listings RESTART IDENTITY CASCADE;')
    db.session.commit()