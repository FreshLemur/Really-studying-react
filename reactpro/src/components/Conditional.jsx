export default function Conditional() {
  const display = true;
  let message;
  if (display) {
    message = <h1>Text from if true</h1>;
  } else {
    message = <h1>Text from else false</h1>;
  }
  return message;
}
// Цей варіант є ще кращий, тому що ми прописуємо набагато менше коду і маємо той самий 1 return.

// export default function Conditional() {
//   const display = true;
//   const messageOne = "Text if";
//   const messageTwo = "Text else";
//   let message;
//   if (display) {
//     message = messageOne;
//   } else {
//     message = messageTwo;
//   };
//   return message;
// };
// А ось цей варіант прекрасно виконує те, що ми хотіли зробити. Тепер ми використовуємо лише 1 return.
// Але можна все зробити ще краще!

// export default function Conditional() {
//     const display = false;
//     const messageOne = <h1>Text 1</h1>;
//     const messageTwo = <h1>Text 2</h1>;
//     if (display) {
//       return messageOne;
//     } else {
//       return messageTwo;
//     }
//   }
// Цей варіант вже дуже схожий на те, чого ми хочемо добитися. Проте ми досі використовуємо 2 return.
