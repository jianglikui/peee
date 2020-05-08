import history from "./history";
import { createDom } from "./utils";

const root = document.body;
let clearEffect = () => {};
let renderDom;
function handleHistoryChange(location) {
  clearEffect();

  root.innerHTML = "";

  const renderComponent = (promise) => {
    promise.then((module) => {
      const component = module.default();
      renderDom = component.dom;
      root.appendChild(component.dom);
      component.effect = component.effect || (() => {});
      clearEffect = component.effect() || (() => {});
    });
  };

  switch (location.pathname) {
    case "/":
      renderComponent(import("./pages/homepage"));
      break;
    case "/404":
      renderComponent(import("./pages/404"));
      break;
  }
}
history.listen(handleHistoryChange);
handleHistoryChange(location);
