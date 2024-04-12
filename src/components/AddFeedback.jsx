import { useState } from "react";
import arrowUp from "../assets/shared/icon-arrow-up.svg";
import "../styles/feedback.css";

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
      <div className="bg-[#3A4374] text-white py-4 px-5 flex items-center justify-between">
        <h3 className="flex items-center gap-2">
          Sort by: {sorting[0]}{" "}
          <button onClick={() => setListOpen((prevState) => !prevState)}>
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
        <div className="bg-white w-[190px] rounded-xl filter-list">
          <ul className="comments-filter-list">
            {sorting.map((item, index) => (
              <li key={index} className="text-[#647196] text-[.8em] p-[.9em]">{item}</li>
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
