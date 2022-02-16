

function Board(x, y) {
    this.x = x;
    this.y = y;
    this.value = function () {
        let top = x * DEFAULT_CELL_SIZE;
        let left = y * DEFAULT_CELL_SIZE;
        let cellHtml = '< div id = "cell-'+x+'-'+y+'" onclick = "play('+x+','+y+')" class="cell" style = "position: absolute; width: '+
        DEFAULT_CELL_SIZE + 'px; height:' +
            DEFAULT_CELL_SIZE + 'px; left:' +
            left + 'px; top:' +
            top + 'px; line-height: ' +
            DEFAULT_CELL_SIZE + 'px;"></div>';
        return cellHtml;
    };
};

this.draw = function () {
    let cellDiv = document.getElementById("cell -"+x+"-"+y);
    switch (this.value) {
        case VALUE_X:
            cellDiv.innerHTML = "X";
            break;
        case VALUE_O:
            cellDiv.innerHTML = "O";
            break
        default:
            cellDiv.innerHTML = "";
            break;
    }
}

function GameBoard(rows,cols, elementId) {
    this.rows = rows;
    this.cols = cols;
    this.elementId = elementId;
    this.turn = VALUE_O;
    this.cell = [];
    this.isOver = false;

    this.draw = function () {
        let gameBoardDiv = document.getElementById(this.elementId);
        gameBoardDiv.innerHTML = "";
        for(let i=0; i<this.rows;i++){
            let row = [];
            this.cell.push(row);
            for(let j = 0; j<this.cols; j++){
                let cell= new Board(i,j)
                row.push(cell);
                gameBoardDiv.innerHTML += cell.getHtml();
            }
        }
    }

    this.play = function (x,y) {
        if(this.isOver){
            return;
        }
        let cell = this.cells[x][y];
        if(cell.value === VALUE_EMPTY){
            cell.value = this.turn;
            cell.draw();
            this.check(x,y);
            if (this.turn===VALUE_O) {
                this.turn = VALUE_X;
            }else{
                this.turn= VALUE_O;
            }
        }else {
            alert("Cell is not empty");
        }
    }

    this.check = function (x,y) {
        let cell = this.cells[x][y];
        let count = 1;
        let i = 1;
        while((y+1<this.cols)&&this.cells[x][y + i].value ===  cell.value){
            count++;
            i++;
        }
        let i=1;
        while((y - i >= 0) && this.cells[x][y - i].value ===  cell.value){
            count++;
            i++;
        }
        this.endGame(count);

        let count = 1;
        let i=1;
        while((x + i < this.rows) &&this.cells[x + i][y].value ===  cell.value){
            count++;
            i++;
        }
        var i = 1;
        while((x - i >= 0) &&this.cells[x - i][y].value ===  cell.value){
            count++;
            i++;
        }
        this.endGame(count);
        //Left diagonal
        var count = 1;
        var i = 1;
        var j = 1;
        while((y + i < this.cols) && (x + i < this.rows) && this.cells[x + i][y + j].value ===  cell.value){
            count++;
            i++;
            j++;
        }
        var i = 1;
        var j = 1;
        while((x - i >= 0) && (y - j >= 0) && this.cells[x - i][y - j].value ===  cell.value){
            count++;
            i++;
            j++;
        }
        this.endGame(count);
        //Right diagonal
        var count = 1;
        var i = 1;
        var j = 1;
        while((y + j < this.cols) && (x - i >= 0) && this.cells[x - i][y + j].value ===  cell.value){
            count++;
            i++;
            j++;
        }
        var i = 1;
        var j = 1;
        while((y - j >= 0) && (x + i < this.rows) &&this.cells[x + i][y - j].value ===  cell.value){
            count++;
            i++;
            j++;
        }
        this.endGame(count);
    };
    
    this.endGame = function (count) {
        if(count>=4){
            this.isOver = true;
            alert("You won!!");
        }
    }
};

function play(x,y) {
    gameBoard.play(x,y);
}

function start() {
    gameBoard=new GameBoard(DEFAULT_ROWS, DEFAULT_COLS,"game-board");
    gameBoard.draw();
}

let gameBoard;
start()