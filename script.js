const form = document.querySelector(".form");

const patterns = {
  phone: /^[+]?[0-9]{3,15}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  password: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/,
  fullname: /^.+$/,
};

const errorMessages = {
  phone: "Введите корректный телефон.",
  email: "Введите корректный email.",
  password: "Мин. 8 сим., одну загл. букву, одну цифру и один спец. символ.",
  fullname: "Поле ФИО не может быть пустым.",
};

form.addEventListener("submit", (e) => {
  let valid = true;

  const checkValid = (inputName, pattern) => {
    const input = document.getElementById(inputName);
    const error = document.getElementById(`${inputName}-error`);

    if (!pattern.test(input.value)) {
      input.classList.add("invalid");
      error.textContent = errorMessages[inputName];
      error.style.display = "block";
      error.style.opacity = "1";
      valid = false;
    } else {
      input.classList.remove("invalid");
      error.style.opacity = "0";
    }
  };

  checkValid("phone", patterns.phone);
  checkValid("email", patterns.email);
  checkValid("password", patterns.password);
  checkValid("fullname", patterns.fullname);

  if (!valid) {
    e.preventDefault();
  }
});
