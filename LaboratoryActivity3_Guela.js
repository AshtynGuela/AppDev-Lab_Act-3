//School ID is 2024-01-05836
let base_number = 6;

function calculateGrade(score) {
   
   score *= 10;
   score += 5;

    if (score > 100) {
        console.log("INVALID GRADE.");
    } else if (score >= 90 && score <=100 ) {
        return 'A';
    } else if (score >= 80 && score < 90) {
        return 'B';
    } else if (score >= 70 && score < 80) {
        return 'C';
    } else if (score >= 60 && score < 70) {
        return 'D'; 
    } else {
        return 'F';
    }
}
 
function showStars(rows) {
    console.log("#2: ")
    for (let i = 1; i <= rows; i++) {
        const spaces = ' '.repeat(rows - i);
        const stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars + spaces);
    }
} 


function isPrime(number) {
  for (let factor = 2; factor < number; factor++) 
    if (number % factor === 0) 
      return 'Not Prime'; 

  return 'Prime'; 
}

function multiplicationTable(number) {
for (let i = 0; i <= 10; i++)
console.log(`${i * number}`);
}


console.log(`\n\n||Base Number value is ${base_number}|| ||Student ID is 2024-01-05836||\n`);
console.log(`#1: The grade calculated is ${calculateGrade(base_number)}\n`);
showStars(base_number);
process.stdout.write("\n#3: "+ isPrime(base_number)); 
console.log(`\n\n#4: Multiplication Table of ${base_number}:`);
multiplicationTable(base_number);