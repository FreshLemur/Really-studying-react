import Hello from "./components/Hello";
function App() {
  return (
    <div className="App">
      <Hello name="Dmytro" message="Hello, I`m" />
      <Hello name="Vitaly" message="Hi, my name is" />
      <Hello name="Kolya" message="Fuck u, " />
      {/* name і message це Пропс, який ми передаємо в компонент Hello, це буде об'єкт. 
      Ми створили кілька компонентів, яким передаємо значення, отже це динамічні компоненти.*/}
    </div>
  );
}

export default App;
