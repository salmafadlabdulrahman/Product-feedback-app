import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/forms.css";
import editIcon from "../assets/shared/icon-edit-feedback.svg";
import { useState } from "react";

function EditFeedbackForm() {
  const navigate = useNavigate();
  const params = useParams();

  const feedbacks = JSON.parse(localStorage.getItem("comments")) || [];
  const currentFeedback = feedbacks.filter(
    (feedback) => feedback.id === parseInt(params.id)
  )[0];

  const [feedbackTitle, setFeedbackTitle] = useState(currentFeedback?.title);
  const [selectedCategory, setSelectedCategory] = useState(
    currentFeedback?.category
  );
  const [feedbackDetails, setFeedbackDetails] = useState(
    currentFeedback?.description
  );
  const [selectedStatus, setSelectedStatus] = useState(currentFeedback?.status);

  const [feedbackTitleErrMsg, setFeedbackTitleErrMsg] = useState("");

  const [feedbackDetailsErrMsg, setFeedbackDetailsErrMsg] = useState("");

  const updateInputVal = function (event) {
    setFeedbackTitle(event.target.value);
    setFeedbackTitleErrMsg("Can't be empty");
  };

  const updateFeedbackVal = function (event) {
    setFeedbackDetails(event.target.value);
    setFeedbackDetailsErrMsg("Can't be empty");
  };

  const updateSelectedCategory = function (event) {
    setSelectedCategory(() => event.target.value);
  };

  const updateSelectedStatus = function (event) {
    setSelectedStatus(() => event.target.value);
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    if (feedbackTitle === "") {
      setFeedbackTitleErrMsg("Can't be empty");
      event.preventDefault();
    }

    if (feedbackDetails === "") {
      setFeedbackDetailsErrMsg("Can't be empty");
      event.preventDefault();
    }

    if (feedbackTitle && feedbackDetails) {
      const feedbackList = JSON.parse(localStorage.getItem("comments")) || [];
      const updatedList = feedbackList.map((feedback) => {
        if (feedback.id === currentFeedback.id) {
          return {
            ...feedback,
            title: feedbackTitle,
            category: selectedCategory,
            status: selectedStatus,
            description: feedbackDetails,
          };
        }
        return feedback;
      });
      localStorage.setItem("comments", JSON.stringify(updatedList));
      window.location.href = "/";
    }
  };

  const cancel = function (event) {
    event.preventDefault();
    navigate(-1);
  };

  const deleteFeedback = function (event) {
    event.preventDefault();
    const feedbackList = JSON.parse(localStorage.getItem("comments")) || [];
    const updatedList = feedbackList.filter((feedback) => feedback.id !== parseInt(params.id));
    localStorage.setItem("comments", JSON.stringify(updatedList));
    window.location.href = "/"
  };

  return (
    <form>
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
              Editing Feedback
            </h3>

            <h4 className="mt-[2em] font-semibold text-[.9em]">
              Feedback Title
            </h4>
            <p className="text-[#647196] text-[.9em]">
              Add a short, descriptive headline
            </p>
            <input
              type="text"
              value={feedbackTitle}
              onChange={updateInputVal}
              className="bg-[#F7F8FD] mt-[1em] w-[90%] h-[40px] rounded-lg pl-2 outline-none"
            />
            {feedbackTitle === "" ? (
              <p className="text-[#FF0000]">{feedbackTitleErrMsg}</p>
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
                value={selectedCategory}
                onChange={updateSelectedCategory}
              >
                <option value="ui">UI</option>
                <option value="ux">UX</option>
                <option value="enhancement">Enhancement</option>
                <option value="feature">Feature</option>
                <option value="bug">Bug</option>
              </select>
            </div>

            <h4 className="mt-[2em] font-semibold text-[.9em]">
              Update Status
            </h4>
            <label className="text-[#647196] text-[.9em]" htmlFor="status">
              Change Feature State
            </label>
            <div className="select-container">
              <select
                name="categories"
                id="categories"
                className="select-box"
                onChange={updateSelectedStatus}
                value={selectedStatus}
              >
                <option value="Suggestion">Suggestion</option>
                <option value="planned">Planned</option>
                <option value="in-progress">in-progress</option>
                <option value="live">Live</option>
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
                className="pl-[1em] pt-[1em] bg-[#F7F8FD] mt-[1em] outline-none rounded-lg w-[90%]"
                onChange={updateFeedbackVal}
                value={feedbackDetails}
              />
              {feedbackDetails === "" ? (
                <p className="text-[#FF0000]">{feedbackDetailsErrMsg}</p>
              ) : (
                ""
              )}
            </div>

            <div className="flex flex-col items-center mt-3 w-[90%] md:flex-row ">
              <button
                className=" bg-[#D73737] text-white rounded-lg font-semibold w-[100%] md:w-[140px] h-[40px] mb-2"
                onClick={deleteFeedback}
              >
                Delete
              </button>
              <div className="w-[100%] md:flex md:items-center justify-end gap-3">
                <button
                  className="bg-[#AD1FEA] text-white rounded-lg font-semibold text-[.9em] block w-[100%] h-[40px] md:w-[140px] mb-2"
                  onClick={handleSubmit}
                >
                  Save Changes
                </button>
                <button
                  className="bg-[#3A4374] text-white rounded-lg font-semibold text-[.9em] block w-[100%] h-[40px] md:w-[140px] mb-2"
                  onClick={cancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={editIcon}
          alt="plus icon to add feedback"
          className="absolute top-[80px] left-[43px]"
        />
      </div>
    </form>
  );
}

export default EditFeedbackForm;
