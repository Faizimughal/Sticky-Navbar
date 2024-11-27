let date = document.getElementById("date");
let newDate = new Date().getFullYear();
date.innerHTML = newDate;
let hambarg = document.getElementById("hambarg");
let toggleNavbar = document.getElementById("toggle-navbar");
window.addEventListener("DOMContentLoaded", () => {
  toggleNavbar.style.display = "none";
});
hambarg.addEventListener("click", () => {
  toggleNavbar.style.display =
    toggleNavbar.style.display == "none" ? "block" : "none";
});
let historyBtn = document.getElementById("History");
let visionBtn = document.getElementById("Vision");
let goalBtn = document.getElementById("Goals");
let output = document.getElementById("output");

historyBtn.addEventListener("click", () => {
  output.innerHTML = ` <h1>History</h1>
              <p>
                Nestled in the heart of breathtaking mountain landscapes, our destination has long been a place of wonder and serenity. For centuries, the majestic peaks have captivated explorers, adventurers, and nature lovers alike. Originally inhabited by indigenous communities, the area became a hub for mountaineering in the early 20th century, attracting visitors from around the world. As the popularity of mountain tourism grew, the region evolved, balancing its rich cultural heritage with modern amenities to welcome travelers seeking both adventure and tranquility. 
              </p>`;
});
visionBtn.addEventListener("click", () => {
  output.innerHTML = ` <h1>Vision</h1>
              <p>
               Our vision is to create an unforgettable experience that connects travelers with the awe-inspiring beauty and tranquility of the mountains. We aim to be a sustainable, world-class destination where adventure, nature, and culture come together harmoniously. By preserving the natural wonders of the region while offering exceptional service and innovative experiences, we strive to inspire a deep appreciation for the mountains and encourage responsible travel.
              </p>`;
});

goalBtn.addEventListener("click", () => {
  output.innerHTML = ` <h1>Goals</h1>
              <p>
               Our goals are simple yet ambitious: to provide visitors with exceptional experiences that celebrate the natural beauty of the mountains while promoting sustainability and cultural respect. We aim to:

Enhance Visitor Experience: Offer a wide range of guided tours, activities, and accommodations that cater to all types of travelers, from adventure seekers to those looking for peaceful retreats.
 </p>`;
});
