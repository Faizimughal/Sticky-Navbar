let date = document.getElementById("date");
let newDate = new Date().getFullYear();
date.innerHTML = newDate;
let hambarg = document.getElementById("hambarg");
let toggleNavbar = document.getElementById("toggle-navbar");
window.addEventListener('DOMContentLoaded',()=>{
    toggleNavbar.style.display = "none";
})
hambarg.addEventListener("click", () => {
  toggleNavbar.style.display =
    toggleNavbar.style.display == "none" ? "block" : "none";
});
