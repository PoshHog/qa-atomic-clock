document.addEventListener("DOMContentLoaded", function(){
    makeTimeZoneButtons();
});

function makeTimeZoneButtons(){
    const res = jQuery.getJSON("http://worldtimeapi.org/api/timezone");
    const timezones = res.content
    createMultiButtons(timezones)
}



function createMultiButtons(timezones){
    // make buttons somehow
    timezone.array.forEach(zone => {
        button = document.createElement('button');
        button.setAttribute("id", zone);
        button.onClick(() => {
            const res = jQuery.getJSON("http://worldtimeapi.org/api/timezone/" + zone);
            makeCityButtons(region)  
        })

    });
}

function makeCityButtons(region) {
    // same as above but cities
     .onclick(()=>{
        const res = jQuery.getJSON("http://worldtimeapi.org/api/timezone/" + timezone + "/" + city);
        })
}