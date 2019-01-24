"use strict";

let oldElement = document.getElementById('old');
let newElement = document.createElement('span');
newElement.innerText = "New node";

function replaceElementBy(blockCurrent, blockToReplace) {
  if (document.contains(blockCurrent)) {
    blockCurrent.replaceWith(blockToReplace);
    console.log("Replacing is successful");
  } else {
    console.log("Replacing is unsuccessful");
  }
}

replaceElementBy(oldElement, newElement);