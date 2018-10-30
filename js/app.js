$(document).ready(function () {
    var x = document.getElementById("cityName");
    var APPID = '575e63ead7159ab7d93bcac3dfc90181';

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    function showPosition(position) {
        let url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&APPID=' + APPID;
        let weather = jQuery.get(url).then(function (data) {
            x.innerHTML = data.name
        });

    }

    function main() {
        getLocation();
    }

    main();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})