import { useState } from "react";
import { Modal } from "../../context/Modal";
import { setErrors } from "../../store/errors";
import { useDispatch } from "react-redux";
import Purchased from "./Purchased";
import purchased from "../../font/purchased.jpg";
import "./PurchasedModal.css";

function PurchasedModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <img
        onClick={() => setShowModal(true)}
        src={purchased}
        alt="reciept"
        className="reciept"
      ></img>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            dispatch(setErrors([]));
          }}
        >
          <Purchased setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default PurchasedModal;
