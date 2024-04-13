function AddFeedbackBtn({bgColor, content}) {
  return (
    <button className={`px-[1.4em] py-[.7em] rounded-lg text-[.8em] font-bold cursor-pointer`} style={{backgroundColor: bgColor}}>
      + {content} Feedback
    </button>
  );
}

export default AddFeedbackBtn;
