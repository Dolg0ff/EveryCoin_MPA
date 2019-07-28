const addTransaction = document.querySelector('.addTransaction');
addTransaction.addEventListener('click', AddTransaction);

function AddTransaction(event) {
	event.preventDefault();
	const formTransaction = document.getElementById('formTransaction');
	array.push({
		fromAccountName: formTransaction.from.value,
		toAccountName: formTransaction.to.value,
		count: formTransaction.count.value,
		comment: formTransaction.comment.value,
	});
	console.log(array);
	renderTransactionsTable();
}

let array = [
	{
		fromAccountName: 'Кошелек',
		toAccountName: 'Транспорт',
		count: 1000,
		comment: 'Июнь',
	},

	{
		fromAccountName: 'Кошелек',
		toAccountName: 'Транспорт',
		count: 1000,
		comment: 'Июнь',
	},

	{
		fromAccountName: 'Кошелек',
		toAccountName: 'Транспорт',
		count: 1000,
		comment: 'Июнь',
	},
]

function renderTransactionsTable(){

    let html = '';

    for(let i = 0; i<array.length; i++){
    	const row = array[i];
    	html +=  `
	<tr>
        <td>${row.fromAccountName}</td>
        <td>${row.toAccountName}</td>
        <td>${row.count}</td>
        <td>${row.comment}</td>
        <td>Total</td>
    </tr>
    `;

    }
    transactionsTable.innerHTML = html;
}