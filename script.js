// class FakeactDOM {
//   static createRoot(element) {
//     this.root = element;
//     return new this();
//   }

//   render(element) {
//     const compiledJSX = getCompiledJSX(element);
//     this.root.appendChild(compiledJSX);
//   }
// }

// const root = FakeactDOM.createRoot(document.getElementById("root"));
const root = document.getElementById("root");

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

  // return `<span>Hi</span>`;
  // return `<span>Hi</span>
  // 					<button>Click me</button>`;

  // return `<div><span>Hi</span><button>Click me</button></div>`;
  return `<div>
						<p>Start
						</p>a
  					<span>
							Hi
						</span>
  					<button>
							Click me
						</button>
  				</div>`;

  // return `<div><span>Hi</span><button><span>Click <strong>me</strong></span></button></div>`;
  // return `<div>
  // 					<span>Hi</span>
  // 					<button>
  // 						<span>Click <strong>me</strong></span>
  // 					</button>
  // 				</div>`;

  // return `<div>Count: ${count}</div>
  //     <button onclick=${decrement}>Decrement</button>
  //     <button onclick=${increment}>Increment</button>`;
}

const counterComponent = Counter();
// root.render(counterComponent);
const compiledJSX = getCompiledJSX(counterComponent);
// console.log("Compiled:", compiledJSX);
root.appendChild(compiledJSX);

// <Counter />
