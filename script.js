const depositeDiv = document.getElementById('deposite')
const withdrawDiv = document.getElementById('withdraw')
const inputDiv = document.getElementById('input')
const showBalanceDiv = document.getElementById('showBalance')


class Bank {
  constructor() {
    this.balance = 0;

  }
  deposite(balance) {
    this.balance+=balance
    showBalanceDiv.innerHTML = `<p>Balance: $${this.balance}</p>`
  }
  withdraw(withdrawl) {
    if(withdrawl>this.balance) {
      showBalanceDiv.innerHTML = `<p>Sorry you dont have much balance</p>`
    }
    else {
      const reduce = this.balance-=withdrawl
      showBalanceDiv.innerHTML = `<p>Balance: $${reduce}</p>`
    }
  }
  
}
const bank = new Bank()
console.log("Your balance is $"+bank.balance)

depositeDiv.onclick = () => bank.deposite(Number(inputDiv.value))
withdrawDiv.onclick = () => bank.withdraw(Number(inputDiv.value))