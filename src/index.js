import history from "./history";

const root = document.body;
let clearEffect = () => {};
let renderDom;
function handleHistoryChange(location) {
  clearEffect();
  document.body.innerHTML = "";
  switch (location.pathname) {
    case "/":
      import("./pages/homepage").then((module) => {
        const component = module.default();
        renderDom = component.dom;
        root.appendChild(component.dom);
        clearEffect = component.effect();
      });
      break;
  }
}
history.listen(handleHistoryChange);
handleHistoryChange(location);
