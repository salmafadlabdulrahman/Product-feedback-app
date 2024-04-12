import "../styles/feedback.css";
import iconComment from "../assets/shared/icon-comments.svg";

function FeedbackCard() {
  return (
    <div className="cards-container w-[90%] m-auto mt-6">
      <div className="card-container bg-white w-[100%] md:max-w-[80%] px-7 py-5 rounded-lg">
        <div className="main-card-content">
          <h2 className="text-[#3A4374] font-bold text-[1.3em] ">
            Add tags for solutions
          </h2>
          <p className="text-[#647196] text-[1em] tracking-wide mt-2">
            Easier to search for solutions based on a specific stack.
          </p>
          <button className="text-[#4661E6] bg-[#f7f8fd] font-bold py-[.5em] px-[1.1em] rounded-lg text-[.9em] cursor-pointer mt-5">
            Enhancement
          </button>
        </div>

        <div className="comments-container flex items-center justify-between mt-5">
          <div className="votes-num bg-[#f7f8fd] text-[#3A4374] flex items-center w-[70px] justify-center gap-2 h-[40px] rounded-lg font-bold text-[.9em]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
            99
          </div>
          <div className="comment flex items-center text-[#4661E6] font-bold gap-2">
            <img src={iconComment} alt="comments icon" />2
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
