import { Link, useNavigate } from "react-router-dom";
//import AddFeedbackBtn from "../components/AddFeedbackBtn";
import RoadmapNavLayout from "../components/RoadmapNavLayout";
import Planning from "../components/Planning";
import Progress from "../components/Progress";
import Live from "../components/Live";

function Roadmap() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#3A4374] p-4 flex items-center justify-between md:w-[90%] md:m-auto md:mt-[4em] md:rounded-lg md:p-[2em]">
        <div>
          <Link
            className="flex items-center gap-3 text-white font-semibold"
            onClick={() => navigate(-1)}
          >
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

        <button className="bg-[#AD1FEA] px-[1.4em] py-[.7em] rounded-lg text-[.8em] font-bold cursor-pointer text-white">
          + Add Feedback
        </button>
      </div>

      <div>
        <RoadmapNavLayout />
      </div>

      <div className="hidden md:block ">
        <div className="flex gap-[1em] w-[90%] m-auto mt-[2.5em] ">
          <Planning />
          <Progress />
          <Live />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
