class TypeAccounts{
	constructor(income, outcome){
		this.income = income;
		this.outcome = outcome;
	}
}

class TypeTransactions{
	constructor(income, outcome){
		this.income = income;
		this.outcome = outcome;
	}
}

class User{
	constructor(id, email, password){
		this.id = id;
		this.email = email;
		this.password = password;
	}
	
}

class Account{
	constructor(name, id, type, date, balance,userId){
		this.name = name;
		this.id = id;
		this.type = type;
		this.date = date;
		this.balance = balance;
		this.userId = userId;
	}
	
}

class Transaction{
	constructor(fromAccountName, fromAccountId, toAccountName, 
		toAccountId, id, accountId, type, count, date, comment){
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




