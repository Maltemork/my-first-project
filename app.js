function sayHello() {
  const fullName = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;
  const mail = document.querySelector("#mail").value;

  document.querySelector(
    "h3"
  ).textContent = `Hej ${fullName}. Du er ${age} år gammel. Din mail er: ${mail}`;
}

document.querySelector("button").addEventListener("click", sayHello);
