btnNav = document.querySelector(".icon-mobile-nav");
openNav = document.querySelector(".main-nav");

btnNav.addEventListener("click", function () {
  openNav.classList.toggle("open-nav");
});

document.addEventListener("scroll", function () {
  openNav.classList.remove("open-nav");
});
