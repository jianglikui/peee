import { ADD, dispatch, subscribe } from "../../store";
import history from "../../history";
import { createDom } from "../../utils";

export default () => {
  const { root, h1 } = createDom({
    el: "div",
    children: [
      { el: "h1", html: "我是标题1", ref: "h1" },
      {
        el: "h2",
        ref: "h2",
        children: [
          {
            el: "button",
            html: "404",
            events: {
              click() {
                history.push("/404");
              },
            },
          },
          { el: "button", html: "button2" },
        ],
      },
    ],
  });

  return {
    dom: root,
    effect: () => {
      const unsubscribe = subscribe(function (state) {
        h1.innerText = state.times * state.times;
      });

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
