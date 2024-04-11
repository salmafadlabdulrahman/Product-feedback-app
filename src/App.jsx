import "./index.css";
import Navbar from "./components/Navbar";
import AddFeedback from "./components/AddFeedback";

function App() {
  return (
    <>
      <div>
        <main className="main-container lg:flex">
          <Navbar />
          <div className="main-content">
            <AddFeedback />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
