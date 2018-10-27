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
        var weather = jQuery.get('https://api.openweathermap.org/data/2.5/weather?lat=38.706506999999995&lon=-9.175317&APPID=' + APPID).then(function(data)
        {
            x.innerHTML = data.name;
        });

    }

    function main() {
        getLocation();
    }

    main();
});