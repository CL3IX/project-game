let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
// variable untuk lebar dan panjang dari canvas
let gameWidth = canvas.width;
let gameHeight = canvas.height;
// variable kosong yang akan menampung backgroun image, karakter, dan obstacles
let gameHome;
let levelOne;
let karakter;
let musuh;
let score = [];
// variable untuk kontrol
// const left = 37;
// const right = 39;
// const up = 38;
// const down = 40;
const up = 87;
const left = 65;
const down = 83;
const right = 68;

const tampil = () => {
  let btn = document.getElementById("btn");
  if (btn.style.display == "none") {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
    canvas.style.display = "block";
  }

  level1();
};

const skin = () => {
  let btn = document.getElementById("btn");
  let skin = document.getElementById("skin");
  if (btn.style.display == "none") {
    btn.style.display = "none";
  } else {
    skin.style.display = "block";
    btn.style.display = "none";
  }
};

const play = () => {
  let skin = document.getElementById("skin");
  let level = document.getElementById("level");
  if (skin.style.display == "none") {
    btn.style.display = "none";
  } else {
    skin.style.display = "none";
    level.style.display = "none";
    canvas.style.display = "block";
  }

  level1();
};

const play2 = () => {
  let skin = document.getElementById("skin");
  let level = document.getElementById("level");
  if (skin.style.display == "none") {
    btn.style.display = "none";
  } else {
    skin.style.display = "none";
    level.style.display = "none";
    canvas.style.display = "block";
  }

  level2();
};

const play3 = () => {
  let skin = document.getElementById("skin");
  let level = document.getElementById("level");
  if (skin.style.display == "none") {
    btn.style.display = "none";
  } else {
    skin.style.display = "none";
    level.style.display = "none";
    canvas.style.display = "block";
  }

  level3();
};

const level = () => {
  let btn = document.getElementById("btn");
  let level = document.getElementById("level");
  if (btn.style.display == "none") {
    btn.style.display = "none";
  } else {
    level.style.display = "block";
    btn.style.display = "none";
  }
};

const modal = () => {
  let modal = document.getElementById("modal");
  let level = document.getElementById("level");
  if (modal.style.display == "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "block";
    level.style.display = "none";
  }
};

const modal2 = () => {
  let modal = document.getElementById("modal-2");
  let level = document.getElementById("level");
  if (modal.style.display == "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "block";
    level.style.display = "none";
  }
};

const modal3 = () => {
  let modal = document.getElementById("modal-3");
  let level = document.getElementById("level");
  if (modal.style.display == "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "block";
    level.style.display = "none";
  }
};

const tutup = () => {
  let modal = document.getElementById("modal");
  let modal2 = document.getElementById("modal-2");
  let modal3 = document.getElementById("modal-3");
  let level = document.getElementById("level");
  if (
    modal.style.display == "none" ||
    modal2.style.display == "none" ||
    modal3.style.display == "none"
  ) {
    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
  } else {
    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    level.style.display = "block";
  }
};

// addeventlistener untuk bisa mengendalikan karakter
window.addEventListener("keydown", move);
window.addEventListener("keyup", stopMove);

function mulai() {
  gameHome = new property(0, 0, 1200, 600, "./img/foto1.png", "background");
  run();
}

function run() {
  // untuk membuat frame
  this.frameNo = 0;
  // untuk melakukan looping pada game
  this.interval = setTimeout(main, 20);
}

function main() {
  clear();
  // gameHome.update();
}

// function level yang berisi gambar gambar untuk karakter, background dan obstacle untuk level tersebut
function level1() {
  // levelOne = new property(0, 0, 1200, 600, "../img/yadzka.jpeg", "background");
  levelOne = new property(0, 0, 1200, 600, "./img/foto1.png", "background");
  karakter = new property(160, 600, 80, 120, "./img/foto1.png", "image");
  musuh = new property(1000, 865, 120, 90, "./img/foto1.png", "image");
  gameRunning();
}

const level2 = () => {
  // levelOne = new property(0, 0, 1200, 600, "../img/yadzka.jpeg", "background");
  levelOne = new property(0, 0, 1200, 600, "./img/foto1.png", "background");
  karakter = new property(160, 600, 80, 120, "./img/foto2.png", "image");
  musuh = new property(1000, 865, 120, 90, "./img/foto1.png", "image");
  gameRunning();
};

