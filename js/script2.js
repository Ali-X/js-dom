'use strict';

function getCellDiagonal() {
  let rows = document.getElementsByTagName('tr');

  for (let i = 0; i < rows.length; i++) {
    rows[i].getElementsByTagName('td')[i].style.background = 'red';
  }
}

getCellDiagonal();