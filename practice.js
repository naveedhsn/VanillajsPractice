//selecting Odd
function selectODD() {
    var selectO = document.querySelectorAll(".toggle")
    for (var j = 0; j <= selectO.length; j++) {
        if (j % 2 != 0)
            selectO[j - 1].click()
    }
}


//selecting Even
function selectEVEN() {
    var selectE = document.querySelectorAll(".toggle")
    for (var i = 0; i <= selectE.length; i++) {
        if (i % 2 == 0)
            selectE[i + 1].click()
    }
}

//select in a range
function selectRange() {
    const start = prompt("Starting point")
    const end = prompt("Ending point")
    var selectR = document.querySelectorAll(".toggle")
    for (var r = start; r <= end; r++) {
        selectR[r - 1].click()
    }
}

//select one element
function selectOne() {
    const sel = prompt("Write a number to select")
    var selectR = document.querySelectorAll(".toggle")
    for (var oe = sel; oe <= sel; oe++) {
        selectR[oe - 1].click()
    }
}

//selecting All
function selAll() {
    document.querySelector("label").click()
}

//Create List
function AddList() {
    const input = prompt("How many iterations you want?")
    const inputtext = prompt("Write down todo name here")
    for (let i = 1; i <= input; i++) {
        task(i);
    }
    function task(i) {
        setTimeout(function() {
            document.querySelector("input.new-todo").click()
            document.querySelector("input.new-todo").value = (inputtext) + i
            document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
                'bubbles': true
            }))
        }, 1000 * i);
    }
}

//Remove all selected items
function selectClear() {
    document.querySelector("footer button").click()
}
