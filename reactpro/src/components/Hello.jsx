function Hello(props) {
  console.log(props); // props це об'єкт.
  return (
    <div>
      <h1>
        {props.message} {props.name}
      </h1>
      {/* Достукування до властивості об'єкту. Виведе Hello, I`m Dmytro. */}
    </div>
  );
}
export default Hello;

// function Hello(props) {
//   console.log(props); // props це об'єкт.
//   return (
//     <div>
//       <h1>Hello {props.name}</h1> {/* Достукування до властивості об'єкту. */}
//       </div>
//       );
//     }
//     export default Hello;
// Це те, як можна зробити, цей компонент вже є динамічним, проте не повністю.
