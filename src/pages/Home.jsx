import "../index.css";
import Navbar from "../components/Navbar";
import AddFeedback from "../components/AddFeedback";
import FeedbackCard from "../components/FeedbackCard";
import { useContext } from "react";
import { MyContext } from "../MyContext";

function Home() {
  const {currentCategorie} = useContext(MyContext)
  return (
    <div>
      <main className="main-container lg:flex gap-[3em] lg:w-[80%]">
        <Navbar />
        <div className="main-content lg:pt-[5em] lg:w-[100%]">
          <AddFeedback />
          {currentCategorie.map((comment, index) => (
            <FeedbackCard
              key={index}
              id={comment.id}
              title={comment.title}
              description={comment.description}
              category={comment.category}
              upvotes={comment.upvotes}
              commentsCount={comment.comments.length}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
