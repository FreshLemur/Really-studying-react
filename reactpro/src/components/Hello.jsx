function Hello({ person }) {
  return (
    <div>
      <h1>
        {person.message}
        {person.name}
        {person.emoji}
        {person.seatNumbers}
      </h1>
    </div>
  );
}
export default Hello;
// Це вже деструктурований приклад передачі об'єкту до компоненту.

// На 5 рядку ми передаємо seatNumbers, це масив з 3 чисел, виведе Привіт, я Дмитро 😊 1 4 7.
// Між числами в масиві нема коми, як це є в самому масиві і виводить лише числа.

// function Hello(props) {
//   return (
//     <div>
//       <h1>
//         {props.person.message}
//         {props.person.name}
//         {props.person.emoji}
//         {props.person.seatNumbers}
//       </h1>
//     </div>
//   );
// }
// export default Hello;
// Передача об'єкту в компонент, без деструктуризації.
