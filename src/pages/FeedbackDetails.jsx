import { useParams, Link } from "react-router-dom";
import data from "../../data.json";
import AddFeedbackBtn from "../components/AddFeedbackBtn";
import FeedbackCard from "../components/FeedbackCard";

function FeedbackDetails() {
  const params = useParams();
  const commentData = data.productRequests[params.id - 1];

  return (
    <div>
      <div className="nav-links flex items-center justify-between p-[2em]">
        <Link to={"/"} className="flex items-center gap-2 text-[#4661E6] font-semibold text-[.9em]">
          {" "}
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
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          Go Back
        </Link>
        <div className="text-white">
          <AddFeedbackBtn bgColor={"#4661E6"} content={"Edit"} />
        </div>
      </div>

      <div className="current-comment">
        <FeedbackCard
          id={commentData.id}
          title={commentData.title}
          description={commentData.description}
          category={commentData.category}
          upvotes={commentData.upvotes}
          commentsCount={commentData.comments.length}
        />
      </div>
    </div>
  );
}

export default FeedbackDetails;
