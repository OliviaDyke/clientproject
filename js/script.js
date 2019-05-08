/* global $ */


$(function () {
    $("#Search").click(function(){
         var searchTerm = $("#searchTerm").val();
        
        
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/forecast?q="+searchTerm+",us&appid=9f28e0be94c5f8477546f61945dbb3e0",
            
            method: "GET",
            success: function(response) {
                console.log(response);
                // $("body").append(response.city.name);
                
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


