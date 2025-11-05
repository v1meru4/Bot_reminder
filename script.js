// Telegram WebApp SDK
let tg = window.Telegram.WebApp;
tg.expand(); // розгортає міні-додаток на весь екран

// Обробка форми
document.getElementById("deadlineForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const date = document.getElementById("dateInput").value;
  const task = document.getElementById("taskInput").value;

  if (!date || !task) {
    alert("⚠️ Заповни всі поля!");
    return;
  }

  // Передаємо дані назад у Telegram-бот
  const data = JSON.stringify({ date, task });
  tg.sendData(data); // надсилає JSON у message.web_app_data у боті
  tg.close(); // закриває міні-додаток
});