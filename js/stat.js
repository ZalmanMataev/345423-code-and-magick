'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 65);


  var getRandomValue = function (minValue, maxValue) {
    return Math.random() * (maxValue - minValue) + minValue;
  };

  var drawAllBars = function () {
    var max = -1;
    for (var i = 0; i < times.length; i++) {
      drawAllBars()
    }
    return max;
  };


  var drawAllBars = function () {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }


  var histogramHeight = 150;
  var widthColumn = 40;
  var interval = 90;
  var initialX = 150;
  var initialY = 120;
  var histogramMargin = 10;
  var step = histogramHeight / (drawAllBars() - 0);

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + getRandomValue(0.1, 1) + ')';
    ctx.fillRect(initialX + interval * i, initialY, widthColumn, times[i] * step);
    ctx.fillText(names[i], initialX + interval * i, initialY - (histogramMargin * 3));
    ctx.fillText(Math.floor(times[i]), initialX + interval * i, initialY - histogramMargin);
  }
};


/*var drawAllBars = function () {
    var max = -1;
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    }
    return max;
  };*/
