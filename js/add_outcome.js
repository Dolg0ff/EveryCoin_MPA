const _addOutcome = document.querySelector('.addOutcome');
_addOutcome.addEventListener('click', addOutcome);
function addOutcome(event) {
  event.preventDefault();
  const formOutcome = document.getElementById('formOutcome');
  arrayOutcome.push({
    name: formOutcome.name.value,
    count: formOutcome.count.value,
  });
  console.log(arrayOutcome); 
  renderOutcomeTable();
  formOutcome.reset();
}
let arrayOutcome = [
  {
    name: 'Продукты',
    count: 2000,
  },
  {
    name: 'Транспорт',
    count: 3000,
  },
]
function renderOutcomeTable(){
  let html = '';
  for (let i = 0, max = arrayOutcome.length; i < max; i++){
    const row = arrayOutcome[i];
    html +=  `
  <tr>
    <td>${row.name}</td>
    <td>${row.count}</td>
  </tr>
  `;
  }
  outcomeTable.innerHTML = html;
}