$.getJSON("wisdom.json", function(wisdoms) {
    wisdom = wisdoms[Math.floor(Math.random()*wisdoms.length)];
    $.each(wisdom[0], function(index, value) {
      $(".wisdom").append("<div class=\"line\">"+value+"</div>");
    });
    var date = new Date(wisdom[1])
    if (isNaN(date)==false) {
      $(".wisdom").append("<div class=\"date\">"+date.toLocaleDateString("en-US")+"</div>");
    }
});