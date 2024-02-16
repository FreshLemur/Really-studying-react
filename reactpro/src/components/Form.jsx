import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "", byo: "" });
  return (
    <div>
      Your first name is:{" "}
      <input
        type="text"
        readOnly
        value={name.firstName}
        placeholder="Will be your name here"
      />
      <br />
      Your last name is:{" "}
      <input
        type="text"
        readOnly
        value={name.lastName}
        placeholder="Will be your surname here"
      />
      <br />
      Your byo is:{" "}
      <input
        type="text"
        readOnly
        value={name.byo}
        placeholder="Will be your byo here"
      />
      <form>
        <input
          type="text"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          value={name.firstName}
          placeholder="Please, enter your first name"
        />
        <input
          type="text"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          value={name.lastName}
          placeholder="Please, enter your last name"
        />
      </form>
      <input
        type="text"
        onChange={(e) => setName({ ...name, byo: e.target.value })}
        value={name.byo}
        placeholder="Please, enter your byo"
      />
    </div>
  );
}
// Я просто трохи погрався, створив кілька імпутів лише для читання і 1 новий інпут на основі старих, щоб згадати.

// import { useState } from "react";

// export default function Form() {
//   const [name, setName] = useState({ firstName: "", lastName: "" });
//   return (
//     <div>
//       {name.firstName} {name.lastName}
//       <form>
//         <input
//           type="text"
//           onChange={(e) => setName({ ...name, firstName: e.target.value })}
//           value={name.firstName}
//         />
//         <input
//           type="text"
//           onChange={(e) => setName({ ...name, lastName: e.target.value })}
//           value={name.lastName}
//         />
//       </form>
//     </div>
//   );
// }
// Фактично, тепер все працює, проте я не дуже розумію, як працює спред оператор ...
// Він витягягує і робить копію об'єкту name, через це пропадає помилка, якось так.
// Пояснення від GPT про спред оператор.
// // Зрозуміло, давайте спробуємо ще раз з'ясувати, як працює оператор "..." (spread) в даному коді.
// // У вашому коді використовується оператор "..." для того, щоб створити новий об'єкт на основі поточного стану
// name і оновити конкретну властивість цього об'єкта. Давайте розглянемо це на прикладі:
// // jsx
// // Copy code
// // <input
// //   type="text"
// //   onChange={(e) => setName({ ...name, firstName: e.target.value })}
// //   value={name.firstName}
// // />
// // ...name: Оператор "..." витягує всі властивості поточного об'єкта name і розгортає їх, створюючи копію об'єкта.
// // { ...name, firstName: e.target.value }: Потім до цієї розгорнутої копії додається нова властивість firstName зі значенням
// e.target.value.
// // setName(...): За допомогою цього нового об'єкта оновлюється стан name.
// // Отже, використання оператора "..." тут допомагає зберегти всі попередні властивості об'єкта name, але оновити тільки конкретну
// властивість firstName. Такий підхід є важливим, оскільки в React для збереження попереднього стану використовуються неізмінність та
// створення нових об'єктів.

// import { useState } from "react";

// export default function Form() {
//   const [name, setName] = useState({ firstName: "", lastName: "" });
//   return (
//     <div>
//       Form
//       <form>
//         <input
//           type="text"
//           onChange={(e) => setName({ firstName: e.target.value, lastName: "" })}
//           value={name.firstName}
//         />
//         <input
//           type="text"
//           onChange={(e) => setName({ firstName: "", lastName: e.target.value })}
//           value={name.lastName}
//         />
//       </form>
//     </div>
//   );
// }
// Тепер ми маємо проблему. Коли ми пишемо в input name, то наче все добре.
// Але коли ми починаємо писати в input surname, то input name очищається, тому що ми даємо йому пусте рядкове значення.
// Якщо ми пропишемо ось так: onChange={(e) => setName({ firstName: e.target.value })}
// і ось так: onChange={(e) => setName({lastName: e.target.value })}
// Коли ми це робимо, то можемо писати в обидва input, проте вибиває помилка.
// Щоб це вирішити, потрібно використовувати spread operator

// import { useState } from "react";

// export default function Form() {
//   const [name, setName] = useState({ firstName: "", lastName: "" });
//   const [surname, setSurname] = useState({ firstName: "", lastName: "" });
//   return (
//     <div>
//       Form
//       <form>
//         <input
//           onChange={(e) => setName({ firstName: e.target.value, lastName: "" })}
//           type="text"
//           value={name.firstName}
//         />
//         <input
//           onChange={(e) =>
//             setSurname({ firstName: "", lastName: e.target.value })
//           }
//           type="text"
//           value={surname.lastName}
//         />
//       </form>
//     </div>
//   );
// }
// Отже. Це мій код, який я створил слухаючи його пояснення. Проте в нього є інший приклад, тому треба дивитися і на його, а потім порівняти.
