const _addTransaction = document.querySelector('.addTransaction');
_addTransaction.addEventListener('click', addTransaction);

function addTransaction() {
  add(event, 'formTransaction', 'transactionKey', arrayTransaction, transactionsTable);
}
const arrayTransaction = JSON.parse(localStorage.getItem('transactionKey'));