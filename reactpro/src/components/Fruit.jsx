export default function Fruit({ name, price, emoji }) {
  return (
    <div>
      <li>
        {emoji} {name} {price}$
      </li>
    </div>
  );
}
