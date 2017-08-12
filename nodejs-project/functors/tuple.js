const newTuple = (a,b) => {
    let tuple = {a: a, b: b}
    tuple.map = callback => newTuple(callback(tuple.a),callback(tuple.b))
    return tuple
}

const tuple = newTuple(4,3)
const tupleIdentity = tuple.map( x => x )
console.log("IDENTITY\n", JSON.stringify(tuple), "\n", JSON.stringify(tupleIdentity), "\n")

const double = x => x*2
const increase = x => x+1
const tupleComposedFunctions = tuple.map( x => double(increase(x)) )
const tupleChainedMaps = tuple.map(increase).map(double)
console.log("Composition === Chaining\n", JSON.stringify(tupleComposedFunctions), "\n", JSON.stringify(tupleChainedMaps))
