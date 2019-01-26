'use strict';

let div = document.getElementsByTagName('div')[0];

console.log(addChildrenTo(div, 10, 'span'));

function addChildrenTo(block, count, type) {
  for (let i = 0; i < count; i++) {
    let typeElement = document.createElement(type);
    typeElement.innerHTML = (i + 1) + ') It\'s fifth task!</br>';
    block.appendChild(typeElement);
  }

  return block;
}
