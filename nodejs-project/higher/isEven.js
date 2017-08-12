function isEven(x){
  return x % 2 === 0;
}

const numbers = [12,324,213,4,2,3,45,4234];
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);
