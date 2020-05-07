import { store, ADD, dispatch, subscribe } from "../../store";
import history from "../../history";

export default () => {
  const h1 = document.createElement("H1");
  const fragment = document.createDocumentFragment();
  fragment.append(h1);

  const notFoundLink = document.createElement("A");
  notFoundLink.innerText = "404 page";
  notFoundLink.href = "/404";
  notFoundLink.onclick = (e) => {
    e.preventDefault();
    history.push("/404");
  };

  fragment.append(notFoundLink);

  return {
    dom: fragment,
    effect: () => {
      function renderH1(state) {
        console.log("执行订阅");
        h1.innerText = state.times;
      }
      const unsubscribe = subscribe(renderH1);
      var siv = setInterval(() => {
        dispatch({ type: ADD });
      }, 1000);

      return () => {
        clearInterval(siv);
        unsubscribe();
      };
    },
  };
};
