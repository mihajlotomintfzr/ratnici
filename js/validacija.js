const poruke = {
  sr: {
    ime: "Ime mora imati najmanje 2 karaktera.",
    email: "Unesite ispravan email.",
    poruka: "Poruka mora imati najmanje 10 karaktera.",
    success: "Poruka uspešno poslata!"
  },
  en: {
    ime: "Name must have at least 2 characters.",
    email: "Enter a valid email.",
    poruka: "Message must have at least 10 characters.",
    success: "Message sent successfully!"
  }
};

function prikaziGresku(polje, poruka) {
  ukloniGresku(polje);

  const greska = document.createElement("div");
  greska.className = "poruka-greske";
  greska.textContent = poruka;
  greska.style.color = "red";
  greska.style.fontSize = "14px";
  greska.style.marginTop = "6px";

  polje.style.border = "1px solid red";
  polje.parentElement.appendChild(greska);
}

function ukloniGresku(polje) {
  polje.style.border = "1px solid #8b6f3d";

  const staraGreska = polje.parentElement.querySelector(".poruka-greske");
  if (staraGreska) {
    staraGreska.remove();
  }
}

const kontaktForma = document.getElementById("kontakt-forma");

if (kontaktForma) {
  kontaktForma.addEventListener("submit", function (e) {
    e.preventDefault();

    const jezik = localStorage.getItem("jezik") || "sr";
    const t = poruke[jezik];

    const ime = document.getElementById("ime");
    const email = document.getElementById("email");
    const poruka = document.getElementById("poruka");

    let sveJeIspravno = true;

    if (ime.value.trim().length < 2) {
      prikaziGresku(ime, t.ime);
      sveJeIspravno = false;
    } else {
      ukloniGresku(ime);
    }

    const emailObrazac = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailObrazac.test(email.value.trim())) {
      prikaziGresku(email, t.email);
      sveJeIspravno = false;
    } else {
      ukloniGresku(email);
    }

    if (poruka.value.trim().length < 10) {
      prikaziGresku(poruka, t.poruka);
      sveJeIspravno = false;
    } else {
      ukloniGresku(poruka);
    }

    if (sveJeIspravno) {
      alert(t.success);
      kontaktForma.reset();
    }
  });
}