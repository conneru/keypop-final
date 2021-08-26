import { useState } from "react";
import { useDispatch } from "react-redux";
import EditListing from "./EditListing";
import { Modal } from "../../context/Modal";

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
          }}
        >
          <EditListing setShowModal={setShowModal} listing={listing} />
        </Modal>
      )}
    </>
  );
}

export default EditListingModal;
