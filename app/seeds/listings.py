from app.models import db, Listing

def seed_listings():
    test1 = Listing(userId = 1,description='barely even took it out of the box',price=100,condition='Factory New',category='Keyboard',subcategory='TKL (80%)',image='https://i.pcmag.com/imagery/roundups/00aE5K1WsINRBBPjHLRHbXV-1..1569470766.jpg')
    test2 = Listing(userId = 2,description='built this from scratch all switches are lubed',price=250,condition='Minimal Wear',category='PCB',subcategory='Full-Size',image='https://thegadgetflow.com/wp-content/uploads/2021/05/Top-5-mechanical-keyboards-for-your-workspace-blog-featured.jpeg')
    test3 = Listing(userId = 3,description='i dont like the switches and im too lazy to change them',price=75,condition='Field-Tested',category='Keyboard',subcategory='75%',image='https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/11/Mechanical-Keyboard-Buying-Guide-Gear-Patrol-Feature.jpg')
    test4 = Listing(userId = 1,description='the stabilizers are broken so some repair needed',price=180,condition='Well-Worn',category='Switches',subcategory='65%',image='https://images.indianexpress.com/2021/06/Corsair-Mechanical-Keyboard.jpg')
    test5 = Listing(userId = 2,description='brand new i won it in a contest!',price=160,condition='Factory New',category='Keyboard',image='https://m.media-amazon.com/images/I/61N4RhDqCrL._AC_SY450_.jpg')
    test6 = Listing(userId = 3,description='just upgraded and built a new keyboard so i dont need this one anymore',price=500,condition='Minimal Wear',category='Case',subcategory='60%',image='https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-K2-hot-swappable-wireless-mechanical-keyboard-for-Mac-Windows-iOS-Gateron-switch-blue-with-type-C-RGB-white-backlight_1800x1800.jpg?v=1604558657')
    test7 = Listing(userId = 1,description='never had an issues with it and the stabs are lubed',price=89,condition='Field-Tested',category='PCB',subcategory='Other',image='https://cdn.shopify.com/s/files/1/0003/0182/6108/products/20200814_113759_grande.jpg?v=1604264946')
    test8 = Listing(userId = 2,description='the case has seen better days but all the internals are good',price=212,condition='Well-Worn',category='Case',image='https://cdn.vox-cdn.com/thumbor/i4CZ-fGvDjbidhcTFQ9WLJZszYI=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/16351678/pseawell_190614_3491_0002.jpg')
    test9 = Listing(userId = 3,description='very rare keycap set and switches are gateron yellows',price=182,condition='Factory New',category='Switches',image='https://ae01.alicdn.com/kf/Ha3477c16d96d4ffd811c40c065d4889cq/DY64-Mechanical-Keyboard-RGB-Backlight-PBT-Keycaps-HotSawp-Gateron-Switches-Yellow-Brown-Red-White-Blue-Multicolour.jpg_Q90.jpg_.webp')
    test10 = Listing(userId = 1,description='brand new but i dont like clicky switches so my loss is your gain',price=222,condition='Factory New',category='Keycaps',image='https://m.media-amazon.com/images/I/71nRfZNacyL._AC_SL1500_.jpg')
    test11 = Listing(userId = 1,description='barely even took it out of the box',price=100,condition='Factory New',category='Keyboard',image='https://mechanicalkeyboards.com/shop/images/products/large_VA87M2NWBPe7Hv_main.jpg')
    test12 = Listing(userId = 2,description='built this from scratch all switches are lubed',price=250,condition='Minimal Wear',category='Case',image='https://media.wired.com/photos/60be799feaa210b2096c93fa/master/pass/games_keyboards_S2Y202.jpg')
    test13 = Listing(userId = 3,description='i dont like the switches and im too lazy to change them',price=75,condition='Field-Tested',category='PCB',image='https://images.anandtech.com/doci/12061/CorsairK100CarB_678x452.jpg')
    test14 = Listing(userId = 1,description='the stabilizers are broken so some repair needed',price=180,condition='Well-Worn',category='Switches',image='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421508_sd.jpg')
    test15 = Listing(userId = 2,description='brand new i won it in a contest!',price=160,condition='Factory New',category='Keyboard',image='https://ae01.alicdn.com/kf/H9c9fb2e3a15848f8b65a0095391641a5T/RGB-LED-Backlit-Wired-Mechanical-Keyboard-Portable-Compact-Waterproof-Mini-PBT-72XB.jpg_Q90.jpg_.webp')
    test16 = Listing(userId = 3,description='just upgraded and built a new keyboard so i dont need this one anymore',price=500,condition='Minimal Wear',category='Keycaps',image='https://c1.neweggimages.com/ProductImage/A9HJD200928OHVPH.jpg')
    test17 = Listing(userId = 1,description='never had an issues with it and the stabs are lubed',price=89,condition='Field-Tested',category='Keyboard',image='https://i.pinimg.com/originals/dc/01/97/dc0197d5efcbbf25a02b8d61fbf5468b.jpg')
    test18 = Listing(userId = 2,description='the case has seen better days but all the internals are good',price=212,condition='Well-Worn',category='Keyboard',image='https://cdn.vox-cdn.com/thumbor/TWkAXKg5aV6qiHqL5NpRKyQEWbA=/0x0:1080x863/1200x800/filters:focal(454x346:626x518)/cdn.vox-cdn.com/uploads/chorus_image/image/66121449/EN8QytwVAAAfPJh.0.jpeg')
    test19 = Listing(userId = 3,description='very rare keycap set and switches are gateron yellows',price=182,condition='Factory New',category='Keyboard',image='https://i.redd.it/a7s7e9earxx51.jpg')
    test20 = Listing(userId = 1,description='brand new but i dont like clicky switches so my loss is your gain',price=222,condition='Factory New',category='Keyboard',image='https://cdn.cnn.com/cnnnext/dam/assets/210616103412-logitech-g915-lead-2.jpg')

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
    db.session.add(test11)
    db.session.add(test12)
    db.session.add(test13)
    db.session.add(test14)
    db.session.add(test15)
    db.session.add(test16)
    db.session.add(test17)
    db.session.add(test18)
    db.session.add(test19)
    db.session.add(test20)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_listings():
    db.session.execute('TRUNCATE listings RESTART IDENTITY CASCADE;')
    db.session.commit()