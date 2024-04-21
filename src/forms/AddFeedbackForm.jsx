import { Link, useNavigate } from "react-router-dom";
import "../styles/forms.css";
import plusIcon from "../assets/shared/icon-new-feedback.svg";
import { useState } from "react";

function AddFeedbackForm() {
  const navigate = useNavigate();
  const [feedbackTitle, setFeedbackTitle] = useState("");
  const [feedbackTouched, setFeedbackTouched] = useState(false);

  const [feedbackDetails, setFeedbackDetails] = useState("");
  const [feedbackDetailsTouched, setFeedbackDetailsTouched] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const updateInputVal = function (event) {
    setFeedbackTitle(event.target.value);
    setFeedbackTouched(true);
  };

  const updateFeedbackVal = function (event) {
    setFeedbackDetails(event.target.value);
    setFeedbackDetailsTouched(true);
  };

  const updateSelectedCategory = function (event) {
    setSelectedCategory(() => event.target.value);
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    const feedbackList = JSON.parse(localStorage.getItem("comments")) || [];
    const newList = {
      id: feedbackList.length + 1,
      title: feedbackTitle,
      category: selectedCategory,
      upvotes: 0,
      upvoted: false,
      status: "suggestion",
      description: feedbackDetails,
      comments: []
    }
    
    feedbackList.push(newList)
    localStorage.setItem("comments", JSON.stringify(feedbackList));

  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative lg:w-[50%] lg:m-auto">
        <div className="p-5 ">
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
            <h3 className="font-bold text-[1.2em] mt-[2em]">
              Create New Feedback
            </h3>

            <h4 className="mt-[2em] font-semibold text-[.9em]">
              Feedback Title
            </h4>
            <p className="text-[#647196] text-[.9em]">
              Add a short, descriptive headline
            </p>
            <input
              type="text"
              className="bg-[#F7F8FD] mt-[1em] w-[90%] h-[40px] rounded-lg outline-none pl-2"
              value={feedbackTitle}
              onChange={updateInputVal}
            />
            {feedbackTitle === "" && feedbackTouched ? (
              <p className="text-[#FF0000]">Can&apos;t be empty</p>
            ) : (
              ""
            )}

            <h4 className="mt-[2em] font-semibold text-[.9em]">Category</h4>
            <label className="text-[#647196] text-[.9em]" htmlFor="categories">
              Choose a category for your feedback
            </label>
            <div className="select-container">
              <select
                name="categories"
                id="categories"
                className="select-box"
                onChange={updateSelectedCategory}
                value={selectedCategory}
              >
                <option value="all">All</option>
                <option value="ui">UI</option>
                <option value="ux">UX</option>
                <option value="enhancement">Enhancement</option>
                <option value="feature">Feature</option>
                <option value="bug">Bug</option>
              </select>
            </div>

            <div>
              <h4 className="mt-[2em] font-semibold text-[.9em]">
                Feedback Detail
              </h4>
              <p className="text-[#647196] text-[.9em]">
                Include any specific comments on what should be improved, added,
                etc.
              </p>

              <textarea
                rows="4"
                cols="50"
                value={feedbackDetails}
                className="pl-[1em] pt-[1em] bg-[#F7F8FD] mt-[1em] outline-none rounded-lg w-[90%]"
                onChange={updateFeedbackVal}
              />
              {feedbackDetails === "" && feedbackDetailsTouched ? (
                <p className="text-[#FF0000]">Can&apos;t be empty</p>
              ) : (
                ""
              )}
            </div>

            <div className="mt-[2em]">
              <button className="bg-[#AD1FEA] w-[90%] block text-white h-[45px] rounded-xl font-semibold text-[.9em]">
                Add Feedback
              </button>
              <button className="bg-[#3A4374] w-[90%] text-white h-[45px] rounded-xl font-semibold text-[.9em] mt-[1em]">
                Cancel
              </button>
            </div>
          </div>
        </div>
        <img
          src={plusIcon}
          alt="plus icon to add feedback"
          className="absolute top-[80px] left-[43px]"
        />
      </div>
    </form>
  );
}

export default AddFeedbackForm;
