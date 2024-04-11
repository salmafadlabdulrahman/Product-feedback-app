import "./index.css";
import Navbar from "./components/Navbar";
import AddFeedback from "./components/AddFeedback";

function App() {
  return (
    <>
      <div>
        <main className="main-container lg:flex gap-[3em]">
          <Navbar />
          <div className="main-content lg:pt-[5em]">
            <AddFeedback />
          </div>
        </main>
        
      </div>
    </>
  );
}

export default App;
