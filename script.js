const primaryNavigation = document.querySelector("#primary-navigation");
const openMenuButton = document.querySelector("#open-menu-button");
const closeMenuButton = document.querySelector("#close-menu-button");

openMenuButton.addEventListener("click", () => {
  primaryNavigation.classList.add("active");
  openMenuButton.ariaExpanded = true;
  closeMenuButton.ariaExpanded = true;
  document.body.style.overflow = "hidden";
});

closeMenuButton.addEventListener("click", () => {
  primaryNavigation.classList.remove("active");
  openMenuButton.ariaExpanded = true;
  closeMenuButton.ariaExpanded = true;
  document.body.style.overflow = "auto";
});
