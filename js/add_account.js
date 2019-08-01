const _addAccount = document.querySelector('.addAccount');
_addAccount.addEventListener('click', addAccount);

function addAccount(event) {
  event.preventDefault();
  const formAccount = document.getElementById('formAccount');
  arrayAccount.push({
    name: formAccount.name.value,
    count: formAccount.count.value,
  });
  let serialArrayAccount = JSON.stringify(arrayAccount);
  localStorage.setItem('accountKey', serialArrayAccount);
  renderAccountTable();
  formAccount.reset();
}
const arrayAccount = JSON.parse(localStorage.getItem('accountKey'));

function renderAccountTable(){
  renderTable(arrayAccount, accountTable);
}