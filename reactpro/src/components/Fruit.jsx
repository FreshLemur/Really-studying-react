export default function Fruit({ name, price, emoji }) {
  return (
    <div>
      <li>
        {emoji} {name} {price}$
      </li>
    </div>
  );
}
// Вже в цьому компоненті ми рендеримо і показуємо те, що хочемо на сторінці.
