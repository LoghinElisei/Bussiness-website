document.addEventListener("DOMContentLoaded", () => {
  const menuList = document.getElementById("menuList");
  const menuToggle = document.querySelector(".menu-toggle");

  menuToggle.addEventListener("click", () => {
    menuList.classList.toggle("active");
  });
});
