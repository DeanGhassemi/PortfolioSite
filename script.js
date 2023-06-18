function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function displayNav() {
    var x = document.getElementById("nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }