document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("username").value;

  alert(
    "Thank you, " +
      name +
      "!\n\nIni adalah website static, anggap saja pesannya sudah terkirim."
  );
});

function viewProject(path) {
  const confirmRedirect = confirm(
    "You will be redirected to my online Github.\n\nDo you want to continue?"
  );

  if (confirmRedirect) {
    window.location.href = `${path}`;
  }
}

const filters = document.querySelectorAll(".skill-filter li");
const skills = document.querySelectorAll(".skill");
filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;

    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");

    skills.forEach((skill) => {
      if (category === "all" || skill.dataset.category === category) {
        skill.style.display = "block";
      } else {
        skill.style.display = "none";
      }
    });
  });
});

const date = new Date();

const day = String(date.getDate()).padStart(2, "0");
const year = date.getFullYear();

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const month = months[date.getMonth()];

document.getElementById(
  "bios-date"
).textContent = `-- -- / ${day} ${month} ${year}`;
