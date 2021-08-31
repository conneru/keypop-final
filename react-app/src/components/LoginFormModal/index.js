import { useState } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "./LoginForm";
import { Modal } from "../../context/Modal";
import { setErrors } from "../../store/errors";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <span onClick={() => setShowModal(true)} className="logBtn">
        Log In
      </span>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            dispatch(setErrors([]));
          }}
        >
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
