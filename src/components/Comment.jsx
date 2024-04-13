function Comment({ userImg, name, userName, content, id }) {
  return (
    <div>
      <div className="comment-content">
        <div>
          <img
            src={userImg}
            alt="an image of current comment's writer"
            className="rounded-[50%] w-[50px]"
          />

          <div>
          <h4>{name}</h4>
          <h5>{userName}</h5>
          </div>
        </div>

        <div className="comment-body">
          
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
