document.addEventListener('keydown', moveBox)

function moveBox (ev) {
  console.log('moveBox executing.')
  // arrow down: 40
  // arrow up: 38
  // arrow left: 37
  // arrow right: 39
  console.log(ev.keyCode)
  if (ev.keyCode === 38) {
    moveBoxUp()
  } else if (ev.keyCode === 40) {
    moveBoxDown()
  } else if (ev.keyCode === 37) {
    console.log('I should move the box to the left')
    moveBoxLeft()
  } else if (ev.keyCode === 39) {
    console.log('I should move the box to the right')
    moveBoxRight()
  }
}

function getPosition () {
  return document.querySelector('.box').getBoundingClientRect()
}

function moveBoxUp () {
  var box = document.querySelector('.box')
  var position = getPosition()
  var newTopPosition = position.top - 10
  console.log('newTopPosition', newTopPosition)
  box.style.top = newTopPosition + 'px'
}

function moveBoxDown () {
  var box = document.querySelector('.box')
  var position = getPosition()
  var newTopPosition = position.top + 10
  box.style.top = newTopPosition + 'px'
}

function moveBoxRight () {
  var box = document.querySelector('.box')
  var position = getPosition()
  var newLeftPosition = position.left + 10
  box.style.left = newLeftPosition + 'px'
}

function moveBoxLeft () {
  var box = document.querySelector('.box')
  var position = getPosition()
  var newRightPosition = position.left - 10
  box.style.left = newRightPosition + 'px'
}
