import "../styles/comment.css";

function Comment({ commentsCount, userImg, name, userName, content, id }) {
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
            <button className="items-start text-[#4661E6] font-semibold text-[.9em]">
              Reply
            </button>
          </div>
        </div>

        <div className="comment-body">
          <p className="text-[#647196] mt-4">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
