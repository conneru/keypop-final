import { useState } from "react";
import { Modal2 } from "../../context/Modal";
import Cart from "./Cart";
// import { load } from "../../store/cart";

function CartModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="login-btn" onClick={() => setShowModal(true)}>
        Cart
      </button>
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
