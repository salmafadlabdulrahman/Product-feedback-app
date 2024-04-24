import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import FeedbackCard from "../components/FeedbackCard";
import CommentsContainer from "../components/CommentsContainer";
import AddComment from "../components/AddComment";

function FeedbackDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const commentData = JSON.parse(localStorage.getItem("comments")) || [];
  const currentData = commentData.find(
    (data) => data.id === parseInt(params.id)
  );

  const goBack = function() {
    navigate("/")
  }

  const cancel = function () {
    navigate(-1)
    //window.location.href = "/"
  };

  return (
    <div>
      <div className="nav-links flex items-center justify-between p-[2em] md:w-[750px] md:m-auto md:p-0 md:pt-[4em]">
          <Link className="flex items-center gap-2 text-[#4661E6] font-semibold text-[.9em]" onClick={cancel}>
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
          <Link to={`/edit-feedback/${params?.id}`}>
            <button className="bg-[#4661E6] px-[1.4em] py-[.7em] rounded-lg text-[.8em] font-bold cursor-pointer text-white">
              Edit Feedback
            </button>
          </Link>
        </div>
      </div>

      <div className="current-comment">
        <FeedbackCard
          id={currentData?.id}
          title={currentData?.title}
          description={currentData?.description}
          category={currentData?.category}
          upvotes={currentData?.upvotes}
          commentsCount={currentData?.comments?.length}
        />
      </div>

      <CommentsContainer commentData={currentData} />

      <AddComment />
    </div>
  );
}

export default FeedbackDetails;
