const _addAccount = document.querySelector('.addAccount');
_addAccount.addEventListener('click', addAccount);
function addAccount(event) {
  event.preventDefault();
  const formAccount = document.getElementById('formAccount');
  arrayAccount.push({
    name: formAccount.name.value,
    count: formAccount.count.value,
  });
  console.log(arrayAccount);
  renderAccountTable(); 
  formAccount.reset();
}
let arrayAccount = [
  {
    name: 'Кошелек',
    count: 10000,
  },
  {
    name: 'Банковский счет',
    count: 100000,
  },
]
function renderAccountTable(){
  let html = '';
  for (let i = 0, max = arrayAccount.length; i < max; i++){
    const row = arrayAccount[i];
    html += `
  <tr>
    <td>${row.name}</td>
    <td>${row.count}</td>
  </tr>
  `;
  }
  accountTable.innerHTML = html;
}