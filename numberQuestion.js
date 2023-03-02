/**
 * Create a program to print the following pattern
 * 1
 * 23
 * 456
 * 78910
 * 
 * My Program works by using to loops.
 * Loop one controls the number of lines and the number of numbers (not digits) to print per line
 * Loop Two controls each number and will iterate adding one to from the pervious number
 * 
 * The numberToPrint will increase by one on each iteration of the loops
 */


let numberToPrint = 1;
for (let i = 1; i <= 4 ; i++ ) {
    let printline = '';
  for (let j = 0; j < i; j++) {
    printline += (numberToPrint).toString();
    numberToPrint++;
   }
   console.log(printline);
}