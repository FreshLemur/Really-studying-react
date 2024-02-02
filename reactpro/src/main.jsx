import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render( // Достукалися до div в index.html за допомогою id, а потім використали метод render
  <React.StrictMode> {/* Функціональний коментар. */}
    <App /> {/* Його імпортовано на 3 рядку. Ctrl + LMB на нього, побачимо звідки він імпортується.*/}
  </React.StrictMode>,
)
