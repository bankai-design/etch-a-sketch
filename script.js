const numOfSquares = document.getElementById("squares")
numOfSquares.addEventListener("click", createGrid)

const gridContainer = document.getElementById("gridContainer")

function createGrid() {
    const userInput = prompt("Enter number of squares per side")

    gridContainer.style.height = `${userInput * userInput}px`
    gridContainer.style.width =`${userInput * userInput}px`

    for (let counter = 0; counter < (userInput * userInput); counter++) {
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

const resetGrid = document.getElementById("removeSquares")
resetGrid.addEventListener("click", removeGrid)

function removeGrid() {
    gridContainer.removeChild(grid)
}


