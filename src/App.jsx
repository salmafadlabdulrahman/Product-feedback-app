import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedbackDetails from "./pages/FeedbackDetails";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmaps";
import Planning from "./components/Planning";
import Progress from "./components/Progress";
import Live from "./components/Live";
import { MyContext } from "./MyContext";
import { useState } from "react";
import AddFeedbackForm from "./forms/AddFeedbackForm";

function App() {
  const [addFeedbackForm, setAddFeedbackForm] = useState(false);
  return (
    <>
      <MyContext.Provider value={{addFeedbackForm, setAddFeedbackForm}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feedbackdetails/:id" element={<FeedbackDetails />} />
            <Route path="/roadmap" element={<Roadmap />}>
              <Route index element={<Planning />} />
              <Route path="progress" element={<Progress />} />
              <Route path="live" element={<Live />} />
            </Route>
            <Route path="add-feedback" element={<AddFeedbackForm />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
