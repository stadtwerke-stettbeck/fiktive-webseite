function showWelcomeAlert() {
  var x = document.getElementById("nav_id");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}