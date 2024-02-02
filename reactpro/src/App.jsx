import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() { // Компонент, який створений за допомогою React
  const [count, setCount] = useState(0)
// Увесь код знизу називається JSX. Саме цей код відповідає за те, що відображається на веб-сторінці.
  return (
    <div className="App"> {/* Це div нашого компоненту */}
      <div> {/* Це div іконок */}
        <a href="https://vitejs.dev" target="_blank"> {/* Посилання всередині vite */}
          <img src="/vite.svg" className="logo" alt="Vite logo" /> {/* vite logo */}
        </a>
        <a href="https://reactjs.org" target="_blank"> {/* Посилання всередині react */}
          <img src={reactLogo} className="logo react" alt="React logo" /> {/* react logo */}
        </a>
      </div>
      <h1>Vite + React</h1> {/* Текст по центру */}
      <div className="card"> {/* div з лічильником */}
        <button onClick={() => setCount((count) => count + 1)}> {/* лічильник */}
          count is {count} {/* число лічильника */}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR {/* code вказує на програмний код, текст всередині p */}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more {/* p внизу. */}
      </p>
    </div>
  )
}

export default App
