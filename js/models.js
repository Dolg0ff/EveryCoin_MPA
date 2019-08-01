class TypeAccounts {
  constructor(income, outcome) {
    this.income = income;
    this.outcome = outcome;
  }
}

class TypeTransactions {
  constructor(income, outcome) {
    this.income = income;
    this.outcome = outcome;
  }
}

class User {
  constructor(id, email, password) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
}

class Account {
  constructor(name, id, type, date, balance,userId) {
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
    [this.name, this.balance] = newValue.split('');
  }
}

function AddIncome() {
  let account = new Account();
  let addName = document.getElementById('name').value;
  let addCount = document.getElementById('count').value;
  account.addIncomeAcc = addName+' '+addCount;
  console.log(account);
}

class Transaction {
  constructor(fromAccountName, fromAccountId, toAccountName,
    toAccountId, id, accountId, type, count, date, comment) {
    this.fromAccountName = fromAccountName;
    this.fromAccountId = fromAccountId;
    this.toAccountName = toAccountName;
    this.toAccountId = toAccountId;
    this.id = id;
    this.accountId = accountId;
    this.type = type;
    this.count = count;
    this.date = date;
    this.comment = comment;
  }
}




