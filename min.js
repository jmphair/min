const min = function(numbers) {
  // Write code here that returns the smallest value in numbers
  // Made a variable that represented the first value of the array
  let result = numbers[0];
  // Create a for loop that will iterate through the array
  let i = 0;
  for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    // Use an if statement to find the numbers that are smaller than the result
    if (result >= numbers[i]) {
      // If a smaller number is found then replace with the current result
      result = numbers[i];
    }
  }
  console.log("result is:", result);
  return result;
};


/*
 * This is some test runner code that's simply calling our min function defined
 * above to verify it's returning the proper minimum. Do not modify it!
 */

const flightPrices = [1260, 490, 599, 1400, 820];
console.log(`The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs \$${min(flightPrices)}`);

const golfScores = [-1, 3, 0, -4, 1, 4, -2];
console.log(`The winning golf score amongst -1, 3, 0, -4, 1, 4 and -2 is ${min(golfScores)}`);

const pageNumbers = [232];
console.log(`The shortest book out of a list of single book with 232 pages has ${min(pageNumbers)} pages`);

const temperatures = [45, 10, -20, 0, 3, -20];
console.log(`The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is ${min(temperatures)}C`);