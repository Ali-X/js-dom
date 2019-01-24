"use strict";

let div = document.createElement('div');

function addChildrenTo(block, count, type) {
  for (let i = 0; i < count; i++) {
    let typeElement = document.createElement(type);
    typeElement.innerHTML = (i + 1) + ") It's fifth task!";
    block.appendChild(typeElement);
  }

  return block;
}

console.log(addChildrenTo(div, 10, "span"));
