function moneyBox(owner){
    let saveCoins = 0;

    function addCoins(coins){
        saveCoins += coins;
        console.log(`${owner}'s money box: $${saveCoins}`);
    }
    function substracCoins(coins){
        saveCoins -= coins
        console.log(`${owner}'s money box: $${saveCoins}`);
    }
    return {
        addCoins,
        substracCoins,
    }
}

const mySavings = moneyBox('Santiago');

mySavings.addCoins(5);
mySavings.addCoins(5);
mySavings.substracCoins(5);

const JudasSavings = moneyBox('Judas');

JudasSavings.addCoins(20);
JudasSavings.addCoins(12);
JudasSavings.substracCoins(7);