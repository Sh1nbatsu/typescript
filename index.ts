function greeting(name: string) {
  return `Hello, ${name}`;
}

console.log(greeting("Oleg"));

// console.log(greeting())
// Ошибка, нужен один агрумент - получено ноль

// Добавление необязательных переменных к функции

function greetingUnness(name?: string) {
  return `Hello, ${name}`;
}

console.log(greetingUnness());
console.log(greetingUnness("Oleg"));

// Добавление необязательных параметров и дефолт

function greetingDefault(name?: string) {
  return `Hello, ${name ? name : "Default"}`;
}

console.log(greetingDefault());
console.log(greetingDefault("Oleg"));

// Значение по умолчанию

function getGreeting(name = "Default") {
  return `Hello, ${name}`;
}

console.log(getGreeting());
console.log(greeting("olegs"));

// Тип возвращаемого значения

function getGreetingPhrase(name: string): string {
  return `Hellom, ${name}`;
}

console.log(getGreetingPhrase("Lisa"));
