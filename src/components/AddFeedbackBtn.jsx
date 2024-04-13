function AddFeedbackBtn({bgColor, content}) {
  return (
    <button className={`bg-[#${bgColor}] px-[1.4em] py-[.7em] rounded-lg text-[.8em] font-bold cursor-pointer`}>
      + {content} Feedback
    </button>
  );
}

export default AddFeedbackBtn;
