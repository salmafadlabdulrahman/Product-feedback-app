import Comment from "../components/Comment";

function CommentsContainer({ commentData }) {
  return (
    <div>
      <div className="comments-container bg-white mt-6 md:max-w-[750px] w-[90%] m-auto rounded-lg p-[2em]">
        <h1 className="text-[#3A4374] font-bold text-[1.5em]">
          {commentData.comments.length} Comment
          {commentData.comments.length > 1 ? "s" : ""}
        </h1>
        {commentData.comments.map((item, index) => (
          <div key={index}>
            <div
              className={
                commentData.comments.length > 1 && index === 0
                  ? "comment-container"
                  : ""
              }
            >
              <Comment
                commentsCount={commentData.comments.length}
                userImg={item.user.image}
                name={item.user.name}
                userName={item.user.username}
                content={item.content}
                id={item.id}
                replies={item.replies ? item.replies : ""}
              />
            </div>

            {/*<div className="replies-content">
              {item.replies ? item.replies.map((reply, index) => <Comment key={index} reply={reply} />) : ""}
            </div>*/}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentsContainer;
