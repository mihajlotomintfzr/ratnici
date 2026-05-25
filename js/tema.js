const dugmeTema = document.getElementById("tema-dugme");
const sacuvanaTema = localStorage.getItem("tema");

if (sacuvanaTema === "tamna") {
  document.body.classList.add("tamna-tema");
  dugmeTema.textContent = "☀️";
} else {
  dugmeTema.textContent = "🌙";
}

dugmeTema.addEventListener("click", function () {
  document.body.classList.toggle("tamna-tema");

  if (document.body.classList.contains("tamna-tema")) {
    localStorage.setItem("tema", "tamna");
    dugmeTema.textContent = "☀️";
  } else {
    localStorage.setItem("tema", "svetla");
    dugmeTema.textContent = "🌙";
  }
});