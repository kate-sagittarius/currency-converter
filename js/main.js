  let chosenCurrency;
  let currencyName;


  document.querySelectorAll('.currency__radio').forEach(function(el) {
    el.addEventListener('click', function() {
       chosenCurrency = this.value;
       currencyName = this.getAttribute('data-text');
    })
  })




document.getElementById('convert-button').onclick = function() {
  let uahAmount = document.getElementById('amount').value;
  let result = uahAmount * chosenCurrency;

  document.getElementById('convertation-result').innerHTML = result.toFixed(2) + ' ' + currencyName;
}
