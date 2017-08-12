const initialMoney = 1000
const transactions = [500,-2000,+1000]

const final = transactions.reduce( (x,y) => x+y , initialMoney)
console.log(final)

// Summing we ignore the third state in which he is bankrupt
// $1000 --> $1500 --> $-500 --> $500
