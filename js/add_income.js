const _addIncome = document.querySelector('.addIncome');
_addIncome.addEventListener('click', addIncome);

function addIncome() {
  add(event, 'formIncome', 'IncomeKey', arrayIncome, incomeTable);
}
const arrayIncome = JSON.parse(localStorage.getItem('incomeKey'));