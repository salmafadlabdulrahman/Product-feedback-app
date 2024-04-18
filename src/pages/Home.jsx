import "../index.css";
import Navbar from "../components/Navbar";
import AddFeedback from "../components/AddFeedback";
import FeedbackCard from "../components/FeedbackCard";
import { useContext } from "react";
import { MyContext } from "../MyContext";
import emptyPageIcon from "../assets/shared/suggestions/illustration-empty.svg";
import { Link } from "react-router-dom";

function Home() {
  const { currentCategorie } = useContext(MyContext);
  return (
    <div>
      <main className="main-container lg:flex gap-[3em] lg:w-[80%]">
        <Navbar />
        <div className="main-content lg:pt-[5em] lg:w-[100%]">
          <AddFeedback />
          {currentCategorie.length >= 1 ? (
            currentCategorie.map((comment, index) => (
              <FeedbackCard
                key={index}
                id={comment.id}
                title={comment.title}
                description={comment.description}
                category={comment.category}
                upvotes={comment.upvotes}
                commentsCount={comment.comments.length}
              />
            ))
          ) : (
            <div className="bg-white w-[90%] m-auto rounded-lg mt-5 md:max-w-[750px] lg:w-[100%]">
              <div className="text-center p-5">
                <img
                  src={emptyPageIcon}
                  alt="illustration of an empty page"
                  className="m-auto w-[130px]"
                />
                <h1 className="text-[#3A4374] font-bold text-[1.5em] tracking-light mt-4 leading-6">
                  There is no feedback <br /> yet
                </h1>
                <p className="text-[#647169] mt-5">
                  Got a suggestion? Found a bug that needs to be squashed? We
                  love hearing about new ideas to improve our app.
                </p>
                <Link to={"add-feedback"}>
                  <button
                    className={`bg-[#AD1FEA] px-[1.5em] py-[.8em] rounded-lg text-[.9em] font-bold cursor-pointer text-white mt-7`}
                  >
                    + Add Feedback
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
