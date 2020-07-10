const addAttributes = (element, objAttr) => {
  for (const attr in objAttr) {
    if (objAttr.hasOwnProperty(attr)) {
      console.log(attr);

      element.setAttribute(attr, objAttr[attr]);
    }
  }
};

export const createElement = (element, attributes, child) => {
  const customElement = document.createElement(element);
  if (child !== undefined) {
    child.forEach((ele) => {
      ele.nodeType === 1 || ele.nodeType === 11 ? 
      customElement.appendChild(ele) :
        customElement.innerHTML += ele;
    });
  }
  addAttributes(customElement, attributes);
  return customElement;
};

export const removeChildren = (element) => {
  document.body.removeChild(element);
};

export const addChildren = (element) => {
  document.body.appendChild(element);
};
