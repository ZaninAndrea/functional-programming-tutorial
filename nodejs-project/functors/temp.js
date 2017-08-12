const newGambler = type =>{
    let gambler = {}
    gambler.flatMap = callback => gambler.type === "Playing" ? callback(gambler.money) : newGambler("Bankrupt")

    if (type === "Bankrupt") {
        gambler.type = "Bankrupt"
        return gambler
    } else {
        return money => {
            gambler.type = "Playing"
            gambler.money = money
            return gambler
        }
    }
}

const transaction = amount => gamblersMoney => gamblersMoney + amount > 0 ? newGambler("Playing")(gamblersMoney + amount) : newGambler("Bankrupt")
