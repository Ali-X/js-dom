"use strict";

let colors = ['red', 'pink', 'green', 'blue', 'yellow', 'brown', 'purple'];
let element = document.getElementsByTagName("p")[0];

function colorText(node) {
  let text = node.innerText;
  let oldColor = "";
  let newText = "";

  for (let i = 0; i < text.length; i++) {
    do {
      var currColor = colors[Math.floor(Math.random() * (colors.length))];
    } while (currColor === oldColor);

    oldColor = currColor;
    newText = newText + text[i].fontcolor(currColor);
  }

  node.innerHTML = newText;
}

colorText(element);