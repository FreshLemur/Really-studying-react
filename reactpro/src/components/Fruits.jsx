export default function Fruits() {
  const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

// Ми передали сюди масив з фруктів, проте вони ніби прилипли один до одного і на сторінці виглядають ось так:
// AppleMangoBananaOrangePineapple

// Використовуючи цикл map ми відфільтрували наш масив і тепер ми створили 5 різних li елементів.
// 1 li - Apple
// 2 li - Mango
// 3 li - Banana
// 4 li - Orange
// 5 li - Pineapple
// Ми закинули всі ці елементи в ul список.
// Проте ми маємо warning:
// Fruits.jsx?t=1707118831379:18 Warning: Each child in a list should have a unique "key" prop.

// Check the render method of `Fruits`. See https://reactjs.org/link/warning-keys for more information.
//     at li
//     at Fruits
//     at div
//     at App

// Щоб виправити цю помилку ми повинні були створити key - уникальній ідентифікатор кожного елементу, щоб для React не було проблем.
// Це повідомлення про помилку пов'язане з відсутністю унікального "key" для кожного елемента в списку, який ви рендерите.
// У React кожен елемент в масиві або списку повинен мати унікальний ключ для ефективного відслідковування та оптимізації відображення.
// В нашому випадку ми створили key за індексом, кожним айді елементу.
// Можна також передати не index, а fruit. Таким чином теж створиться унікальній ідентифікатор.

// const prices = [10, 20, 50, 30, 60];
// prices.map((price) => console.log((price * 32) / 100));
// Приклад циклу map. В цьому випадку ми порахували 32% від чисел.
// Пробігаємося по масиву і створюємо новий, не мутуючи попередній.
// Також можна передавати index.

// export default function Fruits() {
//     return <div></div>;
//   }
// Це шаблон, по якому ми миттєво експортуємо і пишемо менше коду, тому він кращий.
