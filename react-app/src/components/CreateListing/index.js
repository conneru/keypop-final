import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setErrors } from "../../store/errors";
import { createListing } from "../../store/listing";
import Errors from "../Errors";
import "./Create.css";

const CreateListing = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [condition, setCondition] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();
  async function submitForm(e) {
    e.preventDefault();
    const listing = {
      userId: user.id,
      description,
      image: imageUrl,
      condition,
      category,
      price,
      subcategory,
    };
    const success = await dispatch(createListing(listing));
    if (success) {
      dispatch(setErrors([]));
      history.push(`/listings/${success.id}`);
    }
  }
  return (
    <div className="formContain">
      <div className="formWrap">
        <form onSubmit={submitForm}>
          <div className="errs">
            <div className="selltitle">Create a Listing</div>
            <Errors />
          </div>
          <div>
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              <option value="" disabled hidden>
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
              <option value="" disabled hidden>
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
              <label>Subcategory (Optional)</label>
              <select
                value={subcategory}
                onChange={(e) => setSubCategory(e.target.value)}
                type="text"
              >
                <option value="" disabled hidden>
                  Choose a subcategory
                </option>
                <option value="Full-Size (100%)">Full-Size (100%)</option>
                <option value="TKL (80%)">TKL (80%)</option>
                <option value="75%">75%</option>
                <option value="65%">65%</option>
                <option value="60%">60%</option>
                <option value="40%">40%</option>
                <option value="Other">Other</option>
              </select>
            </div>
          ) : null}
          <button type="submit" className="subTo">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateListing;
