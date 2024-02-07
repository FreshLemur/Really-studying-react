import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const backToZero = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Count value is: {count} </h1>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={backToZero}>Back to zero</button>
    </div>
  );
}

// increment +
// decrement -
// backToZero 0

// const increment = () => {
//     setCount(count + 1);
//   };
// Фактично, setCount встановлює значення для count. Те, що ми передамо сюди буде значенням змінної count.
//      Отже, ми передали count + 1 і збільшили значення count на 1.

// {count} має значення змінної count. Воно за замовчуванням = 0 через useState(0).
//      Прийнято оголошувати стан компоненту його початку.

// export default function Counter() {
//     const [count, setCount] = useState(0);
//     return <div>Count value is: </div>;
//   }
// const [count, setCount] = useState();
//      use state hook - використання гаку стану.
//      В змінній нам потрібно визначити дві речі. Перше - змінна стану (count).
//      Друге - спеціальна функція, яка встановлюватиме значення для першої змінної (setCount).
//      Ми не можемо просто напряму прописати count++, потрібна функція.
//      Також ми можемо встановити початкове значення count, прописуючи useState(0).
//      Таким чино, count === 0.
