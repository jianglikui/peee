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

const doms = createDom({
  tagName: "div",
  style: "background:#f00",
  html: "body",
  children: [
    { tagName: "h1", html: "我是标题1" },
    { tagName: "h2", html: "我是标题2" },
  ],
});
console.log(doms);

document.body.append(doms.root);
