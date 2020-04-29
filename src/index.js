import history from "./history";
const root = document.body;
function handleHistoryChange(location) {
  switch (location.pathname) {
    case "/":
      import("./pages/homepage").then((module) => {
        root.appendChild(module.default());
      });
      break;
  }
}
history.listen(handleHistoryChange);
handleHistoryChange(location);
