const _addOutcome = document.querySelector('.addOutcome');
_addOutcome.addEventListener('click', addOutcome);

function addOutcome() {
  add(event, 'formOutcome', 'outcomeKey', arrayOutcome, outcomeTable);
}
const arrayOutcome = JSON.parse(localStorage.getItem('outcomeKey'));