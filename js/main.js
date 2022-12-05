'use strict'

/////BallonPop!!!!!!!!!!!!!
var audio = new Audio('music/pop.wav');
var gInterval
// var gBallons = [{ bottom: 0, speed: 30 }, { bottom: 0, speed: 15 }]
var gBallons = createBallons()
function onInit() {
  renderBallons()
  console.log(gBallons)
  gInterval = setInterval(moveBallons, 500)
}

function moveBallons() {
  var elBallons = document.querySelectorAll('.ballon')
  for (var i = 0; i < gBallons.length; i++) {
    // Model
    var ballon = gBallons[i]
    // Dom
    var elBallon = elBallons[i]
    // Update the model:
    ballon.bottom += ballon.speed
    // Update the dom:
    elBallon.style.bottom = ballon.bottom + 'px'
    elBallon.style.left = i * 130 + 'px'
  }
}



function onClickPop(ballon) {
  ballon.style.display = 'none'
  audio.play();
}



function createBallons() {
  var ballons = []
  var randNum = getRandomIntInclusive(1, 10)
  for (var i = 0; i < randNum; i++) {
    var ball = {
      bottom: 0,
      speed: getRandomIntInclusive(10, 30)
    }
    console.log('***', ball)
    ballons.push(ball)
  }
  return ballons
}



function renderBallons() {
  var strHTML = ''
  strHTML += `  <h1>Ballon Pop Mania!</h1>`
  for (var i = 0; i < gBallons.length; i++) {
    var randomColor = getRandomColor()
    strHTML +=
      `<div class="ballon" style=background-color:${randomColor}; onclick="onClickPop(this)">
        </div>`
  }

  var elBody = document.querySelector('body')
  elBody.innerHTML = strHTML
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
