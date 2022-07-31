/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

let numberOfPeople = Number(numberOfPeopleDiv.innerText);
let messageDiv = document.getElementById('message');

const calculateBill = () => {
  
  // Convert the imputs of bill and tip to interger/number
  const bill = Number(billInput.value);
  const tip = Number(tipInput.value);

  // Calculate the tip percentage, total bill and per person total bill
  const tipPercentage = (bill*tip) / 100;
  const total = bill+tipPercentage;
  const perPersonTotal = total/numberOfPeople;

  // Update the per person total on DOM & show it to user
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;

}

const increasePeople = () => {

  messageDiv.innerText = "";
  numberOfPeople+=1;
  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
}

const decreasePeople = () => {

  if(numberOfPeople<=1) {
    messageDiv.innerText = "Number of people cannot be smaller than 1";
    return messageDiv
  }
  numberOfPeople-=1;
  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
  
}