import { useState } from "react";
import "../styles/comment.css";

function Comment({ userImg, name, userName, content }) {
  const [reply, setReply] = useState(false);
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
          <div className="flex items-start  gap-4 mt-[1em]">
            <textarea rows={3} cols={70} className="bg-[#f7f8fd] rounded-xl outline-none pl-2" />
            <button className="bg-[#AD1EFA] text-white font-semibold py-[.7em] px-[1.5em] rounded-xl">Post Reply</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Comment;
