let firstPerson = document.getElementById("name1")
let displayName = document.getElementById("nameOut")
let firstPerson2 = document.getElementById("name2")
let displayName2 = document.getElementById("nameOut2")
let outputDisplay1 = document.getElementById("display1")
let outputDisplay2 = document.getElementById("display2")
let preArranged = document.getElementById("preNumber")
let result1 = document.getElementById("results")
let firstButton = document.getElementById("play1")
let secondButton = document.getElementById("play2")
let restart2 = document.getElementById("restart")


firstButton.disabled = true
secondButton.disabled = true

const restart3 = ()=> {
    preArranged.value=""
    document.getElementById("mainDiv").style.display = "none"
}

function scream() {

    if (preArranged.value != "") {
        firstButton.disabled = false
        secondButton.disabled = false
        document.getElementById("mainDiv").style.display = "flex"
    } else {
        document.getElementById("mainDiv").style.display = "none"
    }

}

function nameDisplay() {
    displayName.innerHTML = firstPerson.value
}

function nameDisplay2() {
    displayName2.innerHTML = firstPerson2.value
}


function playBtn(params) {
    let randomNo = genRand()
    outputDisplay1.innerHTML = randomNo
        // if (firstPerson.value = "") {
        //     firstButton.disabled = true
        // }
    if (randomNo == Number(preArranged.value)) {
        result1.innerHTML = `<h3>Congratulations! ${firstPerson.value}. You won </h3>`
        firstButton.disabled = true;
        return
    }

    if (firstButton.onclick) {
        firstButton.disabled = true;
        secondButton.disabled = false;
    }
    if (firstPerson.value == "") {
        firstButton.disabled = true
    }
}

function playBtn2(params) {

    let randomNo = genRand()
    outputDisplay2.innerHTML = randomNo
    if (randomNo == Number(preArranged.value)) {
        result1.innerHTML = `<h3>Congratulations! ${firstPerson2.value}. You won </h3>`
        secondButton.disabled = true;
        return
    }

    if (secondButton.onclick) {
        secondButton.disabled = true;
        firstButton.disabled = false;
    }
    if (firstPerson2.value == "") {
        secondButton.disabled = true
    }
}

function genRand() {
    return `${Math.floor(Math.random() * 10)}`;
}