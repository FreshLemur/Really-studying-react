export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Mango", price: 7, emoji: "🥭" },
    { name: "Banana", price: 2, emoji: "🍌" },
    { name: "Orange", price: 5, emoji: "🍊" },
    { name: "Pineapple", price: 8, emoji: "🍍" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.emoji} {fruit.name} {fruit.price}$
          </li>
        ))}
      </ul>
    </div>
  );
}

// Маємо масив з 5 об'єктів. Нам потрібно все відобразити гарно, в li списках.
// Зараз fruit = { name: "Apple", price: 10, emoji: "🍎" }, тобто fruit це об'єкт.
// Тому нам потрібно достукатися до властивостей об'єкту, щоб вивести їх.
// Ми до них достукалися, тому все гарно виведе.
// Якщо прописувати {fruit.emoji} {fruit.name} {fruit.price}$ в стовпчик, то тоді не буде пропуску між словами і напише:
// 🍎Apple10$, а якшо в лінію і ставити пробіли між ними, то напише: 🍎 Apple 10$.
// Також не слід забувати про атрибут key. Він вводиться як ідентифікатор, йому не можна передати об'єкт fruit, тому передається його
// властивість name.

// Якщо все прописати лише ось так, то код не працюватиме:
// export default function Fruits() {
//     const fruits = [
//       { name: "Apple", price: 10, emoji: "🍎" },
//       { name: "Mango", price: 7, emoji: "🥭" },
//       { name: "Banana", price: 2, emoji: "🍌" },
//       { name: "Orange", price: 5, emoji: "🍊" },
//       { name: "Pineapple", price: 8, emoji: "🍍" },
//     ];
//     return (
//       <div>
//         <ul>
//           {fruits.map((fruit, index) => (
//             <li key={index}>{fruit}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
