import { useState } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "./LoginForm";
import { Modal } from "../../context/Modal";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <button id="login-btn" onClick={() => setShowModal(true)}>
        Log In
      </button>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
