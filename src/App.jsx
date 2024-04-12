import "./index.css";
import Navbar from "./components/Navbar";
import AddFeedback from "./components/AddFeedback";
import FeedbackCard from "./components/FeedbackCard";

function App() {
  return (
    <>
      <div>
        <main className="main-container lg:flex gap-[3em] lg:w-[80%]">
          <Navbar />
          <div className="main-content lg:pt-[5em] lg:w-[100%]">
            <AddFeedback />
            <FeedbackCard />
          </div>
        </main>
        
      </div>
    </>
  );
}

export default App;
