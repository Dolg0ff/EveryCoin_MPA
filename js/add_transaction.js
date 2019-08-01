const _addTransaction = document.querySelector('.addTransaction');
_addTransaction.addEventListener('click', addTransaction);

function addTransaction(event) {
  event.preventDefault();
  const formTransaction = document.getElementById('formTransaction');
  arrayTransaction.push({
    fromAccountName: formTransaction.from.value,
    toAccountName: formTransaction.to.value,
    count: formTransaction.count.value,
    comment: formTransaction.comment.value,
  });
  let serialArrayTransaction = JSON.stringify(arrayTransaction);
  localStorage.setItem('transactionKey', serialArrayTransaction);
  renderTransactionsTable();
  formTransaction.reset();
}
const arrayTransaction = JSON.parse(localStorage.getItem('transactionKey'));

function renderTransactionsTable() {
  let html = '';
  for (let i = 0, max = arrayTransaction.length; i < max; i++) {
    const row = arrayTransaction[i];
    html += `
  <tr>
    <td>${row.fromAccountName}</td>
    <td>${row.toAccountName}</td>
    <td>${row.count}</td>
    <td>${row.comment}</td>
  </tr>
  `;
  }
  transactionsTable.innerHTML = html;
}