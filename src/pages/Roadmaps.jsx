import { Link } from "react-router-dom";
import AddFeedbackBtn from "../components/AddFeedbackBtn";
import RoadmapNavLayout from "../components/RoadmapNavLayout";

function Roadmap() {
  return (
    <div>
      <div className="bg-[#3A4374] p-4 flex items-center justify-between">
        <div>
          <Link className="flex items-center gap-3 text-white font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            Go Back
          </Link>
          <span className="pl-[.2em] text-[1.3em] text-white font-bold">
            Roadmap
          </span>
        </div>

        <AddFeedbackBtn bgColor={"#AD1FEA"} content={"Add"} />
      </div>

      <div>
        <RoadmapNavLayout />
      </div>
    </div>
  );
}

export default Roadmap;
