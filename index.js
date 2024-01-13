import { signal, computed, effect } from "./signal.js";

// let counter = 1;
// let double = counter * 2;

// const container = document.createElement("h1");
// document.body.append(container);

// function updateCounterText() {
//   container.innerHTML  = `${counter} x 2 = ${double}`;
// }

// const button = document.createElement("button");
// document.body.append(button);
// button.innerHTML = "+1";

// button.addEventListener("click", () => {
//   counter += 1;
//   double = counter * 2;
//   updateCounterText();
// });


// Singal 적용
let RUNNING = null;

function runAndExtractDependencies(task) {
  RUNNING = task;
  task.execute()
  RUNNING = null;
}

let counter = signal(1);
let double = computed(() => counter.value * 2);

const container = document.createElement("h1");

effect(() => {
  container.innerHTML = `${counter.value} x 2 = ${double.value}`;
});

const button = document.createElement("button");
button.innerHTML = "+1";
button.addEventListener("click", () => counter.value += 1);

document.body.append(container);
document.body.append(button);
