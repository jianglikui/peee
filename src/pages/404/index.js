import history from "../../history";

export default () => {
  const h1 = document.createElement("H1");
  h1.innerText = "404 not found";
  const fragment = document.createDocumentFragment();
  fragment.append(h1);

  const notFoundLink = document.createElement("A");
  notFoundLink.innerText = "首页";
  notFoundLink.href = "/";
  notFoundLink.onclick = (e) => {
    e.preventDefault();
    history.push("/");
  };
  fragment.append(notFoundLink);

  return {
    dom: fragment,
  };
};
