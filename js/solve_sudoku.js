function getSudokuInputs() {
    puzzleRows = Array.from(document.querySelectorAll("tr"));
    puzzleRows = puzzleRows.map(a => Array.from(a.children).map(b => b.firstChild.value));
    console.log(puzzleRows)

    return puzzleRows
}


document.querySelector("button").addEventListener("click", e => {
    arr = getSudokuInputs()
    console.log(arr);
    validateInputs(arr);
})

// validate sudoku inputs
function validateInputs(arr) {
    invalidInput = false
    values = []
    for (i = 0; i < 10; i++) {
        values.push("" + i)
    }
    whiteListValues = new Set(values)
    arr.forEach(row => row.map(col => {
        if(!whiteListValues.has(col)) invalidInput = true;

        return col
    }))

    if(invalidInput) alert("Input is invalid - only enter numbers between 0 and 9");

    return invalidInput
}