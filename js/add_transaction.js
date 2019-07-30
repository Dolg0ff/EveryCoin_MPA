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
  console.log(arrayTransaction);
  renderTransactionsTable();
  formTransaction.reset(); 
}
let arrayTransaction = [
  {
      fromAccountName: 'Кошелек',
      toAccountName: 'Транспорт',
      count: 1000,
      comment: 'Июнь',
  },
  {
      fromAccountName: 'Кошелек',
      toAccountName: 'Коммунальные услуги',
      count: 5000,
      comment: 'Июнь',
  },
]
function renderTransactionsTable(){
  let html = '';
  for (let i = 0, max = arrayTransaction.length; i < max; i++){
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