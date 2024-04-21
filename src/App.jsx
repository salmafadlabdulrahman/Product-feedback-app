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
import EditFeedbackForm from "./forms/EditFeedbackForm";
import data from "../data.json";

function App() {
  const list = JSON.parse(localStorage.getItem("comments"));
  const defaultList = !list
    ? localStorage.setItem("comments", JSON.stringify(data.productRequests))
    : list;
  const [currentCategorie, setCurrentCategorie] = useState(defaultList);
  const request = JSON.parse(localStorage.getItem("currentRequest"));
  const [currentRequest, setCurrentRequest] = useState(
    !request
      ? localStorage.setItem(
          "currentRequest",
          JSON.stringify({
            category: "all",
            roadmap: "in-progress",
            sort: "Most Upvotes",
          })
        )
      : request
  );

  return (
    <>
      <MyContext.Provider value={{ currentCategorie, setCurrentCategorie, currentRequest, setCurrentRequest }}>
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
            <Route path="/edit-feedback/:id" element={<EditFeedbackForm />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
