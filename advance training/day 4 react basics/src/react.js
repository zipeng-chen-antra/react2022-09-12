const React = {
    createElement: (type, _, ...childrenArgs) => {
      return {
        type,
        props: {
          children: childrenArgs.length === 1 ? childrenArgs[0] : childrenArgs,
        },
      };
    },
  };
  
  const ReactDOM = {
    createRoot: (rootHtmlElement) => {
      const render = (rootReactElement) => {
        const renderReactElem = (parentDomElem, reactElem) => {
          const domElement = document.createElement(reactElem.type);
      
          const children = reactElem.props.children;
  
          if (typeof children === "string") {
            domElement.textContent = children;
          } else if (children instanceof Array) {
            children.forEach((child) => {
              renderReactElem(domElement, child);
            });
          } else if (typeof children === "object") {
            renderReactElem(domElement, children);
          }
          parentDomElem.appendChild(domElement);
        };
  
        renderReactElem(rootHtmlElement, rootReactElement);
      };
  
      return { render };
    },
  };
  