'use strict';

window.renderStatistics = function (ctx, names, times) {
  var cloudXY = [100, 10];
  var cloudHeigth = 270;
  var cloudWidth = 420;

  var drawCloud = function () {
    var colorCloud = '#fff';
    var colorShadow = 'rgba(0, 0, 0, 0.7)';
    var offsetShadow = 10;

    var drawRect = function (x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, cloudWidth, cloudHeigth);
    };

    drawRect(cloudXY[0] + offsetShadow, cloudXY[1] + offsetShadow, colorShadow);
    drawRect(cloudXY[0], cloudXY[1], colorCloud);
  };

  var drawText = function (x, y, text) {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText(text, x, y);
  };

  var chartHeight = 150;
  var columnWidth = 40;
  var columnIndent = 50;

  var getColumnColor = function (name) {
    if (name === 'Вы') {
      return 'rgba(255, 0, 0, 1)';
    } else {
      return 'rgba(0, 0, ' + Math.round(Math.random() * 200 + 50) + ', 1)';
    }
  };

  var getMaxTime = function () {
    var maxTime = -1;

    for (var i = 0; i < times.length; i++) {
      if (times[i] > maxTime) {
        maxTime = times[i];
      }
    }
    return maxTime;
  };

  var drawColumn = function (x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, columnWidth, columnHeight);
  };

  var getSeconds = function (ms) {
    return (ms / 1000).toFixed(1);
  };

  var chartStep = chartHeight / getMaxTime();
  var chartXY = [cloudXY[0] + 50, cloudXY[1] + 80];

  drawCloud();
  drawText(cloudXY[0] + 20, cloudXY[1] + 30, 'Ура вы победили!');
  drawText(cloudXY[0] + 20, cloudXY[1] + 50, 'Список результатов:');

  for (var i = 0; i < names.length; i++) {
    var columnHeight = chartStep * times[i];
    var offsetX = chartXY[0] + ((columnWidth + columnIndent) * i);
    var offsetY = chartXY[1] + chartHeight - columnHeight;
    var offsetColumnValue = offsetY - 5;
    var offsetColumnName = offsetY + columnHeight + 20;

    drawColumn(offsetX, offsetY, getColumnColor(names[i]));
    // drawText(offsetX, offsetColumnValue, times[i].toFixed(0));
    drawText(offsetX, offsetColumnValue, getSeconds(times[i]));
    drawText(offsetX, offsetColumnName, names[i]);
  }
};
