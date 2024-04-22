import Comment from "../components/Comment";
import ReplyComment from "./ReplyComment";
import "../styles/comment.css";

function CommentsContainer({ commentData }) {
  return (
    <div>
      <div className="bg-white mt-6 md:max-w-[750px] m-auto w-[90%] md:w-[100%] rounded-lg p-[2em] ">
        <h1 className="text-[#3A4374] font-bold text-[1.5em]">
          {commentData?.comments?.length} Comment
          {commentData?.comments?.length > 1 ? "s" : ""}
        </h1>
        {commentData?.comments?.map((item, index) => (
          <div key={index}>
            <div
              className={
                commentData?.comments?.length > 1 && index === 0
                  ? "comment-container"
                  : ""
              }
            >
              <Comment
                commentsCount={commentData?.comments?.length}
                userImg={item.user.image}
                name={item.user.name}
                userName={item.user.username}
                content={item.content}
                id={item.id}
                replies={item.replies ? item.replies : ""}
              />
            </div>

            <div className="replies-container">
              {item.replies
                ? item.replies.map((reply, index) => (
                    <ReplyComment key={index} reply={reply} />
                  ))
                : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentsContainer;
