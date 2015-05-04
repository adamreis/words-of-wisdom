$.getJSON("wisdom.json", function(wisdoms) {
    wisdom = wisdoms[Math.floor(Math.random()*wisdoms.length)];
    $.each(wisdom[0], function(index, value) {
      $("body").append("<h1>"+value+"<\h1>");
    });
    $("body").append("<h4>"+wisdom[1]+"<\h4>");
});