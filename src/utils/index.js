export const createDom = (options) => {
  const doms = {};
  const findDom = (tree, container) => {
    const excludeAttrNames = ["html", "children", "ref", "el", "events"];
    const filterAttr = (attrName) => !excludeAttrNames.includes(attrName);
    const attrNames = Object.keys(tree).filter(filterAttr);

    //创建元素
    const target = document.createElement(tree.el);
    //html
    typeof tree.html !== "undefined" && (target.innerHTML = tree.html);
    //attr
    const setAttr = (attr) => target.setAttribute(attr, tree[attr]);
    attrNames.forEach(setAttr);
    //events
    if (tree.events) {
      for (const eventName in tree.events) {
        target.addEventListener(eventName, tree.events[eventName]);
      }
    }
    //ref
    if (tree.ref) doms[tree.ref] = target;

    if (Array.isArray(tree.children)) {
      const findChild = (child) => findDom(child, target);
      tree.children.forEach(findChild);
    }

    //返回root，追加child
    if (typeof container === "undefined") return target;
    container.appendChild(target);
  };
  doms.root = findDom(options);
  return doms;
};
