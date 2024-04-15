import { Outlet, Link } from "react-router-dom";

function RoadmapNavLayout() {
  return (
    <div className="md:hidden">
      <div className="roadmap-nav md:w-[90%] md:m-auto">
        <ul className="flex list-none justify-between border-b-2 border-[rgba(208, 204, 208, 0.384)] py-[1.5em] px-[2em] text-[#3A4374] text-[.9em] font-semibold ">
          <Link to={"."}>Planned(2)</Link>
          <Link to={"progress"}>In-Progress(3)</Link>
          <Link to={"live"}>Live(1)</Link>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default RoadmapNavLayout;