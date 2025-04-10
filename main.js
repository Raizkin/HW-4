// Створіть дві змінні для зберігання значень двох текстових полів. Перевірте, чи обидві змінні не є порожніми. Якщо обидва поля заповнені, вивести повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".
const a = prompt("Введіть текст: ");
const b = prompt("Введіть текст: ");
if (a !== "" && b !== "") {
console.log("Обидва поля заповнені");
} else {
console.log("Не всі поля заповнені");
}
// Створіть дві змінні для зберігання числових значень. Обчисліть їх суму. Якщо сума більше 10 — виведіть "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".
const numberOne = Number(prompt("Введіть перше число")); 
const numberTwo = Number(prompt("Введіть друге число")); 
if (numberOne + numberTwo > 10) {
console.log("Сума більша за 10");
} else {
console.log("Сума менша або дорівнює 10");
}
// Створіть змінну для зберігання тексту. Перевірте, чи містить цей текст слово "JavaScript". Якщо містить, виведіть "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".
const text = prompt("Введіть текст");
if (text === "JavaScript") {
 console.log("Текст містить слово JavaScript");
} else {
console.log("Текст не містить слово JavaScript");
}
// Створіть змінну для зберігання числа. Перевірте, чи це число більше 10 і менше 20. Якщо так — виведіть "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".
const num = Number(prompt("Введіть число"));
if (10 <= num && num <= 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}
// Створіть змінні для зберігання значень полів (ім'я, email, пароль). Перевірте, чи ім'я містить не менше 3 символів, чи email містить символ @ та крапку після нього, а пароль не менше 6 символів. Якщо всі умови виконані — виведіть "Перенаправлення на іншу сторінку", якщо ні — "Помилка: неправильне заповнення".
const login = prompt("Введіть ваше ім'я");
const email = prompt("Введіть ваш email");
const password = prompt("Введіть ваш пароль");
if (login.length >= 3 && email.includes("@.") && password.length >= 6) {
    console.log("Перенаправлення на іншу сторінку...");
} else {
    console.log("Помилка: неправильне заповнення");
}
// =)