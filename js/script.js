$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $("#sidebar").on("hide.bs.collapse", function () {
    $("#main-content").removeClass("col-md-10");
  });
  $("#sidebar").on("show.bs.collapse", function () {
    $("#main-content").addClass("col-md-10");
  });

  const ctx1 = document.getElementById("myChart1");

  new Chart(ctx1, {
    type: "line",
    data: {
      labels: [
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
          label: "# of Votes",
          data: [12000, 11500, 13000, 14000, 13500, 15000, 14500],
          borderWidth: 1,
          backgroundColor: "#fff",
          borderColor: "#fff",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
        },
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
          labels: {
            color: "rgb(255, 99, 132)",
          },
        },
      },
    },
  });
  // ------------------------------------------ chart 1 --------------------------------------------

  const ctx2 = document.getElementById("myChart2");

  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: [
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
          label: "# of Votes",
          data: [12000, 11500, 13000, 14000, 13500, 15000, 14500],
          borderWidth: 1,
          backgroundColor: "#bcbcf1",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
        },
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
          labels: {
            color: "rgb(255, 99, 132)",
          },
        },
      },
    },
  });
  // ------------------------------------------ chart 2 --------------------------------------------

  const ctx3 = document.getElementById("myChart3");

  new Chart(ctx3, {
    type: "line",
    data: {
      labels: [
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
          label: "# of Votes",
          data: [12000, 11500, 13000, 14000, 13500, 15000, 14500],
          borderWidth: 1,
          backgroundColor: "#fff",
          borderColor: "#fff",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
        },
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
          labels: {
            color: "rgb(255, 99, 132)",
          },
        },
      },
    },
  });
  // ------------------------------------------ chart 3 --------------------------------------------

  const ctx4 = document.getElementById("myChart4");

  new Chart(ctx4, {
    type: "bar",
    data: {
      labels: [
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
          label: "# of Votes",
          data: [13000, 12500, 14000, 15000, 13500, 14500, 15000],
          borderWidth: 1,
          backgroundColor: "#bcbcf1",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
        },
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
          labels: {
            color: "rgb(255, 99, 132)",
          },
        },
      },
    },
  });
  // ------------------------------------------ chart 4 --------------------------------------------

  const ctx5 = document.getElementById("visit");

  new Chart(ctx5, {
    type: "line",
    data: {
      labels: [
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
          label: "# of Votes",
          data: [15000, 8000, 20000, 15600, 4000, 15000, 14000],
          borderWidth: 1,
          backgroundColor: "#17a2b8",
          borderColor: "rgb(57, 35, 199)",
        },
        {
          label: "# of Votes",
          data: [14000, 15700, 12000, 14600, 17000, 15600, 2500],
          borderWidth: 1,
          backgroundColor: "#ffc107",
          borderColor: "#ffc107",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
        },
      },
      plugins: {
        legend: {
          display: false,
          labels: {
            color: "rgb(255, 99, 132)",
          },
        },
      },
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
    },
  });
  // ------------------------------------------ visit --------------------------------------------

   const ctx6 = document.getElementById("sale");
     new Chart(ctx6, {
       type: "bar",
       data: {
         labels: ["آنلاین", "فیزیکی"],
         datasets: [
           {
             label: "# of Votes",
             data: [60, 40],
             borderWidth: 1,
             backgroundColor: "#bcbcf1",
           },
         ],
       },
       options: {
         scales: {
           y: {
             beginAtZero: true,
           },
         },
       },
     });

});