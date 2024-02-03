// 3 приклад деструктуризації.
function Hello({ message, name, emoji }) {
  return (
    <div>
      <h1>
        {message} {name} {emoji}
      </h1>
    </div>
  );
}
export default Hello;

// 1 приклад, не деструктуризований.
// function Hello(props) {
//   return (
//     <div>
//       <h1>
//         {props.message} {props.name}
//       </h1>
//       {/* Достукування до властивості об'єкту. Виведе Hello, I`m Dmytro. */}
//     </div>
//   );
// }
// export default Hello;з
// Можна ось так використовувати.

// 2 приклад, вже деструктуризований, проте ще не найкраща деструктуризація.
// function Hello(props) {
//   const { message, name } = props;
//   return (
//     <div>
//       <h1>
//         {message} {name}
//       </h1>
//     </div>
//   );
// }
// export default Hello;
