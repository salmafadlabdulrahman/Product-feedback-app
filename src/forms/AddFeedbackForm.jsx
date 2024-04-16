import { Link, useNavigate } from "react-router-dom";
import "../styles/forms.css";
import { useState } from "react";

function AddFeedbackForm() {
  const [listOpen, setListOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="p-5">
      <Link
        className="flex items-center gap-3 text-[#4661e6] font-semibold"
        onClick={() => navigate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        Go Back
      </Link>
      <div className="bg-white mt-[4em] text-[#3A4374] p-[2em] pr-0 rounded-lg">
        <h3 className="font-bold text-[1.2em]">Create New Feedback</h3>

        <h4 className="mt-[2em] font-semibold text-[.9em]">Feedback Title</h4>
        <p className="text-[#647196] text-[.9em]">
          Add a short, descriptive headline
        </p>
        <input
          type="text"
          className="bg-[#F7F8FD] mt-[1em] w-[90%] h-[40px] rounded-lg"
        />

        <h4 className="mt-[2em] font-semibold text-[.9em]">Category</h4>
        <label className="text-[#647196] text-[.9em]" htmlFor="categories">
          Choose a category for your feedback
        </label>
        <div className="categories-list">
          <select
            name="categories"
            id="categories"
            className="outline-none relative custom-select"
          >
            <option value="ui">UI</option>
            <option value="ux">UX</option>
            <option value="enhancement">Enhancement</option>
            <option value="feature">Feature</option>
            <option value="bug">Bug</option>
          </select>

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
        </div>

        <div>
          <h4 className="mt-[2em] font-semibold text-[.9em]">
            Feedback Detail
          </h4>
          <p className="text-[#647196] text-[.9em]">
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <input type="text" className="pl-[1em] h-[150px] bg-[#F7F8FD] mt-[1em] w-[90%] outline-none rounded-lg align-top" />
        </div>
      </div>
    </div>
  );
}

export default AddFeedbackForm;
