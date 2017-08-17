const numbers = [12,324,213,4,2,3,45,4234];
const isEven = (x) => x % 2 === 0
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);