const level3 = () => {
  // levelOne = new property(0, 0, 1200, 600, "../img/yadzka.jpeg", "background");
  levelOne = new property(0, 0, 1200, 600, "./img/foto1.png", "background");
  karakter = new property(160, 600, 80, 120, "./img/foto3.png", "image");
  musuh = new property(1000, 865, 120, 90, "./img/foto1.png", "image");
  gameRunning();
};

function gameRunning() {
  this.frame = 0;
  this.interval = setInterval(isi, 20);
}

// funciton yang berisi banyak hal yang diperlukan untuk gamenya
function property(x, y, width, height, color, type) {
  this.x = x;
  this.y = y;
  this.objX = 0;
  this.objY = 0;
  this.width = width;
  this.height = height;
  this.color = color;
  this.type = type;

  // function untuk memberi  limit agar karakter tidak menembus obstacle
  this.crash = function (otherobj) {
    var myleft = this.x;
    var myright = this.x + this.width;
    var mytop = this.y;
    var mybottom = this.y + this.height;
    var otherleft = otherobj.x;
    var otherright = otherobj.x + otherobj.width;
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + otherobj.height;
    var crash = true;
    if (
      mybottom < otherbottom ||
      mytop > otherbottom ||
      myright < otherleft ||
      myleft > otherright
    ) {
      crash = false;
    }
    return crash;
  };

  // untuk menampilkan gambar sebagai karakter dan backgrond
  if (type == "image" || type == "background") {
    this.image = new Image();
    this.image.src = color;
  }

  // function update untuk mengupdate gameplay mulai dari looping background
  this.update = function () {
    if (type == "image" || type == "background") {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    if (type == "background") {
      ctx.drawImage(
        this.image,
        this.x + this.width,
        this.y,
        this.width,
        this.height
      );
    }
  };

  this.newBg = function () {
    this.x += this.objX;
    this.y += this.objY;
    if (this.type == "background") {
      if (this.x == -this.width) {
        this.x = 0;
      }
    }
  };

  // movement untuk membuat karakter bisa bergerak sesuai dengan yang sudah diprogram
  this.movement = function () {
    this.x += this.objX;
    this.y += this.objY;
    this.hitTop();
    this.hitBottom();
    this.hitRight();
    this.hitLeft();
  };

  (this.stop = function () {
    clearInterval(this.interval);
  }),
    // function hit untuk memberi batasan agar karakter dan obstcales tidak melewati batas canvas
    (this.hitTop = () => {
      let objTop = this.height - this.height;
      if (this.y < objTop) {
        this.y = objTop;
      }
    });

  this.hitBottom = () => {
    let objBottom = 600 - this.height;
    if (this.y > objBottom) {
      this.y = objBottom;
    }
  };

  this.hitLeft = () => {
    let objLeft = 400 - this.width;
    if (this.x > objLeft) {
      this.x = objLeft;
    }
  };

  this.hitRight = () => {
    let objRight = this.width - this.width;
    if (this.x < objRight) {
      this.x = objRight;
    }
  };
}

// function clear untuk clear object pada canvas
function clear() {
  ctx.clearRect(0, 0, gameWidth, gameHeight);
}

// function move agar kita bisa menggerakkan karakter
function move(event) {
  const keyPressed = event.keyCode;
  if (keyPressed == left) {
    karakter.objX = -3;
  } else if (keyPressed == right) {
    karakter.objX = 3;
  } else if (keyPressed == up) {
    karakter.objY = -3;
  } else if (keyPressed == down) {
    karakter.objY = 3;
  }
}

// function stop move untuk memberi batasan pergerakan pada karakter
function stopMove(event) {
  const keyPressed = event.keyCode;
  if (keyPressed == left) {
    karakter.objX = 0;
  } else if (keyPressed == right) {
    karakter.objX = 0;
  } else if (keyPressed == up) {
    karakter.objY = 0;
  } else if (keyPressed == down) {
    karakter.objY = 0;
  }
}

// function utama yang berisi gabungan function yang sudah ada dijadikan satu
function isi() {
  if (karakter.crash(musuh)) {
    levelOne.stop();
  } else {
    karakter.movement();
    karakter.update();
    clear();
    // levelOne.objX = -5;
    // levelOne.newBg();
    // levelOne.update();
    // levelOne.update();
    karakter.movement();
    // karakter.objX += 0.01;
    karakter.update();
    // musuh.objX -= 0.1;
    // musuh.update();
    // musuh.movement();
  }
}
