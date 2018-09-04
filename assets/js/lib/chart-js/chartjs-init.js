(function ($) {
  "use strict";





  //bar chart
  var ctx = document.getElementById("barChart");
  //    ctx.height = 200;
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: "rgba(0, 123, 255, 0.9)",
          borderWidth: "0",
          backgroundColor: "rgba(0, 123, 255, 0.5)"
        },
        {
          label: "My Second dataset",
          data: [28, 48, 40, 19, 86, 27, 90],
          borderColor: "rgba(0,0,0,0.09)",
          borderWidth: "0",
          backgroundColor: "rgba(0,0,0,0.07)"
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  //radar chart
  var ctx = document.getElementById("radarChart");
  ctx.height = 160;
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [["Eating", "Dinner"], ["Drinking", "Water"], "Sleeping", ["Designing", "Graphics"], "Coding", "Cycling", "Running"],
      datasets: [
        {
          label: "My First dataset",
          data: [65, 59, 66, 45, 56, 55, 40],
          borderColor: "rgba(0, 123, 255, 0.6)",
          borderWidth: "1",
          backgroundColor: "rgba(0, 123, 255, 0.4)"
        },
        {
          label: "My Second dataset",
          data: [28, 12, 40, 19, 63, 27, 87],
          borderColor: "rgba(0, 123, 255, 0.7",
          borderWidth: "1",
          backgroundColor: "rgba(0, 123, 255, 0.5)"
        }
      ]
    },
    options: {
      legend: {
        position: 'top'
      },
      scale: {
        ticks: {
          beginAtZero: true
        }
      }
    }
  });


  //pie chart
  var ctx = document.getElementById("pieChart");
  ctx.height = 300;
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      datasets: [{
        data: [45, 25, 20, 10],
        backgroundColor: [
          "rgba(0, 123, 255,0.9)",
          "rgba(0, 123, 255,0.7)",
          "rgba(0, 123, 255,0.5)",
          "rgba(0,0,0,0.07)"
        ],
        hoverBackgroundColor: [
          "rgba(0, 123, 255,0.9)",
          "rgba(0, 123, 255,0.7)",
          "rgba(0, 123, 255,0.5)",
          "rgba(0,0,0,0.07)"
        ]

      }],
      labels: [
        "green",
        "green",
        "green"
      ]
    },
    options: {
      responsive: true
    }
  });

  //doughut chart
  var ctx = document.getElementById("doughutChart");
  ctx.height = 150;
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [45, 25, 20, 10],
        backgroundColor: [
          "rgba(0, 123, 255,0.9)",
          "rgba(0, 123, 255,0.7)",
          "rgba(0, 123, 255,0.5)",
          "rgba(0,0,0,0.07)"
        ],
        hoverBackgroundColor: [
          "rgba(0, 123, 255,0.9)",
          "rgba(0, 123, 255,0.7)",
          "rgba(0, 123, 255,0.5)",
          "rgba(0,0,0,0.07)"
        ]

      }],
      labels: [
        "green",
        "green",
        "green",
        "green"
      ]
    },
    options: {
      responsive: true
    }
  });

  //polar chart
  var ctx = document.getElementById("polarChart");
  ctx.height = 150;
  var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      datasets: [{
        data: [15, 18, 9, 6, 19],
        backgroundColor: [
          "rgba(0, 123, 255,0.9)",
          "rgba(0, 123, 255,0.8)",
          "rgba(0, 123, 255,0.7)",
          "rgba(0,0,0,0.2)",
          "rgba(0, 123, 255,0.5)"
        ]

      }],
      labels: [
        "green",
        "green",
        "green",
        "green"
      ]
    },
    options: {
      responsive: true
    }
  });

  // single bar chart
  var ctx = document.getElementById("singelBarChart");
  ctx.height = 150;
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat"],
      datasets: [
        {
          label: "My First dataset",
          data: [40, 55, 75, 81, 56, 55, 40],
          borderColor: "rgba(0, 123, 255, 0.9)",
          borderWidth: "0",
          backgroundColor: "rgba(0, 123, 255, 0.5)"
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });


})(jQuery);
