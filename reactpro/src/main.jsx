import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*
Якщо видалити React.StrictMode, то все фактично працюватиме. Саме через нього додаток рендериться двічі.
Це зроблино з міркувань налагодження, щоб все працювало краще.
*/
