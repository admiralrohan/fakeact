const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

let count = 1;
const increment = () => {
  count++;
};
const decrement = () => {
  count--;
};

// console.log(root);
// setTimeout(() => {
//   console.log(root);
//   root.innerText = "Hello world";
// }, 3000);

function Counter() {
  // let count = 4;

  // const increment = () => {
  //   count++;
  // };
  // const decrement = () => {
  //   count--;
  // };

  return `<span>Hi</span>`;
  // return `<span>Hi</span>
  // 					<button>Click me</button>`;
  // return `<div>
  // 					<span>Hi</span>
  // 					<button>Click me</button>
  // 				</div>`;
  // return `<div>Count: ${count}</div>
  //     <button onclick=${decrement}>Decrement</button>
  //     <button onclick=${increment}>Increment</button>`;
}

const counterComponent = Counter();
const compiledJSX = getCompiledJSX(counterComponent);
console.log("Compiled:", compiledJSX);
root.appendChild(compiledJSX);

// <Counter />
