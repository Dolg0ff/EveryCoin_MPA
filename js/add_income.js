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

    function AddIncome() {
    let account = new Account();
    let addName = document.getElementById('name').value;
    let addCount = document.getElementById('count').value; 
    account.addIncomeAcc = addName+' '+addCount;

    console.log(account);
}

    



