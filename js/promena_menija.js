document.addEventListener("DOMContentLoaded", function () {
  const linkRatnici = document.querySelector(".padajuci-meni > a");
  const mobilniPodmeni = document.querySelector(".mobilni-podmeni");

  if (linkRatnici && mobilniPodmeni) {
    linkRatnici.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        mobilniPodmeni.classList.toggle("prikazi");
      }
    });
  }
});