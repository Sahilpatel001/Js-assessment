const form = document.getElementById("regForm");
const fields = ["name", "email", "phone", "subject", "message"];

const validateField = (id) => {
  const input = document.getElementById(id);
  const error = input.nextElementSibling;
  if (!input.value.trim()) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
};

fields.forEach(id => {
  const input = document.getElementById(id);
  input.addEventListener("blur", () => {
    validateField(id);
  });
});

const validateAll = () => {
  fields.forEach(id => validateField(id));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateAll();
});

document.addEventListener("click", (e) => {
  const clickedInsideForm = e.target.closest(".form-container");
  if (!clickedInsideForm) {
    validateAll();
  }
});