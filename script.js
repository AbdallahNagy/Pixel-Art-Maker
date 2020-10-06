function drawGrid() {
  var table = document.getElementById("gridId");
  table.innerHTML = "";
  var rows = document.getElementById("heightId").value;
  var cols = document.getElementById("widthId").value;
  var tabledata = "";
  for (var i = 0; i < rows; i++) {
    tabledata += "<tr>";
    for (var x = 0; x < cols; x++) {
      tabledata += "<td></td>";
    }
    tabledata += "</tr>";
  }
  table.innerHTML = tabledata;
  addEventForTd();
}

function addEventForTd() {
  var tds = document.getElementsByTagName("td");
  for (var i = 0; i < tds.length; i++) {
    tds[i].addEventListener("click", function(event) {
      var currenttd = event.target;
      currenttd.style.backgroundColor = document.getElementById(
        "colorId"
      ).value;
    });
  }
}

//optional
document.addEventListener("DOMContentLoaded", function() {
  addEventForTd();
});
