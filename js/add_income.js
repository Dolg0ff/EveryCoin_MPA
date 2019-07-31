const _addIncome = document.querySelector('.addIncome');
_addIncome.addEventListener('click', addIncome);

function addIncome(event) {
  event.preventDefault();
  const formIncome = document.getElementById('formIncome');
  arrayIncome.push({
    name: formIncome.name.value,
    count: formIncome.count.value,
  }); 
  renderIncomeTable();
  formIncome.reset();
}
let arrayIncome = [
  {
    name: 'Зарплата',
    count: 100000,
  },
  {
    name: 'Инвестиции',
    count: 20000,
  },
]

function renderIncomeTable(){
  let html = '';
  for(let i = 0; i<arrayIncome.length; i++){
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

    

    



