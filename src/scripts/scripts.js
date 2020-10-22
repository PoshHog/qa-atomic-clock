$(document).ready(function(){


    function makeTimeZoneButtons() {
        $.getJSON("http://www.worldtimeapi.org/api/timezone", function(result){
            createMultiButtons(result);
        });
    }

    function createMultiButtons(timezones) {
        var lastzone = "";
        $("#continents").empty();
        $.each(timezones, function(i, timezone){
            var zone = timezone.split("/")[0];
            if(zone!=lastzone){
                $("#continents").append("<button id='"+zone+"'>"+zone+"</button>");
                $("#"+zone).click(() => {
                    $.getJSON("http://www.worldtimeapi.org/api/timezone/"+zone, function(result){
                        console.log(result);
                        makeCityButtons(zone, result);
                    });
                })
                lastzone = zone;
            }
        });
    }
    
    function makeCityButtons(zone, cities) {
        var lastarea = "";
        $("#areas").empty();
        $.each(cities, function(i, zonecity){
            var city = zonecity.split("/")[1];
            if(city!=lastarea){
                $("#areas").append("<button id='"+city+"'>"+city+"</button>");
                $("#"+city).click(() => {
                    $.getJSON("http://www.worldtimeapi.org/api/timezone/"+zone+"/"+city, function(result){
                        console.log(result["datetime"]);
                        $("#answer").html("Time : "+result["datetime"]);
                    });
                })
                lastarea = city;
            }
        });
    }

    $("#continents").click(makeTimeZoneButtons());


})