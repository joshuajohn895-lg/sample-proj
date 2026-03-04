function nextSection(number) {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById("section" + number).classList.add("active");
}

function submitResponse(answer) {
  const form = document.querySelector("form[name='proposal-response']");
  form.querySelector("input[name='response']").value = answer;

  fetch("/", {
    method: "POST",
    body: new FormData(form)
  })
  .then(() => {
    if (answer === "YES") {
      showYes();
    } else {
      showNo();
    }
  })
  .catch((error) => console.log(error));
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
