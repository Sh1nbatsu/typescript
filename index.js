function greeting(name) {
    return "Hello, ".concat(name);
}
console.log(greeting("Oleg"));
// console.log(greeting())
// Ошибка, нужен один агрумент - получено ноль
// Добавление необязательных переменных к функции
function greetingUnness(name) {
    return "Hello, ".concat(name);
}
console.log(greetingUnness());
console.log(greetingUnness("Oleg"));
// Добавление необязательных параметров и дефолт
function greetingDefault(name) {
    return "Hello, ".concat(name ? name : "Default");
}
console.log(greetingDefault());
console.log(greetingDefault("Oleg"));
// Значение по умолчанию
function getGreeting(name) {
    if (name === void 0) { name = "Default"; }
    return "Hello, ".concat(name);
}
console.log(getGreeting());
// Тип возвращаемого значения
// function getGreetingPhrase(name)
