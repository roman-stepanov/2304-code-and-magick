'use strict';

var drawRect = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var drawCloud = function (ctx, x, y) {
  var sizeCloud = [420, 270];
  var colorCloud = '#fff';
  var colorShadow = 'rgba(0, 0, 0, 0.7)';
  var offsetShadow = 10;

  drawRect(ctx, x + offsetShadow, y + offsetShadow, sizeCloud[0], sizeCloud[1], colorShadow);
  drawRect(ctx, x, y, sizeCloud[0], sizeCloud[1], colorCloud);
};

var drawText = function (ctx, x, y, text) {
  ctx.textBaseline = 'top';
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText(text, x, y);
};

var drawVictoryMessage = function (ctx, x, y) {
  var message = ['Ура вы победили!', 'Список результатов:'];
  var lineSpacing = 20;

  for (var i = 0; i < message.length; i++) {
    drawText(ctx, x, y + lineSpacing * i, message[i]);
  }
};

var getMaxTime = function (times) {
  var maxTime = times[0];

  for (var i = 1; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }
  return maxTime;
};

var getColumnColor = function (name) {
  var saturation = Math.round(Math.random() * 100);

  if (name === 'Вы') {
    return 'rgba(255, 0, 0, 1)';
  } else {
    return 'hsl(240, ' + saturation + '%, 50%)';
  }
};

var getSeconds = function (ms) {
  return (ms / 1000).toFixed(1);
};

var drawChart = function (ctx, x, y, names, times) {
  var chartHeight = 150;
  var columnWidth = 40;
  var columnIndent = 50;

  var chartStep = chartHeight / getMaxTime(times);

  for (var i = 0; i < names.length; i++) {
    var columnHeight = chartStep * times[i];
    var offsetX = x + ((columnWidth + columnIndent) * i);
    var offsetY = y + chartHeight - columnHeight;
    var offsetColumnValue = offsetY - 20;
    var offsetColumnName = offsetY + columnHeight + 5;

    drawRect(ctx, offsetX, offsetY, columnWidth, columnHeight, getColumnColor(names[i]));
    drawText(ctx, offsetX, offsetColumnValue, getSeconds(times[i]));
    drawText(ctx, offsetX, offsetColumnName, names[i]);
  }
};

window.renderStatistics = function (ctx, names, times) {
  var cloudXY = [100, 10];

  drawCloud(ctx, cloudXY[0], cloudXY[1]);
  drawVictoryMessage(ctx, cloudXY[0] + 20, cloudXY[1] + 20);
  drawChart(ctx, cloudXY[0] + 50, cloudXY[1] + 85, names, times);
};
