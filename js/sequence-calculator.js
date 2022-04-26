// let sequence = "5n^2+2n+1"
let sequence = prompt("Enter a sequence please.").replace(/\s+/g, '');
let start;
do {
    start = Number(prompt("Enter a starting term."))
    // start = 1;
}
while (Number.isNaN(start))

let end;
do {
    end = Number(prompt("Enter a final term."))
    // end = 100;
}
while (Number.isNaN(end))


function nExp(subSection, n) {
    if (subSection.length == 1) {
        return n;
    }
    return n ** Number(subSection.slice(2))
}

function calcSection(section, n, isPositive) {
    for (let i = 0; i < section.length; i++) {
        if (section.slice(i, i+1) == "n") {
            if (isPositive == true) {
                return Number(section.slice(0, i)) * nExp(section.slice(i), n)
            }
            return -Number(section.slice(0, i)) * nExp(section.slice(i), n)
        }
    }
    if (isPositive == true) {
        return Number(section);
    }
    return -Number(section)
}

function calcTerm(sequence, n) {
    let term = 0;
    let tracker = 0;
    let isPositive = true;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence.slice(i,i+1) == "+") {
            term += calcSection(sequence.slice(tracker, i), n, isPositive);
            isPositive = true;
            tracker = i + 1;
        }
        else if (sequence.slice(i, i+1) == "-") {
            term += calcSection(sequence.slice(tracker, i), n, isPositive);
            isPositive = false;
            tracker = i + 1;
        }
        else if (i == sequence.length - 1) {
            term += calcSection(sequence.slice(tracker, i + 1), n, isPositive);
        }
    }
    return term;
}

function compileSeries(series, isFirst, term) {
    if (isFirst == true) {
        series += String(term) + " ";
    }
    else {
        series += "+ " + String(term) + " "
    }
    return series;
}

function findTerms(sequence, seqStart = 0, seqEnd = 100) {
    // alternatively, I can set something up that takes the first term, works it out using the value for n, then moves on to the next one until there is no + or - left afterwards (which implies that it is the last term)
    console.log(`Your Sequence: ${sequence}`)
    let sumOfTerms = {val: 0};
    let series = "";
    let isFirst = true;
    for (; seqStart <= seqEnd; seqStart++) {
        let term = calcTerm(sequence, seqStart);
        // console.log(term)
        sumOfTerms.val += term;
        series = compileSeries(series, isFirst, term)
        isFirst = false;
    }
    
    document.write(`Sum = ${sumOfTerms.val}`)
    console.log(series)
    console.log(`Sum = ${sumOfTerms.val}`)
}

findTerms(sequence, start , end)
// findTerms(sequence, 90, 100);