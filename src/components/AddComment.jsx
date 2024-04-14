import { useState } from "react";
import "../styles/comment.css"

function AddComment() {
  const [charactersLeft, setCharactersLeft] = useState(250);
  return (
    <div className="bg-white w-[90%] m-auto mt-[2em] rounded-lg p-[1.5em] md:w-[750px]">
      <h2 className="text-[#3A4374] font-bold text-[1.6em]">Add Comment</h2>
      <div className="w-[100%] h-[200px] bg-[#F7F8FD] mt-5 rounded-lg">
        <input
          type="text"
          placeholder="Type your comment here"
          className="bg-transparent p-5 outline-none"
        />
      </div>

      <div className="mt-[2em] flex justify-between items-center">
        <span className="text-[#647196]">{charactersLeft} characters left</span>
        <button className="add-comment-btn bg-[#AD1FEA] px-[1.4em] py-[.7em] opacity-50 rounded-xl text-white font-bold">
          Post Comment
        </button>
      </div>
    </div>
  );
}

export default AddComment;
