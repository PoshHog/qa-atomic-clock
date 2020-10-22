$(".loadButton").bind("click", () => {
  $.getJSON("http://worldtimeapi.org/api/timezone/Europe/London", (result) => {
    $(".clock").text(JSON.stringify(result.datetime));
  });
});
