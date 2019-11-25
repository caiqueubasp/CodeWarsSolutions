// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS and Java), "$" (C#, C++, Ruby, Clojure, Elixir, PHP and Python, Haskell, Lua) or "¥" (Rust).

var salary = 7000;
var bonus = true // or false

function bonusTime(salary, bonus) {
    var libre = '£';
    if(bonus === true){
     salary = salary * 10
    }else{
     salary = salary
    }
    var strSalary = salary.toString().split('').join('');
    return libre + strSalary;
    
    }