function nextSection(number) {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById("section" + number).classList.add("active");
}

function showYes() {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById("yesSection").classList.add("active");
}

function showNo() {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById("noSection").classList.add("active");
}
