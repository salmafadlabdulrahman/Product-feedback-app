import { useState } from "react";
import "../styles/feedback.css";
import suggestionsIcon from "../assets/shared/suggestions/icon-suggestions.svg";
import checkIcon from "../assets/shared/icon-check.svg";

const sorting = [
  "Most Upvotes",
  "Least Upvotes",
  "Most Comments",
  "Least Comments",
];

function AddFeedback() {
  const [listOpen, setListOpen] = useState(false);
  return (
    <div>
      <div className="bg-[#3A4374] text-white py-4 px-5 flex items-center justify-between md:rounded-[10px] md:mt-[4em] md:max-w-[750px] md:m-auto lg:m-0">
        <h3 className="hidden md:flex items-center gap-3">
          <img src={suggestionsIcon} alt="suggestions icon" />7 Suggestions
        </h3>
        <h3 className="flex items-center gap-2">
          Sort by: {sorting[0]}{" "}
          <button
            onClick={() => setListOpen((prevState) => !prevState)}
            className={listOpen ? "arrow-down" : "arrow-up"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        </h3>
        <button className="bg-[#AD1FEA] px-[1.4em] py-[.7em] rounded-lg text-[.8em] font-bold cursor-pointer">
          + Add Feedback
        </button>
      </div>

      {listOpen ? (
        <div className="filter-list relative">
          <ul className="comments-filter-list bg-white w-[190px] rounded-xl ml-[1em] mt-[1em] md:m-auto md:mt-[1em] absolute md:left-0 md:right-0 lg:left-0 lg:right-0">
            {sorting.map((item, index) => (
              <li
                key={index}
                className="text-[#647196] text-[.8em] p-[.9em] flex items-center justify-between"
              >
                {item}
                {index === 0 ? <img src={checkIcon} /> : ""}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AddFeedback;
