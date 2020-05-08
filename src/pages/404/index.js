import history from "../../history";
import { createDom } from "../../utils";

export default () => {
  const dom = createDom({
    el: "div",
    children: [
      { el: "h1", html: "404" },
      {
        el: "button",
        html: "首页",
        events: {
          click() {
            history.push("/");
          },
        },
      },
    ],
  }).root;
  return {
    dom,
  };
};
