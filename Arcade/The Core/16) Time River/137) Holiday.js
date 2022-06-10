/*
John Doe likes holidays very much, and he was very happy to hear that his country’s government decided to introduce yet another one. He heard that the new holiday will be celebrated each year on the xth week of month, on weekDay.

Your task is to return the day of month on which the holiday will be celebrated in the year yearNumber.

For your convenience, here are the lists of months names and lengths and the list of days of the week names.

Months: "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December".
Months lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
Days of the week: "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday".
Please, note that in leap years February has 29 days.

Note (leap years): Year is leap if its number is divisible by 4 and isn’t divisible by 100 or if its number is divisible by 400.

Example

For x = 3, weekDay = "Wednesday", month = "November", and yearNumber = 2016, the output should be holiday(x, weekDay, month, yearNumber) = 16.

The new holiday will be celebrated every November on the 3rd Wednesday of the month. In 2016 the 3rd Wednesday falls on the 16th of November.

For x = 5, weekDay = "Thursday", month = "November", and yearNumber = 2016, the output should be holiday(x, weekDay, month, yearNumber) = -1.

There are only 4 Thursdays in November 2016.

Input/Output

[execution time limit] 4 seconds (js)
[input] integer x

A positive integer.

Guaranteed constraints:
1 ≤ x ≤ 5.

[input] string weekDay

A string representing a correct name of some day of the week.

Guaranteed constraints:
weekDay ∈ {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"}.

[input] string month

A string representing a correct name of some month.

Guaranteed constraints:
month ∈ {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"}.

[input] integer yearNumber

Guaranteed constraints:
2015 ≤ yearNumber ≤ 2500.

[output] integer

The day of month on which the holiday will be celebrated in the year yearNumber. If there is no answer, return -1.
[JavaScript (ES6)] Syntax Tips

1
2
3
4
5
6
// Prints help message to the console
// Returns a string
function helloWorld(name) {
console.log("This prints to the console when you Run Tests");
return "Hello, " + name;
}
*/

function solution(x, weekDay, month, yearNumber) {
let date = new Date();
  date.setTime(Date.parse(month + "-01-" + yearNumber));
  let initMonth = date.getMonth();
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = 0;
  while (x > 0) {
    if (daysOfWeek[date.getDay()] === weekDay) {
      x--;
      if (date.getMonth() !== initMonth) {
        return -1;
      }
    }
    date.setDate(date.getDate() + 1);
    day++;
  }
  return day;
}
