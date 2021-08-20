//for whole string
/*function extract() {
  var params = window.location.search.slice(1).split("&");
}*/
function extract() {
  var param = new URL(location.href).searchParams;
  var name = param.get("name");
  var locate = param.get("location");
  var price = param.get("price");
  document.getElementById("name").innerHTML = "Driver: " + name;
  document.getElementById("locate").innerHTML = "Location: " + locate;
  document.getElementById("price").innerHTML = "Max Price: " + price;
}
function offers() {
  const listings = {
    name: "Linus",
    location: "Jinja",
    price: "200000",
    name: "Diego",
    location: "Entebbe",
    price: "130000",
  };
  const names = ["Linus", "Diego", "Bruno"];
  const locate = ["Kibuye", "Makindye", "Acacia"];
  const rate = ["4star", "5star", "3star"];
  //Driver1
  document.getElementById("tag").innerHTML = "Driver: " + names[0];
  document.getElementById("rating").innerHTML = "Rate: " + rate[0];
  document.getElementById("location").innerHTML = "Location: " + locate[0];
  document.getElementById("location1").innerHTML = "Explore " + locate[0];
  //Driver2
  document.getElementById("tag1").innerHTML = "Driver: " + names[1];
  document.getElementById("rating1").innerHTML = "Rate: " + rate[1];
  document.getElementById("location11").innerHTML = "Location: " + locate[1];
  document.getElementById("location111").innerHTML = "Explore " + locate[1];
  //Driver3
  document.getElementById("tag2").innerHTML = "Driver: " + names[2];
  document.getElementById("rating2").innerHTML = "Rate: " + rate[2];
  document.getElementById("location2").innerHTML = "Location: " + locate[2];
  document.getElementById("location12").innerHTML = "Explore " + locate[2];
}

//getting values
function orders() {
  /*  document.getElementById("incoming").innerHTML = listings[0] + same; window.alert("Request sent"); document.querySelector(".user_lists").appendChild(node);
   var node = document.createElement("li");
  node.appendChild(
    document.createTextNode(
      "Yeh! Wanna give me a ride?" + "<button>Yes</button>"
    )*/
  var where = window.prompt("Enter destination: ", "Kampala");
  alert("Your order was sent!");
  var href = "./log.html?destination=" + where;
  location.replace(href);
}
function trials() {
  var href = window.location.search;
  if (window.location.search == href) {
    var param = new URL(location.href).searchParams;
    var incoming = param.get("destination");
    document.getElementById("word").innerHTML =
      "<p>" + "Destination: " + incoming + "</p>";
  }
}
function answer() {
  document.getElementById("incoming").innerHTML = "ORDER CONFIRMED";
}
function reject() {
  document.getElementById("incoming").innerHTML = "ORDER REJECTED";
}
function clients() {
  const names = ["Riley", "Luca", "Stancy", "Neoline"];
  const locate = ["Kibuye", "entebbe", "Acacia", "wakiso"];
  const price = ["120000", "40000", "60000", "30,000"];

  document.getElementById("approved").innerHTML = names[0];
  document.getElementById("charge").innerHTML = price[0];
  document.getElementById("Destination").innerHTML = locate[1];
  //client2
  document.getElementById("approved1").innerHTML = names[1];
  document.getElementById("charge1").innerHTML = price[1];
  document.getElementById("Destination1").innerHTML = locate[1];
  //client3
  document.getElementById("approved2").innerHTML = names[2];
  document.getElementById("charge2").innerHTML = price[2];
  document.getElementById("Destination2").innerHTML = locate[2];
  //client4
  document.getElementById("approved3").innerHTML = names[3];
  document.getElementById("charge3").innerHTML = price[3];
  document.getElementById("Destination3").innerHTML = locate[3];
}
