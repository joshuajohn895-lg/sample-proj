function nextSection(number) {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById("section" + number).classList.add("active");
}

function sayYes() {
  nextSection(4);
}

function moveButton(button) {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;
  button.style.transform = `translate(${x}px, ${y}px)`;
}
