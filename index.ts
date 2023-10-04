// Тип: { firstName: string, pointsCount: number }
const user = {
  firstName: "Mike",
  pointsCount: 1000,
};

// Поменять тип свойств нельзя
// Type 'number' is not assignable to type 'string'.
// user.firstName = 7;

// TypeScript не позволяет обращаться к несуществующим свойствам. Это значит, что структура любого объекта должна быть задана при его инициализации:

// Свойства в описании типа разделяются через запятую (,)
// function doSomething(user: { firstName: string, pointsCount: number }) {
//   // ...
// }

// firstName может быть undefined
// pointsCount может быть null
// function doSomething(user: { firstName?: string, pointsCount: number | null }) {
//   // ...
// }

// Реализуйте функцию isComplete(), которая принимает на вход курс и определяет, завершен ли он. Завершенным считается курс, в который добавлено четыре или более уроков:

function isComplete(course: { name: string; lessons: string[] }) {
  if (course.lessons.length <= 3) {
    return false;
  }
  return true;
}

const course = {
  name: "Java",
  lessons: ["variables", "functions", "conditions"],
};

console.log(isComplete(course));
