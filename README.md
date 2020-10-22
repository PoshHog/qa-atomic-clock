# Atomic Clock

If you want to build your own application as part of your DevOps project, consider this idea...
- API server which exposes an end-point for getting the current time
- Your API actually calls another web-service to obtain the current time (e.g. http://worldtimeapi.org/)
- The benefit of having your API sit in-between the requests is that you now have control over the format of the request and the response - you can do whatever manipulation you want
- You could develop the back-end API in whatever language and framework you like (e.g. NodeJS/Express, Java/SpringBoot, C# ASP.NET, Python/Flask etc)
- Web front-end to display information about the current time (any framework, e.g. JQuery, AngularJS, Angular, React, Vue - or maybe a server-side technology such as ASP.NET MVC)
- Web front-end makes use of the back-end API you wrote, to get the time
- Website may offer additional features, such as letting the user pick the country / location they want to see the time for
