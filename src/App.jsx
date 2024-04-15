import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedbackDetails from "./pages/FeedbackDetails";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmaps";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedbackdetails/:id" element={<FeedbackDetails />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
