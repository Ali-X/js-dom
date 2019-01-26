'use strict';

let element = document.getElementsByTagName('div')[0];

createCloneNode(element);

function createCloneNode(block) {
  let elementCopy = block.cloneNode(true);
  document.body.appendChild(elementCopy);
}