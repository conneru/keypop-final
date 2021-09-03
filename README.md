# Keypop

Developed by Conner Underhill - [Keypop](https://keypop.herokuapp.com/)

## Keypop overview

Keypop is clone of Depop but instead of clothes it's a marketplace for keyboard enthusiasts to buy and sell used keyboards, parts, or accessories. The mechanical keyboard industry has a strong used market due to many parts being custom made and only purchasable for a limited time or quantity. For many the only way to get these rare keycaps,cases, or full keyboards is a used market!

![alt text](https://i.imgur.com/eLcMw4I.png)

## Application Architecture

Keypop is a fullstack application that uses React/Redux for the front end and Flask written with Python for the backend.

### React

React is a no brainer as reusable components are very useful for example the preview card for a listing on the shop page was reused in the cart and its as simple as passing the individual listing object into the component.

```javascript
<div className="allList">
  {listings.map((listing) => (
    <ListingPreview listing={listing} />
  ))}
</div>
```

![alt text](https://i.imgur.com/ONqswaY.png)

### Redux

Redux is the real star of the show for it's state managment capabilities. Without redux getting the info from the backend would be much more tedious. There are state changes everwhere whether its the listings, cart, or profile page and none of it would update smoothly without Redux.

### Flask/SQLAlchemy

The backend is done with Flask and written in python. I prefer to write the backend in Python as it feels more efficient. Flask's models and forms are really helpful and simple to use. SQLAlchemy's querying is also very easy to use with the redux state management.

# Conclusion Next Steps

Keypop is my first solo fullstack app that uses the Flask/Python backend. I really enjoy writing the backend in Python and I want more exposure to the language in general. This is the first project I've done the styling for on my own and it didn't turn out looking like it was from the 90's so I'm quite proud of that.

There is still a lot I want to implement into Keypop. Ideally it would be an exact clone of Depop and of the biggest parts of that I want to learn to implement is a live chat feature. Besides that there's a lot of cleaning up to do and small things like comments and reviews to be added!
