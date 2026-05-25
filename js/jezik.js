let trenutniJezik = localStorage.getItem("jezik") || "sr";

const dugmeJezik = document.getElementById("jezik-dugme");

function nadjiVrednost(objekat, putanja) {
  return putanja.split(".").reduce((rezultat, deo) => rezultat && rezultat[deo], objekat);
}

async function ucitajJezik(jezik) {
  try {
    const odgovor = await fetch("lang.json");
    const prevodi = await odgovor.json();

    document.querySelectorAll("[data-lang]").forEach((element) => {
      const kljuc = element.getAttribute("data-lang");
      const vrednost = nadjiVrednost(prevodi[jezik], kljuc);
      if (vrednost !== undefined) {
        element.innerHTML = vrednost;
      }
    });

    document.querySelectorAll("[data-placeholder]").forEach((element) => {
      const kljuc = element.getAttribute("data-placeholder");
      const vrednost = nadjiVrednost(prevodi[jezik], kljuc);
      if (vrednost !== undefined) {
        element.placeholder = vrednost;
      }
    });

    const naslovStrane = document.querySelector("[data-title]");
    if (naslovStrane) {
      const kljuc = naslovStrane.getAttribute("data-title");
      const vrednost = nadjiVrednost(prevodi[jezik], kljuc);
      if (vrednost !== undefined) {
        document.title = vrednost;
      }
    }

    document.querySelectorAll("[data-meta-content]").forEach((element) => {
      const kljuc = element.getAttribute("data-meta-content");
      const vrednost = nadjiVrednost(prevodi[jezik], kljuc);
      if (vrednost !== undefined) {
        element.setAttribute("content", vrednost);
      }
    });

    const glavniVideo = document.getElementById("glavni-video");
    const izvorGlavnogVidea = document.getElementById("izvor-glavnog-videa");

    if (glavniVideo && izvorGlavnogVidea) {
      if (jezik === "en") {
        izvorGlavnogVidea.src = "video/ratnici-en.mp4";
      } else {
        izvorGlavnogVidea.src = "video/ratnici.mp4";
      }

      glavniVideo.load();
    }

    if (dugmeJezik) {
      dugmeJezik.textContent = jezik === "sr" ? "EN" : "SR";
    }

    document.documentElement.lang = jezik;
    localStorage.setItem("jezik", jezik);
  } catch (greska) {
    console.error("Greška pri učitavanju jezika:", greska);
  }
}

if (dugmeJezik) {
  dugmeJezik.addEventListener("click", function () {
    trenutniJezik = trenutniJezik === "sr" ? "en" : "sr";
    ucitajJezik(trenutniJezik);
  });
}

ucitajJezik(trenutniJezik);