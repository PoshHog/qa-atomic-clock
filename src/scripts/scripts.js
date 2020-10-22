document.addEventListener("DOMContentLoaded", function () {
    makeTimeZoneButtons();
});

function makeTimeZoneButtons() {
    const res = jQuery.getJSON("http://worldtimeapi.org/api/timezone");
    const timezones = res[content];
    createMultiButtons(timezones)
}



function createMultiButtons(timezones) {
    // make buttons somehow
    timezone.forEach(zone => {
        button = document.createElement('button');
        button.setAttribute("id", zone);
        button.onClick(() => {
            const res = jQuery.getJSON(`http://worldtimeapi.org/api/timezone/${zone}`);
            cities = res[content];
            makeCityButtons(cities)
        })
    });
}

function makeCityButtons(cities) {
    cities.forEach(city => {
        button = document.createElement('button');
        button.setAttribute("id", city);
        button.onClick(() => {
            const res = jQuery.getJSON(`http://worldtimeapi.org/api/timezone/${timezone}/${city}`);
            console.log(res[content][datetime])
        })
    }
    )
}
