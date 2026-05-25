$(document).ready(function () {
  $(".slajder-ratnika").each(function () {
    let slajder = $(this);
    let slajdovi = slajder.find(".slika-slajda");
    let indeks = 0;

    function prikaziSlajd(i) {
      slajdovi.removeClass("aktivan-slajd");
      slajdovi.eq(i).addClass("aktivan-slajd");
    }

    slajder.find(".sledeci").click(function () {
      indeks++;
      if (indeks >= slajdovi.length) indeks = 0;
      prikaziSlajd(indeks);
    });

    slajder.find(".prethodni").click(function () {
      indeks--;
      if (indeks < 0) indeks = slajdovi.length - 1;
      prikaziSlajd(indeks);
    });
  });
});