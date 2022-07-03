class TagStack {
  constructor() {
    this.list = [];
    // this.hierarchyLevel = 0;
  }

  push(item) {
    // this.hierarchyLevel++;
    this.list.push(item);
  }
  pop() {
    // this.hierarchyLevel--;
    return this.list.pop();
  }

  get hierarchyLevel() {
    return this.list.length;
  }
  get current() {
    return this.list[this.list.length - 1] ?? null;
  }
  get isOpeningTag() {
    return this.current ? !(this.current[0] === "/") : false;
  }
}

function getCompiledJSX(root, jsx) {
  // Needed to hold all elements
  // const compiledJSX = document.createElement("div");
  console.log(jsx.replace("\n", "").replace("\t", ""));
  const splittedJsx = jsx.split("<");
  console.log("Whole:", splittedJsx);

  // Acts as pointer
  let currentParent = null;

  // TODO: change to `rawTagNameStack`
  const stack = new TagStack();
  const currentParentStack = new TagStack();
  // currentParentStack.push(compiledJSX);

  // Process DOM elements to create DOM object
  splittedJsx.forEach((item) => {
    if (!item) return;

    // Create hierarchy if consecutive opening tags
    // Close hierarchy if consecutive closing tags

    // Pushing all items to use `isOpeningTag` feature of `TagStack`
    // Otherwise had to manually check it by calling some util function eg. `Utils.isOpeningTag(item)`
    stack.push(item);
    if (stack.isOpeningTag) {
      const [tagName, textContent] = stack.current.split(">");
      // console.log("Append ====>", tagName, textContent);

      const tagElement = document.createElement(tagName);
      tagElement.textContent = textContent.trim();
      // Don't push the parent, they will be added to root at script.js
      if (currentParentStack.current)
        currentParentStack.current.appendChild(tagElement);
      currentParentStack.push(tagElement);
      // currentParent = tagElement;
    } else {
      stack.pop();
      stack.pop();
      currentParent = currentParentStack.pop();

      // const tagWithChildren = stack.pop();
      // const [tagName, children] = tagWithChildren.split(">");
      // console.log("Append ====>", tagName, children);

      // It's easier to create here, otherwise we would have to push it somewhere. Which would take up spaces
      // Pushing string is space efficient than pushing DOM element
      // const tagElement = document.createElement(tagName);
      // tagElement.textContent = children;
      // currentParent.appendChild(tagElement);
    }
    // console.log(stack.list, stack.hierarchyLevel);
  });

  return currentParent;
  // return compiledJSX;
}
