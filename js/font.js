document.addEventListener("DOMContentLoaded", () => {
  const btnPovecaj = document.getElementById("povecaj-font");
  const btnSmanji = document.getElementById("smanji-font");
  
  let trenutnaVelicina = parseInt(localStorage.getItem("fontVelicina")) || 100;
  document.body.style.fontSize = trenutnaVelicina + "%";

  if (btnPovecaj && btnSmanji) {
    btnPovecaj.addEventListener("click", () => {
   
      if (trenutnaVelicina < 150) {
        trenutnaVelicina += 10;
        document.body.style.fontSize = trenutnaVelicina + "%";
        localStorage.setItem("fontVelicina", trenutnaVelicina);
      }
    });

    btnSmanji.addEventListener("click", () => {
   
      if (trenutnaVelicina > 70) {
        trenutnaVelicina -= 10;
        document.body.style.fontSize = trenutnaVelicina + "%";
        localStorage.setItem("fontVelicina", trenutnaVelicina);
      }
    });
  }
});