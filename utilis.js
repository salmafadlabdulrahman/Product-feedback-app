import data from "./data.json";

export const filterCategories = function (currCategory) {
  const feedbacks =
    JSON.parse(localStorage.getItem("comments")) || data.productRequests;
  if (currCategory === "all") {
    const result = localStorage.setItem("comments", JSON.stringify(feedbacks));
    return result;
  } else {
    const list = feedbacks.filter((item) => item.category === currCategory);
    return list;
  }
};

export const sortComments = function (list, sortingType) {
  if (sortingType.includes("Upvotes")) {
    if (sortingType.includes("Most")) {
      const sortedList = [...list].sort((a, b) => b.upvotes - a.upvotes);
      return sortedList;
    } else {
      const sortedList = [...list].sort((a, b) => a.upvotes - b.upvotes);
      return sortedList;
    }
  }

  if (sortingType.includes("Comments")) {
    if (sortingType.includes("Most")) {
      const sortedList = [...list].sort(
        (a, b) => b.comments.length - a.comments.length
      );
      return sortedList;
    } else {
      const sortedList = [...list].sort(
        (a, b) => a.comments.length - b.comments.length
      );
      return sortedList;
    }
  }
};
