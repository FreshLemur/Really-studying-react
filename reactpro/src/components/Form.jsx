import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <input
          type="text"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          value={name.firstName}
        />
        <input
          type="text"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          value={name.lastName}
        />
        <br />
        <button onClick={(e) => handleSubmit(e)}>Hello</button>
      </form>
    </div>
  );
}
// Отже, нам потрібно зробити так, щоб не оновлювалася сторінка при звичайній поведінці btn.
// Тому ми використовуємо атрибут onClick, викликаємо функцію handleSubmit і всередині неї є метож preventDefault()
// Фактично він запобігає звичайній поведінці btn і вона більше не оновлює сторінку.
// Для того, щоб впевнитися, що дані насправді надсилаються прописано console.log.
