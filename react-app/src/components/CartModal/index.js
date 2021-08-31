import { useState } from "react";
import { Modal2 } from "../../context/Modal";
import Cart from "./Cart";
// import { load } from "../../store/cart";
import cart from "./cart.jpg";
import "./Cart.css";

function CartModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <img
        src={cart}
        alt="cart"
        className="cartImg"
        onClick={() => setShowModal(true)}
      ></img>
      {showModal && (
        <Modal2
          onClose={() => {
            setShowModal(false);
          }}
        >
          <Cart />
        </Modal2>
      )}
    </>
  );
}

export default CartModal;
