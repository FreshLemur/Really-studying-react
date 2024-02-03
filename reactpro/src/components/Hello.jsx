function Hello(props) {
  // props.name = "Some name"; Якщо ми спробуємо переприсвоїти значення пропсу, то це просто буде помилка, тому що це не можливо.
  return (
    <div>
      <h1>
        {props.message} {props.name} {props.emoji}
      </h1>
    </div>
  );
}
export default Hello;
