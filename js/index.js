window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();

    function startGame() {}
  };
}
    
  const ctx = canvas.getContext('2d');
  let animateId = null;

  let i = 0
  let j = 0
  let k = 0
  
  let roadImage = new Image ()
    roadImage.src = '../images/road.png'
    roadImage.onload = function(e) {
      drawRoad()
    }

  const drawRoad = () => {
      ctx.drawImage(road.image, road.x, road.y, 500, 700)
    }

    road ={
      x: 0,
      y: 0,
      image: roadImage
    }


let carImage= new Image ()
    carImage.src = '../images/car.png'
    carImage.onload = function (e) {
      drawCar()
    }

    const drawCar = () => {
      ctx.drawImage(car.image, car.x, car.y, 50, 75)
    }

    car = {
      x: 220,
      y: 500,
      image: carImage
    }

   let carMovement =  document.body.onkeydown = function (e) {
      e.key === "ArrowLeft" && car.x >= 40 ? car.x -= 10 : car.x
      e.key === "ArrowRight" && car.x <= 410 ? car.x += 10 : car.x
      console.log(e.key)
    }

    function drawRedObstacle() {
      ctx.fillStyle="red";
      ctx.fillRect(redObstacle.x, i++, 200, 25); 
      // i >= 600 ? drawAquaObstacle() : console.log(i)
}

  function drawAquaObstacle() {
  ctx.fillStyle="aqua";
  ctx.fillRect(aquaObstacle.x, j++, 200, 25); 
}

  function drawGreenObstacle() {
    ctx.fillStyle="green";
    ctx.fillRect(greenObstacle.x, k++, 200, 25); 
  }

    redObstacle = {
      x: Math.floor(Math.random()* 410),
    }

    aquaObstacle = {
      x: Math.floor(Math.random()* 410),
    }

    greenObstacle = {
      x: Math.floor(Math.random()* 410),
    }

    function drawObs () {

      drawRedObstacle()
      i > 800 ? (i = 0, redObstacle.x = Math.floor(Math.random()* 410)) : i++
    }




    function animate(){ //Where the magic happens
      ctx.clearRect(0, 0, canvas.width, canvas.height) //clears the canvas - flipping to a blank page
  
      drawRoad() //Draw the road
      drawCar() //Drawing the car 
      drawObs()



      animateId = window.requestAnimationFrame(animate) //Game rendering -infinite loop that goes super fast
  }
  animate()

  function startGame() {}

