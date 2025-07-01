//! Задача 3. Конструктор рядків

//todo Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який записується у приватну властивість value об'єкта, що створюється.

//todo Оголоси наступні методи класу:

//* getValue() — повертає поточне значення приватної властивості value.
//* padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.
//* padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.
//* padBoth(str) — отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості value об'єкта, який викликає цей метод.

class StringBuilder {
  #initialValue;
  constructor(initialValue) {
    this.#initialValue = initialValue;
  }

  getValue() {
    return this.#initialValue;
  }
  padEnd(str) {
    this.#initialValue += str;
  }
  padStart(str) {
    this.#initialValue = str + this.#initialValue;
  }
  padBoth(str) {
    this.#initialValue = str + this.#initialValue + str;
  }
}

//! Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для перевірки коректності роботи. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
