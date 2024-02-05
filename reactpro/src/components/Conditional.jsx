import Code from "./Code";
import Welcome from "./Welcome";

export default function Conditional() {
  const display = false;
  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  }
}

// В даному прикладі ми рендеримо компонент Welcome, якщо умова справджується і рендеримо Code, якщо не справджується.

// export default function Conditional() {
//   const display = true;
//   if (display) {
//     return (
//       <div>
//         <h3>This is a conditional component</h3>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h3>Code everyday</h3>
//       </div>
//     );
//   }
// }
// Ми навчилися створювати компоненти та як їх рендерити, але ми не навчилися умовно рендерити компонент залежно від
// заданої умови.

// Як ми можемо умовно рендерити певні JSX елементи?
// Ми створили просту умову. Якщо display = true, виводиться блок if, якщо dipslay = false, виводиться блок else.

// Це був приклад, як умовно відобразити JSX.
