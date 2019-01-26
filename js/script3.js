'use strict';

function createSpanInBlockByID(blockID) {
  let elementById = document.getElementById(blockID);
  if (elementById != null) {
    let spanElement = elementById.querySelector('span');

    if (spanElement == null) {
      spanElement = document.createElement('span');
      spanElement.textContent = 'new span';
      elementById.appendChild(spanElement);
    }
  } else {
    console.log('No tag with id ' + blockID);
  }
}

createSpanInBlockByID('testBlock');