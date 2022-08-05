let search = document.querySelector(".search--icon");
let searchInput = document.querySelector(".search-input");

function InputSearch() {
  searchInput.classList.toggle("active");
}
search.addEventListener("click", InputSearch);

//drop down

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


//slide

