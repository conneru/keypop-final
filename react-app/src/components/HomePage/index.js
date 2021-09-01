import "./Homepage.css";
import { useHistory } from "react-router";
const HomePage = () => {
  const history = useHistory();
  return (
    <div className="homePage">
      <div className="banner">
        <div className="bannerText">
          <h1>BUY. SELL.</h1>
          <h1>DISCOVER UNIQUE KEYBOARDS.</h1>
          <p>
            Designer. Preloved. Vintage. Thock. Switches. Whatever your style.
            Find it on Keypop.
          </p>
        </div>

        <img
          src="https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/11/Mechanical-Keyboard-Buying-Guide-Gear-Patrol-lead-full.jpg"
          alt="bannerimg"
          className="bannerImg"
        ></img>
      </div>
      <div className="banner2">
        <div className="bannerText2">
          <h2>What is Keypop</h2>
          <p>
            Keypop is the keyboard marketplace app where the next generation
            come to discover unique items. With a global community buying,
            selling and connecting to make tech more inclusive, diverse and less
            wasteful. This is what transforming tech looks like.
          </p>
        </div>
        <img
          src="https://mechanicalkeyboards.com/shop/images/products/large_MX1A-C1NW_main.png"
          alt="tranKey"
          className="tranKey"
        ></img>
      </div>
      <div className="banner2">
        <img
          // src="https://onsitego.com/blog/wp-content/uploads/2021/01/Mechanical-Keyboard-Buying-Guide.jpg"
          src="https://freepngimg.com/thumb/keyboard/5-2-keyboard-transparent.png"
          alt="tranKey"
          className="img2"
        ></img>
        <div className="bannerText3">
          <h2>Find your keyboard</h2>
          <p>
            Shop the biggest brands you know and love. Discover independent
            brands making waves and the creators behind them. Whatever you're
            into, find the item and the seller for you on Keypop.
          </p>
          <div className="shopnow" onClick={() => history.push("/listings")}>
            Shop Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
