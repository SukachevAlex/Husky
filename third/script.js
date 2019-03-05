window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame ||
		function( callback ){
			window.setTimeout(callback, 1000 / 60);
		};
})();

checkScrollSpeed = (function() {

  const delay = 50;
  let lastPos;
  let newPos
  let timer
  let delta;

  function clear() {
    lastPos = null;
    delta = 0;
  }

  clear();

  return function() {
    newPos = window.scrollY;
    if ( lastPos !== null ){
      delta = newPos -  lastPos;
    }
    lastPos = newPos;
    clearTimeout(timer);
    timer = setTimeout(clear, delay);
    return delta;
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


function Cherry(settings) {
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
    this.scrollSpeed = 1;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.id = 'Canvas'
    page.appendChild(canvas);

    window.onresize = function() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    window.onscroll = function(event) {
      move(Math.abs(checkScrollSpeed()));
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

  }

  function move(velocity) {
    for (let i = 0; i < cherrys.length; i++) {
      const item = cherrys[i];
      if (item.posY >= window.innerHeight - item.height) {
        continue;
      }
      cherrys[i].setPosition(undefined, (item.posY + (velocity / 10 || item.velocity)));
    }
  }

  function animloop() {
    requestAnimFrame(animloop);
    update();
    move(0);
  }

  function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  init();
  initCherrys();
  animloop();

  setInterval(() => {
    initCherrys();
  }, 115000);
}

window.onload = function() {
  Canvas();
}