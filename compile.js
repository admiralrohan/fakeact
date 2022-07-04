/**
 * To manage DOM Hierarchy
 */
class TagStack {
  constructor() {
    this.list = [];
  }

  push(item) {
    this.list.push(item);
  }
  pop() {
    return this.list.pop();
  }

  /**
   * How deep are we inside the DOM tree
   */
  get hierarchyLevel() {
    return this.list.length;
  }
  /**
   * Stack top \
   * The tag in evaluation currently
   */
  get current() {
    return this.list[this.list.length - 1] ?? null;
  }
  /**
   * Is tag in evaluation a opening or closing tag?
   */
  get isOpeningTag() {
    return this.current ? !(this.current[0] === "/") : false;
  }
}

/**
 * We parse the JSX expression, and use 2 stacks to build up the DOM tree. \
 * We would like to create new level of hierarchy if we found 2 consecutive opening tags, and close one level if we found consecutive closing tags. \
 * This hierarchical system is automatically managed due to inherent nature of stack.
 *
 * @param {string} jsx JSX expression
 * @returns Compiled DOM tree ready to be attached to root node
 */
function getCompiledJSX(jsx) {
  const splittedJsx = jsx.split("<");
  console.log("Whole:", splittedJsx);

  /**
   * Acts as pointer, keeps track of DOM node where we should append currently processed node
   */
  let currentParent = null;

  /**
   * Holding raw tag name coming from JSX parsing eg. "button>\n\t\t\tClick me\n\t\t"
   */
  const rawTagStack = new TagStack();
  /**
   * Holding DOM elements that are used to structure the DOM tree \
   * Using two separate stacks for easier management
   */
  const domElementStack = new TagStack();

  // Process raw DOM elements from JSX to create DOM object
  splittedJsx.forEach((string) => {
    if (!string) return;

    // Pushing closing tags into the stack to use `isOpeningTag` feature of `TagStack`
    // Otherwise had to manually check it by calling some util function eg. `Utils.isOpeningTag(string)`
    rawTagStack.push(string);
    if (rawTagStack.isOpeningTag) {
      const [tagName, textContent] = rawTagStack.current.split(">");
      const tagElement = document.createElement(tagName);
      tagElement.textContent = textContent.trim();

      // We won't append the topmost parent of the JSX to anyone here, it will be added to root at script.js
      if (domElementStack.current)
        domElementStack.current.appendChild(tagElement);
      domElementStack.push(tagElement);
    } else {
      // Adjust stack top
      rawTagStack.pop();
      rawTagStack.pop();
      currentParent = domElementStack.pop();

      // Add the loose text after tag closing
      const [, textContent] = string.split(">");
      const textElement = document.createTextNode(textContent.trim());
      if (domElementStack.current)
        domElementStack.current.appendChild(textElement);
    }
  });

  return currentParent;
}
