const _addIncome = document.querySelector('.addIncome');
_addIncome.addEventListener('click', addIncome);

function addIncome(event) {
  event.preventDefault();
  const formIncome = document.getElementById('formIncome');
  arrayIncome.push({
    name: formIncome.name.value,
    count: formIncome.count.value,
  });
  let serialArrayIncome = JSON.stringify(arrayIncome);
  localStorage.setItem('incomeKey', serialArrayIncome);
  renderIncomeTable();
  formIncome.reset();
}
const arrayIncome = JSON.parse(localStorage.getItem('incomeKey'));

function renderIncomeTable() {
  let html = '';
  for (let i = 0, max = arrayIncome.length; i < max; i++) {
    const row = arrayIncome[i];
    html += `
  <tr>
    <td>${row.name}</td>
    <td>${row.count}</td>
  </tr>
  `;
  }
  incomeTable.innerHTML = html;
}







