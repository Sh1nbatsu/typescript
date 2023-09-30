// Анонимные функции, таким функциям не требуется жесткая типизация, типы берутся из контекста
// Вызываются эти функции так же, как и стрелочные, и выполняются сразу же
var cars = ["audi", "bmw", "mazda", "honda"];
var toUpperCars = cars.map(function (name) { return name.toUpperCase(); });
console.log(toUpperCars);
// Если функция определяется вне контекста, то ей все так же нужно будет задавать типы для агрументов
var toUpper = function (name) { return name.toUpperCase(); };
var upperCars = cars.map(toUpper);
