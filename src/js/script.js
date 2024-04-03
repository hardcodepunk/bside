var navItem = document.querySelectorAll('.js-nav-item');
var body = document.getElementById('body');

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