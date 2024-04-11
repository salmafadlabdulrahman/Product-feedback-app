import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Roadmap() {
  const roadmap = [
    { item: "Planned", count: 2, bgColor: "#e84d70" },
    { item: "In-Progress", count: 3, bgColor: "#A337F6" },
    { item: "Live", count: 1, bgColor: "#28a7ed" },
  ].map((current, index) => (
    <div key={index} className="flex items-center gap-4 mt-[7px] ">
      <span
        className={`circle`}
        style={{ backgroundColor: current.bgColor }}
      ></span>
      <li className="text-[#647196] w-[150px]">{current.item}</li>
      <p className="count text-[#647196] font-semibold">{current.count}</p>
    </div>
  ));
  return (
    <div className="roadmap bg-white py-[1.1em] pl-[1.5em] rounded-xl mt-4 pr-6">
      <div className="flex justify-between">
        <h3 className="text-[#3a4374] font-bold tracking-wider">Roadmap</h3>
        <a className="text-[#551a8b]">View</a>
      </div>
      <ul className="mt-6">{roadmap}</ul>
    </div>
  );
}

export default Roadmap;
