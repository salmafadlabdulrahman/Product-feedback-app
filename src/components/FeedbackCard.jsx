import { Link } from "react-router-dom";

import "../styles/feedback.css";
import iconComment from "../assets/shared/icon-comments.svg";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../MyContext";

function FeedbackCard({
  id,
  title,
  description,
  category,
  upvotes,
  commentsCount,
}) {
  const [userUpvoted, setUserUpVoted] = useState(false);
  const [currentUpvoteCount, setCurrentUpvoteCount] = useState(upvotes);
  const { setCurrentCategorie } = useContext(MyContext);

  const changeUpvote = function () {
    const feedbacks = JSON.parse(localStorage.getItem("comments")) || [];
    const updateFeedbacks = feedbacks.map((feedback) => {
      if (feedback.id === id) {
        if (!userUpvoted) {
          feedback.upvotes = feedback.upvotes + 1;
          setCurrentUpvoteCount(() => feedback.upvotes);
        } else {
          feedback.upvotes = feedback.upvotes - 1;
          setCurrentUpvoteCount(() => feedback.upvotes);
        }
      }
      return feedback;
    });
    setCurrentCategorie(() => feedbacks);

    setUserUpVoted((prevUserUpvoted) => !prevUserUpvoted);
    localStorage.setItem("comments", JSON.stringify(updateFeedbacks));
  };

  useEffect(() => {
    setCurrentUpvoteCount(upvotes);
  }, [upvotes]);

  return (
    <div className="cards-container m-auto mt-6 md:max-w-[750px] md:mt-6">
      <div className="card-container w-[90%] m-auto md:w-[100%] bg-white px-7 py-5 rounded-lg md:flex md:items-center relative ">
        <div className="main-card-content md:order-2 md:ml-[4em] ">
          <Link to={`/feedbackdetails/${id}`}>
            <h2 className="text-[#3A4374] font-bold text-[1.3em] ">{title}</h2>
            <p className="description text-[#647196] text-[1em] tracking-wide mt-2">
              {description}
            </p>
            <button className="text-[#4661E6] bg-[#f7f8fd] font-bold py-[.5em] px-[1.1em] rounded-lg text-[.9em] cursor-pointer mt-5">
              {category}
            </button>
          </Link>
        </div>
        <div
          className="comments-container flex items-center justify-between mt-5 md:m-0 cursor-pointer md:order-1"
          onClick={() => changeUpvote()}
        >
          <div className="votes-num bg-[#f7f8fd] text-[#3A4374] flex items-center w-[70px] justify-center gap-2 h-[40px] rounded-lg font-bold text-[.9em] md:order-1 md:block md:text-center md:h-[50px] md:pt-[.1em]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-6 md:m-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
            <span>{currentUpvoteCount}</span>
          </div>
        </div>

        <div className="comment-img-container absolute md:order-3 right-[50px] bottom-[25px]">
          <div className="comment flex items-center text-[#4661E6] font-bold gap-2">
            <img src={iconComment} alt="comments icon" />
            <span className="">{commentsCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
