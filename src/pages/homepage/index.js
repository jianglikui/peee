import { store } from "../../store";

export default () => {
  const h1 = document.createElement("H1");
  const fragment = document.createDocumentFragment();
  fragment.append(h1);

  return {
    dom: fragment,
    effect: () => {
      function renderH1() {
        h1.innerText = store.getState().times;
      }
      renderH1();
      store.subscribe(renderH1);

      var siv = setInterval(() => {
        store.dispatch({ type: "INCREMENT" });
      }, 1000);
      return () => {
        clearInterval(siv);
      };
    },
  };
};
