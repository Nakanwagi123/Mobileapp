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
