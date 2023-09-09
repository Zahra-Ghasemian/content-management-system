$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $("#sidebar").on("hide.bs.collapse", function () {
    $("#main-content").removeClass("col-md-10");
  });
   $("#sidebar").on("show.bs.collapse", function () {
     $("#main-content").addClass("col-md-10");
   });
});