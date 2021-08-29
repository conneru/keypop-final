import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal2 } from "../../context/Modal";
import Cart from "./Cart";
import { load } from "../../store/cart";

function CartModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

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
