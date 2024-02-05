import Hello from "./components/Hello";
function App() {
  const person = {
    name: "Dmytro",
    message: "Hello, I`m",
    emoji: "😊",
    seatNumbers: [1, 4, 7],
  };
  return (
    <div className="App">
      <Hello person={person} />
      {/* Передача об'єкту в компонент. */}
    </div>
  );
}

export default App;

// import Hello from "./components/Hello";
// function App() {
//   const seatNumbers = [1, 4, 7];
//   return (
//     <div className="App">
//       <Hello
//         name="Dmytro"
//         message="Hello, I`m"
//         emoji="😊"
//         seatNumbers={seatNumbers}
//         // Передача масиву в компонент.
//       />
//     </div>
//   );
// }

// export default App;
// Це передача масиву в компонент, seatNumbers={seatNumbers}.
