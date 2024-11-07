class BankAccount {
    #balance;
  
    constructor(balance = 0) {
      this.#balance = balance;
    }
  
    deposit(amount) {
      this.#balance += amount;
    }
  
    withdraw(amount) {
      if (amount <= this.#balance) {
        this.#balance -= amount;
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }

let account = new BankAccount(1000);
account.deposit(500);
account.withdraw(300);
let balance=account.getBalance();
console.log("Balance:"+balance); 