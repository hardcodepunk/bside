var navItem = document.querySelectorAll('.js-nav-item');
var body = document.getElementById('body');

//initiate leaflet map
var mymap = L.map('map').setView([41.3870736, 2.1611151], 13);
var marker = L.marker([41.3870736, 2.1611151]).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGFyZGNvZGVwdW5rIiwiYSI6ImNrcDg2ZXJkNzAzOHMycHQ3dWdtZmpvMWUifQ.aAsOVWi9LmL3adsY7k4MjA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaGFyZGNvZGVwdW5rIiwiYSI6ImNrcDg2ZXJkNzAzOHMycHQ3dWdtZmpvMWUifQ.aAsOVWi9LmL3adsY7k4MjA'
}).addTo(mymap);

console.log(document.getElementById('js-toggle-mobile-nav'));

// open mobile menu when clicking on mobile nav icon
document.getElementById('js-toggle-mobile-nav').onclick = function() {
  body.classList.toggle('open-menu');
}

for (var i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', function(event) {

    if (body.classList.contains('open-menu')) {
      body.classList.remove('open-menu');
    }

    //get href of nav element and scroll to its section
    var idDestination = this.getAttribute("href").substring(1, this.length);
    var destination = document.getElementById(idDestination);
    destination.scrollIntoView({behavior: "smooth"});

    event.preventDefault();
  })
};

// keeptrack
document.addEventListener("DOMContentLoaded", function() {
  var header = document.getElementById('header');
  var waypointInit = new KeepTrack(header);
});

// google calendar widget
document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("openCalendarButton");
  const popupOverlay = document.getElementById("popupOverlay");
  const closeButton = document.getElementById("closeButton");

  openButton.addEventListener("click", function () {
    popupOverlay.style.display = "flex";
  });

  closeButton.addEventListener("click", function () {
    popupOverlay.style.display = "none";
  });
});