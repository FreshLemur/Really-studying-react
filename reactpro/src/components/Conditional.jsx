import Code from "./Code";
import Welcome from "./Welcome";

export default function Conditional() {
  let isDisplay = false;
  return isDisplay ? <Welcome /> : <Code />;
}
// Вже в цьому випадку ми за допомогою тернарних операторів умовно рендеримо компоненти.
// Якщо isDisplay true, то відрендериться компонент Welcome, а якщо isDisplay = false, то
// відрендериться компонент Code.

// export default function Conditional() {
//   let isDisplay = false;
//   return isDisplay ? <h1>Message from true</h1> : <h1>Message from false</h1>;
// }
// Ось вже чудовий, прекрасно працюючий приклад. В верхньому лише додадуться компоненти.

// export default function Conditional() {
//   const isDisplay = false;
//   let message = isDisplay ? (
//     <h1>Text from if true</h1>
//   ) : (
//     <h1>Text from else false</h1>
//   );
//   return message;
// }
// Ось вже приклад використання тернарних операторів. Проте можна зробити ще краще! ⬆⬆⬆
