import history from "../../routes";

export default () => {
  const notFoundEl = document.createElement("H1");
  notFoundEl.innerText = "404 Not Found!";
  const backButtonEl = document.createElement("BUTTON");
  backButtonEl.innerText = "返回首页";
  backButtonEl.addEventListener("click", function () {
    history.push("/");
  });
  document.body.appendChild(notFoundEl);
  document.body.appendChild(backButtonEl);
  return () => {
    console.log("close 404");
    document.body.removeChild(notFoundEl);
    document.body.removeChild(backButtonEl);
  };
};

export function useHistory() {
  return history;
}
