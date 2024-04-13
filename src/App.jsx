import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedbackDetails from "./pages/FeedbackDetails";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedbackdetails/:id" element={<FeedbackDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
