import { useState } from "react";
import "../styles/comment.css";

function AddComment({ commentData }) {
  const [charactersLeft, setCharactersLeft] = useState(250);
  const [commentContent, setCommentContent] = useState("");

  const addComment = function () {
    const feedbacks = JSON.parse(localStorage.getItem("comments")) || [];
    const newComment = {
      content: commentContent,
      user: {
        image: "/user-images/image-suzanne.jpg",
        name: "Suzanne Chang",
        username: "upbeat1811",
      },
      id:
        commentData.comments.length >= 1
          ? commentData.comments[commentData.comments.length - 1].id + 1
          : 1,
    };
    const updatedList = feedbacks.map((feedback) => {
      if (feedback.id === commentData.id) {
        return {
          ...feedback,
          comments: feedback.comments
            ? [...feedback.comments, newComment]
            : [newComment],
        };
      }

      return feedback;
    });
    localStorage.setItem("comments", JSON.stringify(updatedList));
  };

  return (
    <div className="bg-white w-[90%] m-auto mt-[2em] rounded-lg p-[1.5em] md:w-[750px]">
      <h2 className="text-[#3A4374] font-bold text-[1.6em]">Add Comment</h2>
      <form>
        <div className="bg-[#F7F8FD] rounded-lg mt-2">
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            placeholder="Type your comment here"
            className="bg-transparent pl-3 pt-3 outline-none w-[100%]"
            value={commentContent}
            onChange={(event) => {
              if (event.target.value.length <= 250) {
                setCharactersLeft(250 - event.target.value.length);
                setCommentContent(event.target.value);
              }
            }}
          />
        </div>

        <div className="mt-[2em] flex justify-between items-center">
          <span
            className=""
            style={{ color: charactersLeft === 0 ? "#ff0000" : "#647196" }}
          >
            {charactersLeft} characters left
          </span>
          <button
            className="add-comment-btn bg-[#AD1FEA] px-[1.4em] py-[.7em] opacity-50 rounded-xl text-white font-bold"
            style={{
              cursor: commentContent === "" ? "not-allowed" : "pointer",
              opacity: commentContent === "" ? "0.6" : "1",
            }}
            onClick={addComment}
            disabled={commentContent === ""}
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddComment;
