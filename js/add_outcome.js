const addOutcome = document.querySelector('.addOutcome');
addOutcome.addEventListener('click', AddOutcome);

function AddOutcome(event) {
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

    for(let i = 0; i<arrayOutcome.length; i++){
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