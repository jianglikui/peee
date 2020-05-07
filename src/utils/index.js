export const createDom = (options) => {
  //   const demo = {
  //     type: "div",
  //     id: "xx",
  //     alias: "",
  //     class: "xxx",
  //     children: [],
  //   };
  const doms = {};
  const findDom = (tree, container) => {
    const excludeAttrNames = ["html", "children", "ref", "tagName"];
    const filterAttr = (attrName) => !excludeAttrNames.includes(attrName);
    const attrNames = Object.keys(tree).filter(filterAttr);

    //初始化container
    if (!container) container = document.createElement(tree.tagName);
    container.innerHTML = tree.html;
    const setAttr = (attr) => container.setAttribute(attr, tree[attr]);
    attrNames.forEach(setAttr);

    if (Array.isArray(tree.children)) {
    }

    return container;
  };
  doms.root = findDom(options);
  return doms;
};
