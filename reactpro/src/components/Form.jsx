import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  return (
    <div>
      Form
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </form>
    </div>
  );
}
// Тут ми ще сильніше покращили цей код, видаливши функцію handleChange і встановлюючи значення для стейту відразу
// ми зміні, в анонімній стрілковій функції.

// import { useState } from "react";

// export default function Form() {
//   const [name, setName] = useState("");
//   const handleChange = (e) => {
//     setName(e.target.value);
//   };
//   return (
//     <div>
//       Form
//       <form>
//         <input onChange={(e) => handleChange(e)} type="text" value={name} />
//       </form>
//     </div>
//   );
// }
// Тепер ми вже достукалися до об'єкту e.target.value - кнопка, яку ми натискаємо.
// Вводимо цю кнопку в input.
// Також ми змінили сам input на анонімну стрілкову функцію, викликаючи відразу функцію handleChange і пишучи набагато менше коду.

// import { useState } from "react";

// export default function Form() {
//   const [name, setName] = useState("");
//   const handleChange = (e) => {
//     console.log(e);
//   };
//   return (
//     <div>
//       Form
//       <form>
//         <input
//           onChange={function demo(e) {
//             return handleChange(e);
//           }}
//           type="text"
//           value={name}
//         />
//       </form>
//     </div>
//   );
// }
// Тепер ми поставили значення useState на 0 і хочемо передавати сюди літери, щоб заповнювати значення, логічно.
// Проте, ми не можемо всередині інпут в атрибуті onChange просто передати event(e). Для цього створюється
// call back function, всередині якої return викликає функцію handleChange і передає e. Тепер все працює і функція
// handleChange фіксує зміни.

// import { useState } from "react";

// export default function Form() {
//   const [name, setName] = useState("Rob");
//   const handleChange = () => {
//     console.log("Hi my brother");
//   };
//   return (
//     <div>
//       Form
//       <form>
//         <input onChange={handleChange} type="text" value={name} />
//       </form>
//     </div>
//   );
// }
// Тепер ми створили стейт. Проте ми не можемо досі змінювати значення, але принаймні зараз немає помилки.

// export default function Form() {
//     const handleChange = () => {
//       console.log("Hi my brother");
//     };
//     return (
//       <div>
//         Form
//         <form>
//           <input onChange={handleChange} type="text" value="" />
//         </form>
//       </div>
//     );
//   }
// Навіть коли value пусте ми не можемо його змінювати. Нам потрібно задавати value як динамічну змінну, для цього потрібно використовувати стейт.

// export default function Form() {
//     return (
//       <div>
//         Form
//         <form>
//           <input type="text" value="First name" />
//         </form>
//       </div>
//     );
//   }
// Ми не можемо змінювати input, видає помилку.
