const isEven = (x) => {
  return x % 2 === 0;
}

const numbers = [12,324,213,4,2,3,45,4234];
const callback = (acc, x) => {
    if (isEven(x)){
        acc.push(x)
    }

    return acc
}
const evenNumbers = numbers.reduce(callback, []);
console.log(evenNumbers);
