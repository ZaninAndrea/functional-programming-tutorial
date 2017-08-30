function flatMap(callback) {
    let newArr = []
    // the flatMap function builds the new arr by
    // iterating through the original array and
    // concatenating the result of applying
    // the callback function on every item
    this.forEach(x => {
        newArr = newArr.concat(callback(x))
    })
    return newArr
}

Array.prototype.flatMap = flatMap; // we add flatMap as a function available to the array prototype

// example
const duplicate = x => [x,x]
const arr = [1,2,3,4]
console.log(arr.flatMap(duplicate));
