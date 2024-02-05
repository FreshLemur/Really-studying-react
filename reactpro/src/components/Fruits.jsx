import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Mango", price: 7, emoji: "🥭" },
    { name: "Banana", price: 2, emoji: "🍌" },
    { name: "Orange", price: 5, emoji: "🍊" },
    { name: "Pineapple", price: 8, emoji: "🍍" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
}

// Наразі ми просто передаємо наші дані для рендерингу компоненту Fruit.
// Передаємо йому 4 пропси. key - для ідентифікатора.
