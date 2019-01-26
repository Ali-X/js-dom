'use strict';

function getAverageAgeBtwMomAndChildren() {
  let summOfAverages = 0;
  let familyNums = 0;

  OUTTER: for (let i = 0; i < ANCESTRY_FILE.length; i++) {
    let childYear = ANCESTRY_FILE[i].born;
    let motherName = ANCESTRY_FILE[i].mother;

    for (let j = 0; j < ANCESTRY_FILE.length; j++) {
      // debugger;
      let name = ANCESTRY_FILE[j].name;

      if (motherName === name) {
        summOfAverages += (childYear - ANCESTRY_FILE[j].born);
        familyNums++;
        continue OUTTER;
      }
    }
  }

  return Math.round(summOfAverages / familyNums);
}

function getAverageAge(inputSex) {
  let ageSumm = 0;
  let count = 0;

  for (let i = 0; i < ANCESTRY_FILE.length; i++) {
    let sex = ANCESTRY_FILE[i].sex;

    if (sex === inputSex) {
      let born = ANCESTRY_FILE[i].born;
      let died = ANCESTRY_FILE[i].died;
      ageSumm += died - born;
      count++;
    }
  }

  return Math.round(ageSumm / count);
}

function createHeader(table) {
  let headers = ['Name', 'Value'];
  let headElem = document.createElement('tr');
  headElem.setAttribute('class', 'table-header');

  for (let i = 0; i < headers.length; i++) {
    let dataElem = document.createElement('td');
    dataElem.innerText = headers[i];
    headElem.appendChild(dataElem);
  }

  table.appendChild(headElem);
}

function createRow(table, name, value) {
  let rowElem = document.createElement('tr');
  rowElem.setAttribute('class', 'table-row');
  let dataElem = document.createElement('td');
  dataElem.setAttribute('class', 'table-data-right');
  dataElem.innerText = name;
  rowElem.appendChild(dataElem);
  dataElem = document.createElement('td');
  dataElem.innerText = value;
  rowElem.appendChild(dataElem);

  table.appendChild(rowElem);
}

function createTable() {
  let tableElem = document.createElement('table');
  tableElem.setAttribute('class', 'table');

  createHeader(tableElem);
  createRow(tableElem, "Average age between mother and children", getAverageAgeBtwMomAndChildren());
  createRow(tableElem, "Average age of men", getAverageAge("m"));
  createRow(tableElem, "Average age of women", getAverageAge("f"));

  document.body.appendChild(tableElem);
}

function createCard(parentElem, human) {
  let divElem = document.createElement("div");
  divElem.setAttribute("class", "card");

  let nameElem = document.createElement("div");
  nameElem.innerText = human.name;
  nameElem.setAttribute("class", "card-item card-name");
  let sexElem = document.createElement("div");
  sexElem.setAttribute("class", "card-item card-sex");

  if (human.sex === "m") {
    sexElem.innerText = "man";
  } else {
    sexElem.innerText = "woman";
  }

  let agesElem = document.createElement("div");
  agesElem.innerText = human.born + " - " + human.died;
  agesElem.setAttribute("class", "card-item card-age");
  let fatherElem = document.createElement("div");
  fatherElem.innerText = "Father: " + human.father;
  fatherElem.setAttribute("class", "card-item card-father");
  let motherElem = document.createElement("div");
  motherElem.innerText = "Mother: " + human.mother;
  motherElem.setAttribute("class", "card-item card-mother");

  divElem.appendChild(nameElem);
  divElem.appendChild(sexElem);
  divElem.appendChild(agesElem);
  divElem.appendChild(fatherElem);
  divElem.appendChild(motherElem);

  parentElem.appendChild(divElem);
}

function createCards() {
  let divElem = document.createElement("div");
  divElem.setAttribute("class", "cards");

  for (let i = 0; i < ANCESTRY_FILE.length; i++) {
    createCard(divElem, ANCESTRY_FILE[i]);
  }

  document.body.appendChild(divElem);
}

createCards();
createTable();