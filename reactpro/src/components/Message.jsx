export default function Message() {
  const clicked = () => {
    console.log("You are clicked on button");
  };
  return (
    <div>
      <button onClick={clicked}>Click here to get a message</button>
    </div>
  );
}
// Ось дуже простий приклад використання події. При кліку в консоль виведеться повідомлення.
