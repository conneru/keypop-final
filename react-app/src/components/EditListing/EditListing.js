import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editListing } from "../../store/listing";
import "./EditList.css";
import Errors from "../Errors";

const EditListing = ({ listing, setShowModal }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [description, setDescription] = useState(listing.description);
  const [imageUrl, setImageUrl] = useState(listing.image);
  const [condition, setCondition] = useState(listing.condition);
  const [category, setCategory] = useState(listing.category);
  const [subcategory, setSubCategory] = useState(listing.subcategory);
  const [price, setPrice] = useState(listing.price);

  async function submitForm(e) {
    e.preventDefault();
    const payload = {
      userId: user.id,
      description,
      image: imageUrl,
      condition,
      category,
      price,
      subcategory,
    };

    const success = await dispatch(editListing(payload, listing.id));
    if (success) {
      setShowModal(false);
    }
  }
  return (
    <div className="editList">
      <label className="ediTitle">EDIT LISTING</label>
      <form onSubmit={submitForm}>
        <div className="editErr">
          <Errors />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="textarea"
            className="editdescript"
          ></textarea>
        </div>
        <div>
          <label>Image Url</label>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="url"
          ></input>
        </div>
        {imageUrl ? (
          <div className="preveImg">
            <label>Image Preview</label>
            <img src={imageUrl} alt="imagepreview"></img>
          </div>
        ) : null}
        <div>
          <label>Price ($USD)</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            min={1}
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
            <option value="Minimal Wear">Minimal Wear</option>
            <option value="Field-Tested">Field-Tested</option>
            <option value="Well-Worn">Well-Worn</option>
            <option value="Battle-Scarred">Battle-Scarred</option>
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
        </div>
        {category !== "Switches" && category.length > 0 ? (
          <div>
            <label>Subcategory</label>
            <select
              value={subcategory}
              onChange={(e) => setSubCategory(e.target.value)}
              type="text"
            >
              <option value="" disabled hidden>
                Choose a subcategory
              </option>
              <option value="Full-Size">Full-Size (100%)</option>
              <option value="TKL (80%)">TKL (80%)</option>
              <option value="75%">75%</option>
              <option value="65%">65%</option>
              <option value="60%">60%</option>
              <option value="40%">40%</option>
              <option value="Other">Other</option>
            </select>
          </div>
        ) : null}
        <button type="submit" className="editTo">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditListing;
