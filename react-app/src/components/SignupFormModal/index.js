import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "./SignUpForm";
import { useDispatch } from "react-redux";
import { setErrors } from "../../store/errors";
import "./Signup.css";

function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <span onClick={() => setShowModal(true)} className="signBtn">
        Sign Up
      </span>
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
