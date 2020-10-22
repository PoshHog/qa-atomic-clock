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
    document.createElement('button')
     .onClick(() => {
         const res = jQuery.getJSON("http://worldtimeapi.org/api/timezone/" + timezone )
         }
     )
}

