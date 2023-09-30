// Анонимные функции, таким функциям не требуется жесткая типизация, типы берутся из контекста
// Вызываются эти функции так же, как и стрелочные, и выполняются сразу же

const cars = ["audi", "bmw", "mazda", "honda"];

const toUpperCars = cars.map((name) => name.toUpperCase());

console.log(toUpperCars);

// Если функция определяется вне контекста, то ей все так же нужно будет задавать типы для агрументов

const toUpper = (name: string): string => name.toUpperCase();

const upperCars = cars.map(toUpper);
