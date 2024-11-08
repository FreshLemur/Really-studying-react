import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + incrementBy);
  };
  const decrement = () => {
    setCount(count - incrementBy);
  };
  const multiplication = () => {
    setCount(count * incrementBy);
  };
  const division = () => {
    setCount(count / incrementBy);
  };

  const [incrementBy, setIncrementBy] = useState(1);

  const increaseIncrement = () => {
    setIncrementBy(incrementBy + 1);
  };
  const decreaseIncrement = () => {
    setIncrementBy(incrementBy - 1);
  };
  return (
    <div>
      <h1>Count value is: {count} </h1>

      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={multiplication}>Multiplication</button>
      <br />
      <button onClick={division}>Division</button>

      <h1>We are incrementing the value by: {incrementBy}</h1>
      <button onClick={increaseIncrement}>increaseIncrement</button>
      <br />
      <button onClick={decreaseIncrement}>decreaseIncrement</button>
    </div>
  );
}
// Отже, пояснення як це працює.
// Сенс цього коду в тому, щоб показати можливість декілька станів в React.
// incrementBy це значення, на яке будуть виконуватися певні математичні дії.
// Це майже простенький калькулятор, який може додавати, віднімати, множити і ділити завдяки 2 стану - incrementBy.
