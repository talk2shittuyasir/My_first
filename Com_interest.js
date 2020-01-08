// compound interest + principal

let principal = 5000;
let interest_rate = 0.04;
let time_duration = 6;
let num_of_periods = 4;
let accured_amount = principal * (1 + interest_rate / num_of_periods) ** (num_of_periods * time_duration);
console.log("your Compuound interest is:  " + accured_amount);

// interest rate

let interestRate = accured_amount - principal;
console.log("Interest Rate is : " + interestRate);