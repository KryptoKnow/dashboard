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

  loadBitcoinChart();
  loadEthereumChart();
  loadRippleChart();
  loadMoneroChart();
  loadAdaChart();
  loadIotaChart();

})(jQuery);

function loadBitcoinChart() {
  var data = getRandomData('April 01 2017', 60);

  // Candlestick
  var ctx = document.getElementById("bitcoinWatchChart").getContext("2d");
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

function loadEthereumChart() {
  var data = getRandomData('April 01 2017', 60);

  // Candlestick
  var ctx = document.getElementById("ethereumWatchChart").getContext("2d");
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
  var ctx = document.getElementById("rippleWatchChart").getContext("2d");
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
  var ctx = document.getElementById("moneroWatchChart").getContext("2d");
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

function loadAdaChart() {
  var data = getRandomData('April 01 2017', 60);
  // Candlestick
  var ctx = document.getElementById("adaWatchChart").getContext("2d");
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

function loadIotaChart() {
  var data = getRandomData('April 01 2017', 60);
  // Candlestick
  var ctx = document.getElementById("iotaWatchChart").getContext("2d");
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
