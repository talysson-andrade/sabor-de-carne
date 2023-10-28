

const respTbl = document.createElement("div");
const tblBody = document.createElement("div");
const tblRow = document.createElement("div");
const tblCell = document.createElement("div");

respTbl.setAttribute("id", "resp-table");
tblBody.setAttribute("id", "resp-table-body");
tblRow.setAttribute("id", "resp-table-row");
tblCell.setAttribute("id", "table-body-cell");

respTbl.appendChild(tblBody);
tblBody.appendChild(tblRow);

var links = document.querySelectorAll('a');

links.forEach(function(link) {
link.addEventListener('click', function(event) {
event.preventDefault();

var destino = link.getAttribute('href');

window.location.href = destino;
});
});

