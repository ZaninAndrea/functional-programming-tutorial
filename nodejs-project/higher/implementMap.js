function map(arr, callback){
  return arr.reduce((acc, x) => {
    acc.push(callback(x));
    return acc;
}, []);
}

// squaring example
const squares = map([1,2,3,4,5], (x) => Math.pow(x,2) );
console.log(squares);
