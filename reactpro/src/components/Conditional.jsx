import Code from "./Code";
import Welcome from "./Welcome";

export default function Conditional() {
  const display = true;
  const messageOne = <h1>Text 1</h1>;
  const messageTwo = <h1>Text 2</h1>;
  let message;
  if (display) {
    message = messageOne;
  } else {
    message = messageTwo;
  }
  return message;
}
// А ось цей варіант прекрасно виконує те, що ми хотіли зробити. Тепер ми використовуємо лише 1 return.

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
