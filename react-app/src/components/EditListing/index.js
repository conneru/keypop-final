import { useState } from "react";
import EditListing from "./EditListing";
import { Modal } from "../../context/Modal";
import { setErrors } from "../../store/errors";
import { useDispatch } from "react-redux";

function EditListingModal({ listing }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <button id="edit-media-btn" onClick={() => setShowModal(true)}>
        Edit
      </button>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            dispatch(setErrors([]));
          }}
        >
          <EditListing setShowModal={setShowModal} listing={listing} />
        </Modal>
      )}
    </>
  );
}

export default EditListingModal;
