function flatMap(callback){
    let newArr = []
    this.forEach( x => {
        newArr.push(...callback(x))
    })
    return newArr
}

Array.prototype.flatMap = flatMap;

require('./duplicateFlatMap.js');
