import Hello from "./components/Hello";

function App() {
  // Компонент, який створений за допомогою React
  // Увесь код знизу називається JSX. Саме цей код відповідає за те, що відображається на веб-сторінці.
  return (
    <div className="App">
      {/* Це div нашого компоненту.*/}
      <Hello /> {/* Використання Hello, якого ми отримали з import. */}
    </div>
  );
}

export default App;
