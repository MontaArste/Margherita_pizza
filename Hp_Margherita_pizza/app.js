
/* Delivery image */

var randomNumber = Math.floor((Math.random()*4)+1);
var randomImage = "\"Images/delivery/"+randomNumber+".png\"";

document.querySelector("#deliveryContainer").innerHTML = `<img id=\"deliveryImage\" src=\"./Images/delivery/${randomNumber}.png\" alt=\"Delivery image\"> `;

/* Google map */


// Initialize and add the map
function initMap() {
    // The location of "Margherita pizza"
    const pizza = { lat: -37.93027, lng: 144.99962 };
    // The map, centered at  "Margherita pizza"
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: pizza,
    });
    // The marker, positioned at "Margherita pizza"
    const marker = new google.maps.Marker({
      position: pizza,
      map: map,
    });
  }


/* Scroll-up button */


mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.documentElement.scrollTop = 0;
}