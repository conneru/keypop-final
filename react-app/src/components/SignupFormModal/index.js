import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "./SignUpForm";
import { useDispatch } from "react-redux";
import { setErrors } from "../../store/errors";

function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <button id="signup-btn" onClick={() => setShowModal(true)}>
        Sign Up
      </button>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            dispatch(setErrors([]));
          }}
        >
          <SignUpForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default SignUpFormModal;
