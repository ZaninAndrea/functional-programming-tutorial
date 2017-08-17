const newGambler = type =>{
    let gambler = {}
    gambler.flatMap = callback =>
                        gambler.type === "Playing" ? // is the gambler still playing?
                        callback(gambler.money) : // if yes apply the transaction
                        newGambler("Bankrupt") // otherwise return a bankrupt gambler

    if (type === "Bankrupt") { // if we initialize a bankrupt gambler we don't need other parameters
        gambler.type = "Bankrupt"
        return gambler
    } else { // if we initialize a playing gambler we need to know how much money he has so we return another function
        return money => {
            gambler.type = "Playing"
            gambler.money = money
            return gambler
        }
    }
}

const transaction = amount => // a transaction function getting the transaction and returning a new gambler
                        gamblersMoney =>
                            gamblersMoney + amount > 0 ? // does the gambler still have money after the transaction?
                            newGambler("Playing")(gamblersMoney + amount) : // if so return a new gambler with the new money
                            newGambler("Bankrupt") // otherwise return a bankrupt gambler

let gambler = newGambler("Playing")(1000) // create a new Gambler with $1000
gambler = gambler.flatMap(transaction(500)).flatMap(transaction(-2000)).flatMap(transaction(1000)) // applies all the transactions

console.log(gambler) // returns correctly a bankrupt gambler
