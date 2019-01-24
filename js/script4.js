"use strict";

let element = document.getElementsByTagName("div")[0];

function createCloneNode(block) {
  let elementCopy = block.cloneNode(true);
  document.body.appendChild(elementCopy);
}

createCloneNode(element);