const _addOutcome = document.querySelector('.addOutcome');
_addOutcome.addEventListener('click', addOutcome);

function addOutcome(event) {
  event.preventDefault();
  const formOutcome = document.getElementById('formOutcome');
  arrayOutcome.push({
    name: formOutcome.name.value,
    count: formOutcome.count.value,
  });
  let serialArrayOucome = JSON.stringify(arrayOutcome);
  localStorage.setItem('outcomeKey', serialArrayOucome);
  renderOutcomeTable();
  formOutcome.reset();
}
const arrayOutcome = JSON.parse(localStorage.getItem('outcomeKey'));

function renderOutcomeTable() {
  renderTable(arrayOutcome, outcomeTable);
}