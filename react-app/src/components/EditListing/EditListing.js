import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { editListing } from "../../store/listing";

const EditListing = ({ listing, setShowModal }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [description, setDescription] = useState(listing.description);
  const [imageUrl, setImageUrl] = useState(listing.image);
  const [condition, setCondition] = useState(listing.condition);
  const [category, setCategory] = useState(listing.category);
  const [price, setPrice] = useState(listing.price);

  function submitForm(e) {
    e.preventDefault();
    const payload = {
      userId: user.id,
      description,
      image: imageUrl,
      condition,
      category,
      price,
    };
    dispatch(editListing(payload, listing.id));
    setShowModal(false);
  }
  return (
    <form onSubmit={submitForm}>
      <div>
        <label>Description</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="textarea"
        ></input>
      </div>
      <div>
        <label>ImageUrl</label>
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          type="text"
        ></input>
      </div>
      <div>
        <label>Price</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
        ></input>
      </div>
      <div>
        <label>Condition</label>
        <select
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          type="text"
        >
          <option value="" disabled selected hidden>
            Choose a condition
          </option>
          <option value="Factory New">Factory New</option>
          <option value="Minmal Wear">Minimal Wear</option>
          <option value="Field-Tested">Field-Tested</option>
          <option value="Well-Worn">Well-Worn</option>
        </select>
      </div>
      <div>
        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
        >
          <option value="" disabled selected hidden>
            Choose a category
          </option>
          <option value="Keyboard">Keyboard</option>
          <option value="PCB">PCB</option>
          <option value="Case">Case</option>
          <option value="Switches">Switches</option>
          <option value="Keycaps">Keycaps</option>
        </select>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default EditListing;
