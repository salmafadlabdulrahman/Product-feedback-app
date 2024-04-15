import { Outlet, Link } from "react-router-dom";

function RoadmapNavLayout() {
  return (
    <div>
      <div className="roadmap-nav">
        <ul className="flex list-none justify-between border-b-2 border-[rgba(208, 204, 208, 0.384)] py-[1.5em] px-[2em] text-[#3A4374] text-[.9em] font-semibold">
          <Link to={"planned"}>Planned(2)</Link>
          <Link to={"in-progress"}>In-Progress(3)</Link>
          <Link to={"live"}>Live(1)</Link>
        </ul>
      </div>
      <Outlet />
      
    </div>
  );
}

export default RoadmapNavLayout;
