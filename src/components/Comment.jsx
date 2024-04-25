import { useState } from "react";
import "../styles/comment.css";
import currentUserData from "../../data.json";

const currentUser = currentUserData.currentUser;

function Comment({ userImg, name, userName, content, commentData }) {
  const [reply, setReply] = useState(false);
  const [replyContent, setReplyContent] = useState("");


  const addReply = function () {
    const feedbacks = JSON.parse(localStorage.getItem("comments")) || [];

    const newReply = {
      content: replyContent,
      replyingTo: userName,
      user: {
        image: currentUser.image,
        name: currentUser.name,
        username: currentUser.username,
      },
    };

    const updatedList = feedbacks.map((feedback) => {
      if (feedback.id === commentData.id) {
        const updatedComments = feedback.comments || [];
        const updatedReplies = updatedComments.map((comment) => {
          if (comment.user.username === userName) {
            return {
              ...comment,
              replies: comment.replies
                ? [...comment.replies, newReply]
                : [newReply],
            };
          }
          return comment;
        });

        return {
          ...feedback,
          comments: updatedReplies,
        };
      }

      return feedback;
    });

    localStorage.setItem("comments", JSON.stringify(updatedList));
  };

  return (
    <div>
      <div className="comment-content">
        <div className="flex items-center gap-5 mt-[2.5em]">
          <img
            src={userImg}
            alt="an image of current comment's writer"
            className="rounded-[50%] w-[50px]"
          />

          <div className="user-info flex items-start justify-between w-[4500px]">
            <div className="">
              <h4 className="text-[#3A4374] font-bold tracking-wide">{name}</h4>
              <h5 className="text-[#647196]">@{userName}</h5>
            </div>
            <button
              className="items-start text-[#4661E6] font-semibold text-[.9em]"
              onClick={() => setReply(!reply)}
            >
              Reply
            </button>
          </div>
        </div>

        <div className="comment-body">
          <p className="text-[#647196] mt-4">{content}</p>
        </div>

        {reply ? (
          <form>
            <div className="flex items-start  gap-4 mt-[1em]">
              <textarea
                rows={3}
                cols={70}
                className="bg-[#f7f8fd] rounded-xl outline-none pl-2"
                onChange={(event) => setReplyContent(event.target.value)}
                value={replyContent}
              />
              <button
                className="bg-[#AD1EFA] text-white font-semibold py-[.7em] px-[1.5em] rounded-xl"
                style={{
                  cursor: replyContent === "" ? "not-allowed" : "pointer",
                  opacity: replyContent === "" ? "0.6" : "1",
                }}
                onClick={addReply}
                disabled={replyContent === ""}
              >
                Post Reply
              </button>
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Comment;
