import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedbackDetails from "./pages/FeedbackDetails";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmaps";
import Planning from "./components/Planning"
import Progress from "./components/Progress"
import Live from "./components/Live"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedbackdetails/:id" element={<FeedbackDetails />} />
          <Route path="/roadmap" element={<Roadmap />}>
            <Route index element={<Planning />} />
            <Route path="progress" element={<Progress />}/>
            <Route path="live" element={<Live />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
