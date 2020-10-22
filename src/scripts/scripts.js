document.addEventListener("DOMContentLoaded", function () {
  makeTimeZoneButtons();
});

function makeTimeZoneButtons() {
  $.getJSON("http://worldtimeapi.org/api/timezone", (content) => {
    createMultiButtons(content);
  });
}

function createMultiButtons(timezones) {
  // make buttons somehow
  const arr = [];
  const singleContinent = [];
  timezones.forEach((zone) => {
    const zones = zone.split("/");
    const continent = zones[0];
    arr.push(continent);
  });
  $.each(arr, function (i, cont) {
    if ($.inArray(cont, singleContinent) === -1) singleContinent.push(cont);
  });
  singleContinent.forEach((cont) => {
    button = document.createElement("button");
    button.setAttribute("class", "loadCities");
    button.setAttribute("value", cont);
    button.innerHTML = cont;
    document.body.appendChild(button);
    button.addEventListener("click", function (e) {
      const target = e.target.value;
      $.getJSON(`http://worldtimeapi.org/api/timezone/${target}`, (content) => {
        makeCityButtons(content);
      });
    });
  });
}

function makeCityButtons(cities) {
  const arrCont = [];
  const arrCity = [];
  cities.forEach((city) => {
    const target = city.split("/");
    tarCont = target[0];
    tarCity = target[1];
    arrCont.push(tarCont);
    arrCity.push(tarCity);
  });
  singleCont = arrCont[0];
  console.log(arrCity);
  arrCity.forEach((target) => {
    button = document.createElement("button");
    button.setAttribute("class", "loadTime");
    button.setAttribute("value", target);
    button.innerHTML = target;
    document.body.appendChild(button);
    button.addEventListener("click", () => {
      $.getJSON(
        `http://worldtimeapi.org/api/timezone/${singleCont}/${target}`,
        (result) => {
          console.log(JSON.stringify(result.datetime));
          $(".clock").text(result.datetime);
        }
      );
    });
  });
}

// $(".loadTime").bind("click", () => {
//   $.getJSON(
//     "http://worldtimeapi.org/api/timezone/Europe/London",
//     (result) => {}
//   );
// });
