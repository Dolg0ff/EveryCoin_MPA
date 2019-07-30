const _addAccount = document.querySelector('.addAccount');
_addAccount.addEventListener('click', addAccount);
function addAccount(event) {
  event.preventDefault();
  const formAccount = document.getElementById('formAccount');
  arrayAccount.push({
    name: formAccount.name.value,
    count: formAccount.count.value,
  });
  var serialArrayAccount = JSON.stringify(arrayAccount);
  localStorage.setItem("accountKey", serialArrayAccount);
  var returnArrayAccount = JSON.parse(localStorage.getItem("accountKey"));
  renderAccountTable(); 
  formAccount.reset();
}
let arrayAccount = []
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