(function ($) {
  "use strict";
  // Counter Number
  $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 3000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

  loadGoodDecisionChart();
  loadBadDecisionChart();
  loadBitcoinChart();
  loadEthereumChart();
  loadRippleChart();
  loadMoneroChart();

})(jQuery);

function loadGoodDecisionChart() {
  var ctx = document.getElementById("goodDecisionsChart");
  ctx.height = 150;
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      type: 'line',
      datasets: [{
        data: [25, 80, 16, 84, 88, 110, 70, 98, 115, 125, 150, 180],
        label: 'Dataset',
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
      },]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      responsive: true,
      tooltips: {
        mode: 'index',
        titleFontSize: 12,
        titleFontColor: '#000',
        bodyFontColor: '#000',
        backgroundColor: '#fff',
        titleFontFamily: 'Montserrat',
        bodyFontFamily: 'Montserrat',
        cornerRadius: 3,
        intersect: false,
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent'
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            display: false,
          }
        }]
      },
      title: {
        display: false,
      },
      elements: {
        line: {
          borderWidth: 1
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    }
  });
}

function loadBadDecisionChart() {
  var ctx = document.getElementById("badDecisionsChart");
  ctx.height = 150;
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      type: 'line',
      datasets: [{
        data: [65, 59, 84, 84, 51, 55, 40, 36, 80, 25, 63, 15],
        label: 'Dataset',
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
      },]
    },
    options: {

      maintainAspectRatio: false,
      legend: {
        display: false
      },
      responsive: true,
      tooltips: {
        mode: 'index',
        titleFontSize: 12,
        titleFontColor: '#000',
        bodyFontColor: '#000',
        backgroundColor: '#fff',
        titleFontFamily: 'Montserrat',
        bodyFontFamily: 'Montserrat',
        cornerRadius: 3,
        intersect: false,
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent'
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            display: false,
          }
        }]
      },
      title: {
        display: false,
      },
      elements: {
        line: {
          borderWidth: 1
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    }
  });
}

function loadEthereumChart() {
  var data = getRandomData('April 01 2017', 60);

  // Candlestick
  var ctx = document.getElementById("ethereumHomeChart").getContext("2d");
  ctx.canvas.width = 1000;
  ctx.canvas.height = 800;
  new Chart(ctx, {
    type: 'candlestick',
    data: {
      datasets: [{
        data: data,
        fractionalDigitsCount: 2,
      }]
    },
    options: {
      tooltips: {
        position: 'nearest',
        mode: 'index',
      },
    }
  });
}

function loadBitcoinChart() {
  var data = getRandomData('April 01 2017', 60);

  // Candlestick
  var ctx = document.getElementById("bitcoinHomeChart").getContext("2d");
  ctx.canvas.width = 1000;
  ctx.canvas.height = 800;
  new Chart(ctx, {
    type: 'candlestick',
    data: {
      datasets: [{
        data: data,
        fractionalDigitsCount: 2,
      }]
    },
    options: {
      tooltips: {
        position: 'nearest',
        mode: 'index',
      },
    }
  });
}

function loadRippleChart() {
  var data = getRandomData('April 01 2017', 60);
  console.log('DATA - Ripple', data);

  // Candlestick
  var ctx = document.getElementById("rippleHomeChart").getContext("2d");
  ctx.canvas.width = 1000;
  ctx.canvas.height = 800;
  new Chart(ctx, {
    type: 'candlestick',
    data: {
      datasets: [{
        data: data,
        fractionalDigitsCount: 2,
      }]
    },
    options: {
      tooltips: {
        position: 'nearest',
        mode: 'index',
      },
    }
  });
}

function loadMoneroChart() {
  var data = getRandomData('April 01 2017', 60);
  // Candlestick
  var ctx = document.getElementById("moneroHomeChart").getContext("2d");
  ctx.canvas.width = 1000;
  ctx.canvas.height = 800;
  new Chart(ctx, {
    type: 'candlestick',
    data: {
      datasets: [{
        data: data,
        fractionalDigitsCount: 2,
      }]
    },
    options: {
      tooltips: {
        position: 'nearest',
        mode: 'index',
      },
    }
  });
}


// Utils...
function getRandomData(date, count) {
  var dateFormat = 'MMMM DD YYYY';
  var date = moment(date, dateFormat);
  var data = [randomBar(date, 30)];
  while (data.length < count) {
    date = date.clone().add(1, 'd');
    if (date.isoWeekday() <= 5) {
      data.push(randomBar(date, data[data.length - 1].c));
    }
  }
  return data;
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomBarNoTime(lastClose) {
  var open = randomNumber(lastClose * .95, lastClose * 1.05);
  var close = randomNumber(open * .95, open * 1.05);
  var high = randomNumber(Math.max(open, close), Math.max(open, close) * 1.1);
  var low = randomNumber(Math.min(open, close) * .9, Math.min(open, close));
  return {
    o: open,
    h: high,
    l: low,
    c: close,
  };
}

function randomBar(date, lastClose) {
  var bar = getRandomBarNoTime(lastClose);
  bar.t = date.valueOf();
  return bar;
}
