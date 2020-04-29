import history from "../../history";

export default () => {
  const notFoundEl = document.createElement("H1");
  notFoundEl.innerText = "Hello World!";
  const backButtonEl = document.createElement("BUTTON");
  backButtonEl.innerText = "404";
  backButtonEl.addEventListener("click", function () {
    history.push("/404");
  });
  const fragment = document.createDocumentFragment();
  fragment.append(notFoundEl);
  fragment.append(backButtonEl);
  const handleHistoryChange = (location) => {
    switch (location.pathname) {
      case "/":
        console.log(123);
        break;
    }
  };
  history.listen(handleHistoryChange);
  handleHistoryChange(history.location);
  return fragment;
};
