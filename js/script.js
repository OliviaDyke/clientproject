/* global $ */
$(function () {
    $("#Search").click(function(){
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/forecast/hourly?zip=94040&APPID=9f28e0be94c5f8477546f61945dbb3e0",
            method: "GET",
            success: function(response) {
                // code
                console.log(response);
            }
        });
    });
});


