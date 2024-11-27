let date = document.getElementById("date");
let newDate = new Date().getFullYear();
date.innerHTML = newDate;
let hambarg = document.getElementById("hambarg");
let toggleNavbar = document.getElementById("toggle-navbar");
hambarg.addEventListener("click", () => {
  toggleNavbar.style.display =
    toggleNavbar.style.display == "none" ? "block" : "none";
});
