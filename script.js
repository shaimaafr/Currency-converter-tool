var currency = {
    dollar: 0.27,
    dinar: 0.19,
    nis: 1,
};
   var form = document.querySelector('.registerForm');
form.addEventListener('submit', exchange);      

function exchange(event) {
  event.preventDefault();
 var amount = document.querySelector('input[name="amount"]').value;
  var exchange = document.querySelector('select[name="exchange"]').value;
  console.log(exchange);
  console.log(amount);
  console.log(currency[exchange]);

var convert = amount * currency[exchange];
document.querySelector('.result').textContent = convert + exchange;
}