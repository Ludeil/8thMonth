const maze = [
[0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,0,1,1,1,1,0],
[0,1,0,1,0,1,0,0,1,0],
[0,1,0,1,1,1,1,0,1,0],
[0,1,0,0,0,0,1,0,1,0],
[0,1,1,1,1,0,1,0,1,0],
[0,0,0,0,1,0,1,0,1,0],
[0,1,1,1,1,1,1,0,1,0],
[0,1,0,0,0,0,1,1,1,0],
[0,0,0,0,0,0,0,0,0,0]
];

const mazeDiv = document.getElementById("maze");

let player = {
    row:1,
    col:1
};

const goal = {
    row:8,
    col:8
};

function drawMaze(){

    mazeDiv.innerHTML="";

    for(let r=0;r<maze.length;r++){

        for(let c=0;c<maze[r].length;c++){

            const cell=document.createElement("div");
            cell.classList.add("cell");

            if(maze[r][c]===0){
                cell.classList.add("wall");
            }else{
                cell.classList.add("path");
            }

            if(r===player.row && c===player.col){
                cell.textContent="❤️";
            }

            if(r===goal.row && c===goal.col){
                cell.textContent="💖";
            }

            mazeDiv.appendChild(cell);
        }
    }
}

function movePlayer(dr,dc){

    const newRow = player.row + dr;
    const newCol = player.col + dc;

    if(maze[newRow][newCol]===1){

        player.row = newRow;
        player.col = newCol;

        if(
            player.row===goal.row &&
            player.col===goal.col
        ){
            document
            .getElementById("message")
            .classList.remove("hidden");
        }

        drawMaze();
    }
}

document.addEventListener("keydown",(e)=>{

    switch(e.key){

        case "ArrowUp":
            movePlayer(-1,0);
            break;

        case "ArrowDown":
            movePlayer(1,0);
            break;

        case "ArrowLeft":
            movePlayer(0,-1);
            break;

        case "ArrowRight":
            movePlayer(0,1);
            break;
    }
});

drawMaze();