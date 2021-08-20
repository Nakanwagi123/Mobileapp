function change() {
  let same = "Yeh wanna give me a ride?";
  const listings = ["Kampala", "Jinja", "Bukoto"];
  var list = document.createElement("li");
  list.innerHTML = listings[0] + same;
  document.getElementById("dm").appendChild(list);
}
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

//getting values

function orders() {
  /*  document.getElementById("incoming").innerHTML = listings[0] + same; window.alert("Request sent"); document.querySelector(".user_lists").appendChild(node); var node = document.createElement("li");
  node.appendChild(
    document.createTextNode(
      "Yeh! Wanna give me a ride?" + "<button>Yes</button>"
    )*/
  alert("Your order was sent!");
}
