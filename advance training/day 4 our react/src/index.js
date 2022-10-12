class ReactElement {
  constructor(type, props) {
    this.type = type;
    this.props = props;
  }
}

const React = {
  createElement: (type, propsArgs, ...childrenArgs) => {
    return new ReactElement(type, {
      ...propsArgs,
      children: childrenArgs.length === 1 ? childrenArgs[0] : childrenArgs,
    });
  },
};


const ReactDOM = {
  createRoot: (rootHtmlElement) => {
    const render = (rootReactElement) => {
      const renderReactElem = (parentElem, childElem) => {
        if (childElem instanceof ReactElement) {
          const domElement = document.createElement(childElem.type);

          const { children, ...restProps } = childElem.props;
          for (const [key, value] of Object.entries(restProps)) {
            domElement.setAttribute(key, value);
          }

          if (children instanceof Array) {
            children.forEach((child) => {
              renderReactElem(domElement, child);
            });
          } else {
            renderReactElem(domElement, children);
          }
          parentElem.appendChild(domElement);
        } else if (childElem instanceof Array) {
          children.forEach((child) => {
            renderReactElem(domElement, child);
          });
        } else if (
          typeof childElem === "string" ||
          typeof childElem === "number"
        ) {
          const textNode = document.createTextNode(childElem);
          parentElem.appendChild(textNode);
        }
      };

      renderReactElem(rootHtmlElement, rootReactElement);
    };

    return { render };
  },
};

//react element, describes what the real dom should look like
const app = (
  <section>
    <input placeholder="Enter your name: " className="asiodjasd" />
  </section>
);

//receives the description, and render dom elements on the page
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
