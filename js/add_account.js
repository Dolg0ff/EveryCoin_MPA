const _addAccount = document.querySelector('.addAccount');
_addAccount.addEventListener('click', addAccount);

function addAccount() {
  add(event, 'formAccount', 'accountKey', arrayAccount, accountTable);
}
const arrayAccount = JSON.parse(localStorage.getItem('accountKey'));