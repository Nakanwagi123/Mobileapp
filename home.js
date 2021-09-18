function navbar() {
  var x = document.getElementById("nav");
  var y = document.getElementById("dis");
  if (x.className === "disappear") {
    x.className = "appear";
  } else {
    x.className = "disappear";
  }
}
/*var y = document.getElementById("dis");
 y.style.display = "none";*/
function GHG() {
  Variables = [
    "Industry",
    "Deforestation",
    "Power&Energy",
    "Agriculture",
    "Transportation",
    "Waste",
    "Water Management",
    "Building",
  ];
  Values = [19, 17, 15, 14, 10, 10, 10, 5];
  total = 0;
  reference = 15;
  iteration = 0;
  check = 0;
  document.getElementById("variables1").innerHTML =
    Variables[0] + "-" + Values[0] + "%";
  document.getElementById("variables2").innerHTML =
    Variables[1] + "-" + Values[1] + "%";
  document.getElementById("variables3").innerHTML =
    Variables[2] + "-" + Values[2] + "%";
  document.getElementById("variables4").innerHTML =
    Variables[3] + "-" + Values[3] + "%";
  document.getElementById("variables5").innerHTML =
    Variables[4] + "-" + Values[4] + "%";
  document.getElementById("variables6").innerHTML =
    Variables[5] + "-" + Values[5] + "%";
  document.getElementById("variables7").innerHTML =
    Variables[6] + "-" + Values[6] + "%";
  document.getElementById("variables8").innerHTML =
    Variables[7] + "-" + Values[7] + "%";
  document.getElementById("variables9").innerHTML =
    Variables[8] + "-" + Values[8] + "%";
  document.getElementById("Varia").innerHTML = "Variables";
}
//  setTimeout(function () {MyFade();}, 500);

var opacity = 0;

function MyFade() {
  var industry = document.getElementById("industry").value;
  var deforestation = document.getElementById("deforestation").value;
  var power = document.getElementById("power&energy").value;
  var agriculture = document.getElementById("agriculture").value;
  var transportation = document.getElementById("transportation").value;
  var waste = document.getElementById("waste").value;
  var water = document.getElementById("water").value;
  var building = document.getElementById("building").value;
  reference = 85;
  Values = [19, 17, 15, 14, 10, 10, 10, 5];
  total =
    parseInt(industry) +
    parseInt(deforestation) +
    parseInt(power) +
    parseInt(agriculture) +
    parseInt(transportation) +
    parseInt(waste) +
    parseInt(water) +
    parseInt(building);

  alert("here" + total);
  if (total >= reference) {
    opacity = (total - reference) / 15;
    document.getElementById("smoke").style.opacity = opacity;
  }
}
