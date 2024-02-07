export default function Fruit({ emoji, name, price, soldOut }) {
  console.log(soldOut);
  return (
    <>
      <li>
        {emoji} {name} {price} {soldOut && "| sold out"}$
      </li>
    </>
  );
}
// Отже, умова  {soldOut && "| sold out"} працює дуже простим чином.
// В нас є пропс soldOut, який = true або false. sold out - немає в наявності.
// Фактично, умова виглядає ось так:
// if (soldOut) {
//   "| sold out"
// }
// Проте в нас скорочений запис, котрий працює абсолютно таким самим чином, як і повний, є лише скороченням для меншої кількості коду.
// Випадок з soldOut ? "| sold out" не можливий, тому що тут обов'язково потрібно вказувати блок else (:) і повертати пустий рядок, тобто:
// soldOut ? "| sold out" : "";
