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
      <div className="reciept" onClick={() => setShowModal(true)}>
        <img src={purchased} alt="reciept"></img>
        <div>Purchases</div>
      </div>
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
