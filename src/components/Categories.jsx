import { useContext } from "react";
import "../styles/navbar.css";
import { MyContext } from "../MyContext";
import data from "../../data.json";

function Categories() {
  const {
    currentRequest,
    setCurrentRequest,
    setCurrentList
  } = useContext(MyContext);

  const filterList = function (category) {
    const list =
      JSON.parse(localStorage.getItem("comments")) || data.productRequests;
    if (category === "all") {
      setCurrentRequest((prevState) => ({
        ...prevState,
        category: category,
      }));

      setCurrentList(() => list)
    } else {
      const result = list.filter((item) => item.category === category);
      setCurrentRequest((prevState) => ({
        ...prevState,
        category: category,
      }));
      setCurrentList(() => result)
    }
  };

  const categories = ["all", "ui", "ux", "enhancement", "feature", "bug"].map(
    (category, index) => (
      <li
        key={index}
        className={`${
          category === currentRequest.category ? "active" : ""
        } text-[#4661E6] bg-[#f7f8fd] font-bold py-[.5em] px-[1.1em] rounded-lg text-[.9em] cursor-pointer`}
        style={{
          textTransform: category.length === 2 ? "uppercase" : "capitalize",
        }}
        onClick={() => filterList(category)}
      >
        {" "}
        {category}
      </li>
    )
  );

  return (
    <div className="categories bg-white py-[1.1em] pl-[1.5em] rounded-xl md:h-[210px] md:w-[230px] lg:w-[100%] lg:h-[170px] lg:pr-3">
      <ul className="categories-container list-none flex flex-wrap gap-2 ">
        {categories}
      </ul>
    </div>
  );
}

export default Categories;
