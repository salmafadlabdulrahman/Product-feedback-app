import data from "../../data.json";
import iconComment from "../assets/shared/icon-comments.svg";
import { Link } from "react-router-dom";

function Planning() {
  const planningData = data.productRequests
    .filter((feedback) => feedback.status === "planned")
    .map((response, index) => (
      <Link to={`/feedbackdetails/${response.id}`} key={index}>
        <div className="bg-white mt-5 py-[1.5em] px-[1.3em] rounded-lg border-t-[7px] border-[#F49F85]">
          <div>
            <span className="circle inline-block h-[10px] w-[10px] rounded-[50%] bg-[#F49F85]"></span>
            <span className="ml-3 text-[#647196] capitalize tracking-wide text-[1em]">
              {response.status}
            </span>
          </div>
          <h1 className="text-[#3A4374] font-bold text-[1.1em] mt-3">
            {response.title}
          </h1>
          <p className="text-[#647196] mt-3">{response.description}</p>
          <p className="text-[#4661E6] bg-[#f7f8fd] font-bold py-[.5em] px-[1.1em] rounded-md text-[.9em] cursor-pointer w-[80px] mt-4">
            {response.category}
          </p>

          <div className="flex items-center justify-between relative">
            <div className="comments-container flex items-center justify-between mt-5 md:m-0 cursor-pointer">
              <div className="votes-num bg-[#f7f8fd] text-[#3A4374] flex items-center w-[70px] justify-center gap-2 h-[40px] rounded-lg font-bold text-[.9em] md:order-1 md:block md:text-center md:h-[50px] md:pt-[.1em] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-6 md:m-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
                <span>{response.upvotes}</span>
              </div>
            </div>
            <div className="comment-img-container absolute right-[0px] bottom-[7px] ">
              {" "}
              {/*absolute md:order-3 right-[50px] bottom-[25px] */}
              <div className="comment flex items-center text-[#4661E6] font-bold gap-2">
                <img src={iconComment} alt="comments icon" />
                <span className="">{response.comments.length}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    ));

  return (
    <div className="px-[1.5em] py-2">
      <h2 className="text-[1.5em] font-bold text-[#3A4374] mt-3">
        Planned ({planningData.length})
      </h2>
      <p className="mt-3 text-[#647196]">Ideas prioritized for research</p>

      <div className="mb-[2em]">{planningData}</div>
    </div>
  );
}

export default Planning;
