// STATISTICS BINDINGS
let wins = 0;
let losses = 0;
let leave = false;
let switches = 0;
let switchWin = 0;
let switchLoss = 0;
let stays = 0;
let stayWin = 0;
let stayLoss = 0;
let oneWin = 0;
let twoWin = 0;
let threeWin = 0;

// FIXED VERSION OF THE RANDOM FUNCTION
function ranFix() {
    let randNum = Math.round(3000*Math.random());
    if (randNum < 1000) return 0;
    else if (randNum < 2000) return 1;
    else return 2;
}

// ATTEMPT AT A VERSION OF THE RANDOM FUNCTION THAT ALLOWS YOU TO ALTER THE SPECIFICITY AND THE RANGE OF OUTPUTS
function ranFixTwo(randVal = 5000, randRange = 2) {
    let randNum = Math.round(randVal*Math.round());
    let ranges;
    for (let i = 0; i < randRange; i++) {
        // TBC
    }
}

// STATISTICS FOR VERIFICATION OF THE THEORY
function statistics(door, secDoor, isWinner, doors) {
    let isSwitch = false;
    if (door != secDoor) {
        isSwitch = true;
        switches++;
    }
    else stays++;

    if (isSwitch == true && isWinner == true) switchWin++;
    else if (isSwitch == true) switchLoss++;
    else if (isWinner == true) stayWin++;
    else stayLoss++;

    for (let i = 0; i < 3; i ++) {
        if (doors[i] == "car" && i == 0) oneWin++;
        if (doors[i] == "car" && i == 1) twoWin++;
        if (doors[i] == "car" && i == 2) threeWin++;
    }
}

// PRESENTATION OF STATISTICS FOR VERIFICATION OF THE THEORY
function finalStats() {
    console.log(`Switches: ${switches}`);
    console.log(`Switch Wins: ${switchWin}`);
    console.log(`Switch Losses: ${switchLoss}\n\n`);
    console.log(`Stays: ${stays}`)
    console.log(`Stay Wins: ${stayWin}`);
    console.log(`Stay Losses: ${stayLoss}\n\n`);
    console.log(`One Wins: ${oneWin}`);
    console.log(`Two Wins: ${twoWin}`);
    console.log(`Three Wins: ${threeWin}\n\n`);

    console.log(`Number of wins: ${wins}.`)
    console.log(`Number of losses: ${losses}.`)
    console.log(`Win percentage: ${Math.round(wins/goes * 100)}%.\n`)
    console.log(`Switch Win Percentage: ${Math.round(switchWin/(switchWin+switchLoss)*100)}%`)
    console.log(`Stay Win Percentage: ${Math.round(stayWin/(stayWin+stayLoss)*100)}%`)
}

// THEORY FUNCTION CODE
function montyHall(door) {
    console.log(`You picked door number ${door + 1}.`)
    let doors = [null, null, null]
    
    doors[ranFix()] = "car"
    let full = false;
    while (full == false) {
        let countEmpty = 0;
        for (let i = 0; i < 3; i++) {
            if (doors[i] == null) countEmpty++;
        }
        if (countEmpty == 0) full = true;

        let j = ranFix();
        if (doors[j] == null) doors[j] = "goat";
    }
    // console.log(doors)

    let secDoor = 25;
    let shown = false;
    while (shown == false) {
        let k = ranFix();
        if (doors[k] != "car" && k != door) {
            console.log(`Door number ${k + 1} is a goat.`)
            do {
                // CHOICE BETWEEN MANUAL CONTROLS AND AUTO (MIGHT EDIT THIS INTO IT'S OWN FUNCTION LATER)
                // if (k == 0) secDoor = Number(prompt("Pick door 2 or 3")) - 1;
                if (k == 0) secDoor = ranFix();
                // if (k == 1) secDoor = Number(prompt("Pick door 1 or 3")) - 1;
                if (k == 1) secDoor = ranFix();
                // if (k == 2) secDoor = Number(prompt("Pick door 1 or 2")) - 1;
                if (k == 2) secDoor = ranFix();
                if (secDoor == 24) return leave = true;
            }
            while (secDoor == k);
            shown = true;
        }
    }

    // WINNER/LOSER FEEDBACK
    let isWinner = false;
    if (doors[secDoor] == "car") {
        console.log("you won!")
        isWinner = true;
        wins++
        console.log(`${wins} wins.    ${losses} losses.`)
    }
    if (doors[secDoor] == "goat") {
        console.log("you lost.")
        losses++
        console.log(`${wins} wins.    ${losses} losses.`)
    }
    statistics(door, secDoor, isWinner, doors);
}

// THEORY FUNCTION CALL
let count = 0;
let goes = 1000;
while (count < goes && leave == false) {
    count++;
    // montyHall(Number(prompt("Pick door 1, 2, or 3")) - 1);
    montyHall(ranFix())
    if (leave == true) console.log("You left the Program.")
}



// RANDOM NUMBER GENERATOR VIABILITY TESTING
let oneCount = 0;
let twoCount = 0;
let threeCount = 0;
for (let i = 0; i < 10000; i++) {
    let num = Math.round(3000*Math.random());
    if (num < 1000) oneCount++;
    else if (num < 2000) twoCount++;
    else threeCount++;
}

console.log(oneCount)
console.log(twoCount)
console.log(threeCount)

finalStats()
