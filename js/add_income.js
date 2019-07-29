const addIncome = document.querySelector('.addIncome');
addIncome.addEventListener('click', AddIncome);

class Account{
    constructor(name, id, type, date, balance,userId){
    this.name = "name";
    this.id = Math.random().toString(36).slice(2);
    this.type = "Income";
    this.date = new Date();
    this.balance = "count";
    this.userId = Math.random().toString(36).slice(2);
    }
    get addIncomeAcc() {
    return `${this.name} ${this.id} ${this.type} ${this.date} ${this.account} ${this.userId}`;
  }
    
    set addIncomeAcc(newValue) {
    [this.name, this.balance] = newValue.split(' ');
  }
}

function AddIncome(event) {
    event.preventDefault();
    const formIncome = document.getElementById('formIncome');
    arrayIncome.push({
        name: formIncome.name.value,
        count: formIncome.count.value,
    });
    console.log(arrayIncome);
    renderIncomeTable();
    formIncome.reset();
}

let arrayIncome = [
    {
        name: 'Кошелек',
        count: 10000,
    },

    {
        name: 'Банковский счет',
        count: 100000,
    },
]

function renderIncomeTable(){

    let html = '';

    for(let i = 0; i<arrayIncome.length; i++){
        const row = arrayIncome[i];
        html +=  `
    <tr>
        <td>${row.name}</td>
        <td>${row.count}</td>
    </tr>
    `;

    }
    incomeTable.innerHTML = html;
}

    //function AddIncome() {
    //let account = new Account();
    //let addName = document.getElementById('name').value;
    //let addCount = document.getElementById('count').value; 
    //account.addIncomeAcc = addName+' '+addCount;

    //console.log(account);
//}

    



