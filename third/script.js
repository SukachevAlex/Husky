window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame ||
		function( callback ){
			window.setTimeout(callback, 1000 / 60);
		};
})();

function initCherrys() {
  for (let i = 0; i < cherryCount; i++) {
    const posX = Math.floor(Math.random() * canvas.width);
    const posY = 0;
    const cherry = new Cherry({'number': i, 'posX': posX, 'posY': 0});
    cherrys[i] = cherry;
    cherry.onload = function() {
      console.log(1);
    }
  }
}


function Cherry(settings, context) {
  this.number = settings.number;
  this.posX = settings.posX || 0;
  this.posY = settings.posY || 0;
  this.height = 90;
  this.width = 90;
  this.velocity = settings.velocity || 1;
  this.image = new Image();
  this.image.src = './images/cherry.png';
  this.image.style.width = 90;
  this.image.style.height = 90;

  this.draw = function(context) {
    context.drawImage(this.image, this.posX, this.posY);
  }

  this.setPosition = function(x = this.posX, y = this.posY) {
    this.posX = x;
    this.posY = y;
  }
}

function Canvas() {
  function init() {
    this.page = document.querySelector('.Page')
    this.canvas = document.createElement('canvas');
    this.context = canvas.getContext('2d');
    this.cherryMaxSpeed = 5;
    this.cherrys = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.id = 'Canvas'
    page.appendChild(canvas);

    window.onresize = function() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }

  function initCherrys() {
    const cherryPerTime = Math.ceil(Math.random() * 5);
    for (let i = 0; i < cherryPerTime; i++) {
      const posX = Math.floor(Math.random() * window.innerWidth);
      const velocity = Math.ceil(Math.random() * this.cherryMaxSpeed);
      let ch = new Cherry({"number": 1, "posX": posX, "posY": 0, "velocity": velocity});
      cherrys.push(ch);
    }
  }

  function update() {
    clear();
    for (let i = 0; i < cherrys.length; i++) {
      cherrys[i].draw(this.context);
    }
    move();
  }

  function move() {
    for (let i = 0; i < cherrys.length; i++) {
      if (cherrys[i].posY >= window.innerHeight - cherrys[i].height) {
        continue;
      }
      cherrys[i].setPosition(undefined, (cherrys[i].posY + 5));
    }
  }

  function animloop(){
    requestAnimFrame(animloop);
    update();
  }

  function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  init();
  initCherrys();
  animloop();

  setInterval(() => {
    initCherrys();
  }, 5000);
}


window.onload = function() {
  Canvas();
}