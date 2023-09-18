$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $("#sidebar").on("hide.bs.collapse", function () {
    $("#main-content").removeClass("col-md-10");
  });
   $("#sidebar").on("show.bs.collapse", function () {
     $("#main-content").addClass("col-md-10");
   });


var ch1 = $('#chart1');
var chart1 = new chart(ch1, {
  type: "line",
  data: {
    lable: [
      "شنبه",
      "یکشنبه",
      "دو شنبه",
      "سه شنبه",
      "چهار شنبه",
      "پنجشنبه",
      "جمعه",
    ],

    datasets: [
      {
        data: [12000, 11500, 13000, 14000, 13500, 15000, 14500],
        backgroundColor: "#fff",
        borderColor: "#fff",
        pointBackgroundColor: "#fff",
      },
    ],
  },
  options: {
    scales: {
      yAxes: [{
          display: false
        }],
      xAxes: [{
          display: false,
        }]
    },
    legend:{
      display:false
    }
  },
});

});