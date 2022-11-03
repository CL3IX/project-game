// tangkap element html kedalam variable
let jet = document.getElementById("jet");
let board = document.getElementById("board");
let canva = document.getElementById("board");
let skin = document.getElementById("skin");
let score = document.getElementById("points");
let btn = document.getElementById("btn");
let gameOver = document.getElementById("go-card");
let rocks = document.getElementsByClassName("rocks");
let lanjut = document.getElementById("lanjut");
// buat variable yang menampung ascii code untuk control pesawat
const spacebar = 32;
const kiri = 65;
const kanan = 68;

function mulai() {
  // logic untuk menggerakkan karakter dan memberi batas agar karakter tidak keluar canvas
  window.addEventListener(
    "keydown",
    (kontrol = (e) => {
      let left = parseInt(
        window.getComputedStyle(jet).getPropertyValue("left")
      );
      if (e.key == "ArrowLeft" && left > 0) {
        jet.style.left = left - 10 + "px";
      } else if (e.key == "ArrowRight" && left <= 330) {
        jet.style.left = left + 10 + "px";
      }

      // logic untuk ketika spacebar ditekan maka buatlah div dengan class bullets untuk tembak
      if (e.key == spacebar || e.keyCode == 32) {
        let bullet = document.createElement("div");
        bullet.classList.add("bullets");
        board.appendChild(bullet);

        let movebullet = setInterval(() => {
          // logic ketika bullet mengenai obstacle maka obstacle akan hilang
          for (let i = 0; i < rocks.length; i++) {
            let rock = rocks[i];
            if (rock != undefined) {
              let rockbound = rock.getBoundingClientRect();
              let bulletbound = bullet.getBoundingClientRect();

              // jika peluru mengenai hitbox dari pesawat maka buat peswat menghilang
              if (
                bulletbound.left >= rockbound.left &&
                bulletbound.right <= rockbound.right &&
                bulletbound.top <= rockbound.top &&
                bulletbound.bottom <= rockbound.bottom
              ) {
                rock.parentElement.removeChild(rock);

                let score = (document.getElementById("points").innerHTML =
                  parseInt(document.getElementById("points").innerHTML) + 1);
                let scores = (document.getElementById("high-score").innerHTML =
                  parseInt(document.getElementById("points").innerHTML) + 0);

                // jika score melebihi 30 maka game akan berakhir
                if (scores >= 30) {
                  lanjut.style.display = "block";
                  board.style.display = "none";
                  clearInterval(moverocks);
                  clearInterval(generaterocks);
                }
              }
            }
          }
          let bulletbottom = parseInt(
            window.getComputedStyle(bullet).getPropertyValue("bottom")
          );

          if (bulletbottom >= 600) {
            clearInterval(movebullet);
          }

          bullet.style.left = left + "px";
          bullet.style.bottom = bulletbottom + 3 + "px";
        });
      }
    })
  );

  let generaterocks = setInterval(() => {
    // membuat obstacle
    let rock = document.createElement("div");
    rock.classList.add("rocks");

    let rockleft = parseInt(
      window.getComputedStyle(rock).getPropertyValue("left")
    );

    board.appendChild(rock);

    rock.style.left = Math.floor(Math.random() * 330) + "px";
  }, 1200);

  let moverocks = setInterval(() => {
    // mengatur kecepatan obstacle
    batu();
  }, 400);

  // function pergerakan obstacle dan looping obstacle
  const batu = () => {
    if (rocks != undefined) {
      for (let i = 0; i < rocks.length; i++) {
        let rock = rocks[i];
        let rocktop = parseInt(
          window.getComputedStyle(rock).getPropertyValue("top")
        );

        let board = document.getElementById("board");
        let gameOver = document.getElementById("go-card");
        if (rocktop >= 475) {
          gameOver.style.display = "block";
          board.style.display = "none";
          clearInterval(moverocks);
          clearInterval(generaterocks);
        }

        rock.style.top = rocktop + 10 + "px";
      }
    }
  };

  // logic dom untuk dom

  if (
    canva.style.display == "none" &&
    score.style.display == "none" &&
    btn.style.display == "flex"
  ) {
    canva.style.display = "block";
    score.style.display = "block";
    btn.style.display = "none";
    canva.style.cursor = "none";
  } else {
    canva.style.display = "none";
    score.style.display = "none";
    btn.style.display = "flex";
  }
}

const skins = () => {
  if (skin.style.display == "none") {
    skin.style.display = "flex";
    btn.style.display = "none";
  } else {
    skin.style.display = "flex";
    btn.style.display = "none";
  }
};

const skin1 = () => {
  mulai();

  logicSkin();

  jet.style.backgroundImage = "url('img/foto1.png')";
};

const skin2 = () => {
  mulai();

  logicSkin();

  jet.style.backgroundImage = "url('img/foto2.png')";
};

const skin3 = () => {
  mulai();

  logicSkin();

  jet.style.backgroundImage = "url('img/foto3.png')";
};

const mainLagi = () => {
  window.location.reload();
};

// logic untuk dom pada skin
const logicSkin = () => {
  if (canva.style.display == "none" && score.style.display == "none") {
    canva.style.display = "block";
    score.style.display = "block";
    skin.style.display = "none";
    btn.style.display = "none";
    canva.style.cursor = "none";
  } else {
    btn.style.display = "none";
    canva.style.display = "none";
    score.style.display = "none";
    skin.style.display = "block";
  }
};

const back = () => {
  if (skin.style.display == "flex") {
    btn.style.display = "flex";
    skin.style.display = "none";
  } else {
    btn.style.display = "none";
    skin.style.display = "flex";
  }
};
