const numOfSquares = document.getElementById("squares")
numOfSquares.addEventListener("click", createGrid)

const gridContainer = document.getElementById("gridContainer")


function createGrid() {     // only called when button clicked
    gridContainer.innerHTML = ""

    let isValid = true
    while (isValid) {
        var userInput = prompt("Enter number of squares per side")
        if (userInput > 100) {
            alert("Must be less than 100!")
        } else {
            isValid = false
        } 
    }

    gridContainer.style.height = `${userInput * userInput}px`
    gridContainer.style.width =`${userInput * userInput}px`

    for (let counter = 0; counter < (userInput * userInput); counter++) {       // where grid is being created
        const grid = document.createElement("div")

        grid.style.height = `${userInput}px`
        grid.style.width = `${userInput}px`
        grid.style.outline = "2px solid black"
        grid.style.backgroundColor = "pink"

        colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray"]
        function changeColor() {
            const randomColor = colors[Math.floor(Math.random() * colors.length)]
            grid.style.backgroundColor = randomColor
        }

        gridContainer.appendChild(grid)
        grid.addEventListener("pointerenter", changeColor)    
        
    }
}

