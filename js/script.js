/* global $ */


$(function() {
    $("#Searches").click(function(){
         var searchTerm = $("#searchTerm").val();
        console.log(searchTerm);
    
        
        $.ajax({
            url: "https://samples.openweathermap.org/data/2.5/weather?zip="+searchTerm+",us&appid=b6907d289e10d714a6e88b30761fae22",

            method: "GET",
            success: function(response) {
                console.log(response);
                $("body").append(response.city.name);
                
                $.each(response.list, function(index, value){
                    console.log(value);
                    
                var time = value.dt_txt    
                $(".data").append(time); 
                var degree = value.wind.deg;
                });
                // code

                
            }
        });
    });
});


