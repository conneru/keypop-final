import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllListings, fetchByGenre } from "../../store/listing";
// import EditListingModal from "../EditListing";
import ListingPreview from "../ListingPreview";

import "./Listings.css";

function AllListings() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const [condition, setCondition] = useState("");
  const search = document.getElementById("searchbar")?.value;

  let listings = useSelector((state) => state.listingsReducer.listings);

  useEffect(() => {
    dispatch(fetchAllListings());
  }, [dispatch]);

  function searchListings(genre) {
    setCategory(genre);
    dispatch(fetchByGenre({ category: genre, subcategory, condition, search }));
  }
  function searchListingSub(subcategory) {
    setSubCategory(subcategory);
    dispatch(fetchByGenre({ category, subcategory, condition, search }));
  }
  function searchListingCon(condition) {
    setCondition(condition);
    dispatch(fetchByGenre({ category, subcategory, condition, search }));
  }

  function categoryExit() {
    setCategory("");
    dispatch(fetchByGenre({ category: "", subcategory, condition, search }));
  }
  function subCategoryExit() {
    setSubCategory("");
    dispatch(fetchByGenre({ category, subcategory: "", condition, search }));
  }
  function conditionExit() {
    setCondition("");
    dispatch(fetchByGenre({ category, subcategory, condition: "", search }));
  }

  return (
    <div className="allContain">
      <div className="wrapper">
        <h1 className="allTitle">Shop things we love</h1>
        <div>
          <div className="searchOpt">
            <div>
              <select
                value={category}
                onChange={(e) => searchListings(e.target.value)}
                type="text"
                style={{
                  outline: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                className="searchSel"
              >
                <option value="" disabled hidden>
                  Category
                </option>
                <option value="Keyboard">Keyboard</option>
                <option value="PCB">PCB</option>
                <option value="Case">Case</option>
                <option value="Switches">Switches</option>
                <option value="Keycaps">Keycaps</option>
              </select>
            </div>
            <div>
              <select
                value={subcategory}
                onChange={(e) => searchListingSub(e.target.value)}
                type="text"
                style={{ outline: "none", border: "none", cursor: "pointer" }}
                className="searchSel"
              >
                <option value="" disabled hidden>
                  Sub-Category
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
            <div>
              <select
                value={condition}
                onChange={(e) => searchListingCon(e.target.value)}
                type="text"
                style={{ outline: "none", border: "none", cursor: "pointer" }}
                className="searchSel"
              >
                <option value="" disabled selected hidden>
                  Condition
                </option>
                <option value="Factory New">Factory New</option>
                <option value="Minimal Wear">Minimal Wear</option>
                <option value="Field-Tested">Field-Tested</option>
                <option value="Well-Worn">Well-Worn</option>
                <option value="Battle-Scarred">Battle-Scarred</option>
              </select>
            </div>
          </div>
        </div>
        <div className="selectedOnes">
          {category ? (
            <div className="selectedOpt">
              {" "}
              <div>{category}</div>
              <div onClick={categoryExit} style={{ cursor: "pointer" }}>
                X
              </div>
            </div>
          ) : null}
          {subcategory ? (
            <div className="selectedOpt">
              {" "}
              <div>{subcategory}</div>
              <div onClick={subCategoryExit} style={{ cursor: "pointer" }}>
                X
              </div>
            </div>
          ) : null}
          {condition ? (
            <div className="selectedOpt">
              {" "}
              <div>{condition}</div>
              <div onClick={conditionExit} style={{ cursor: "pointer" }}>
                X
              </div>
            </div>
          ) : null}
        </div>
        <div className="allList">
          {listings.length ? (
            listings.map((listing) => (
              <ListingPreview key={listing.id} listing={listing} />
            ))
          ) : (
            <div className="noSearch">No items match the search criteria</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllListings;
