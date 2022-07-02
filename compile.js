class Stack {
  constructor() {
    this.list = [];
  }

  push(item) {
    this.list.push(item);
  }
  pop() {
    return this.list.pop();
  }

  get current() {
    return this.list[this.list.length - 1] ?? null;
  }
  get isClosingTag() {
    return this.current ? this.current[0] === "/" : false;
  }
}

function getCompiledJSX(jsx) {
  const compiledJSX = document.createElement("div");
  const splittedJsx = jsx.split("<");
  console.log("Whole:", splittedJsx);

  const stack = new Stack();
  // Process DOM elements to create DOM object
  splittedJsx.forEach((item) => {
    if (!item) return;

    stack.push(item);
    if (stack.isClosingTag) {
      stack.pop();
      const tagWithChildren = stack.pop();

      const [tagName, children] = tagWithChildren.split(">");
      console.log(tagName, children);

      const tagElement = document.createElement(tagName);
      tagElement.textContent = children;
      compiledJSX.appendChild(tagElement);
    }
  });

  return compiledJSX;
}
