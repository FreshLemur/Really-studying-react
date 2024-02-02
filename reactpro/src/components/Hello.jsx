const name = "Rob";

function displayMessage() {
  return "Wow";
}

function Hello() {
  return (
    <div>
      <h1>
      Hello from a component! {name} {10 + 20} {displayMessage()}
    </h1>
    <h2>Hello from h2</h2>
    </div>
  );
}
export default Hello;

/* Ми створили змінну name. Звичайний html тег не може включати в себе JS, однак наш код не є звичайним JS, це jsx.
  Тому зараз ми маємо можливість додати туди код JS.
  Потрібно вписати назву змінної в фігурні дужки:
    {name}
    Тепер ми бачимо Hello from a component! Rob
    
  Ми буквально можемо вписати в фігурні дужки код JS.
    Наприклад, якась математична дія: 
      {10+20}, побачимо 30.

    Наприклад, виклик функції:
      displayMessage(), побачимо Wow

    Ми не можемо в одному компоненті повертати 2 теги:
      function Hello() {
        return (
          <h1>
            Hello from a component! {name} {10 + 20} {displayMessage()}
          </h1>
          <h1>
            gg
          </h1>
        );
      }
      Це буде помилкою і так заборонено робити синтаксисом.
    
    Натомість потрібно потрібно повертати div і всередині нього ми можемо передавати кілька елементів, наприклад:
      function Hello() {
        return (
          <div>
            <h1>
            Hello from a component! {name} {10 + 20} {displayMessage()}
          </h1>
          <h2>Hello from h2</h2>
          </div>
        );
      }
*/
