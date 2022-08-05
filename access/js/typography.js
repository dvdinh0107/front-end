const list = document.querySelectorAll(".menu");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

$(document).ready(function () {
  $(".menu").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".home").show("1000");
    } else {
      $(".home")
        .not("." + value)
        .hide("1000");
      $(".home")
        .filter("." + value)
        .show("1000");
    }
  });
});

let drop = document.querySelector(".drop");
let dropbtn = document.querySelector(".drop--list");

dropbtn.onclick = function () {
  drop.classList.toggle("active");
};
var menuIcon = document.querySelector('.icon');
var menu = document.querySelector('.nav')


menuIcon.onclick = function(){
  menu.classList.toggle ('active')
}