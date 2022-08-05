let drop = document.querySelector(".drop");
let dropbtn = document.querySelector(".drop--list");

dropbtn.onclick = function () {
  drop.classList.toggle("active");
};

var menuIcon = document.querySelector(".icon");
var menu = document.querySelector(".nav");

menuIcon.onclick = function () {
  menu.classList.toggle("active");
};


$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".imgbox").show("1000");
    } else {
      $(".imgbox")
        .not("." + value)
        .hide("1000");
      $(".imgbox")
        .filter("." + value)
        .show("1000");
    }
  });
});
const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}


list.forEach((item) => item.addEventListener("click", activeLink));
