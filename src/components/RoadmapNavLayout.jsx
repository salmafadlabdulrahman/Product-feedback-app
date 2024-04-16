import { Outlet, NavLink } from "react-router-dom";

function RoadmapNavLayout() {
  const defaultPath = "/roadmap";
  return (
    <>
      <div className="md:hidden">
        <div className="roadmap-nav md:w-[90%] md:m-auto">
          <ul className="flex list-none justify-between border-b-2 border-[rgba(208, 204, 208, 0.384)] py-[1.5em] px-[2em] text-[#3A4374] text-[.9em] font-semibold ">
            <NavLink
              to={"."}
              className={({ isActive }) =>
                isActive && window.location.pathname == defaultPath
                  ? "border-b-4 border-[#F49F85]"
                  : ""
              }
            >
              Planned(2)
            </NavLink>
            <NavLink
              to={"progress"}
              className={({ isActive }) =>
                isActive ? "border-b-4 border-[#AD1FEA]" : ""
              }
            >
              In-Progress(3)
            </NavLink>
            <NavLink
              to={"live"}
              className={({ isActive }) =>
                isActive ? "border-b-4 border-[#4661E6]" : ""
              }
            >
              Live(1)
            </NavLink>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default RoadmapNavLayout;
