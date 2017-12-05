
var  winning_positions_array= new Array(); //array to hold the winning indices 

    winning_positions_array.push([1, 2, 3]);//not sure how else other than hardcode it
    winning_positions_array.push([1, 4, 7]);//start top left 
    winning_positions_array.push([1, 5, 9]);
    winning_positions_array.push([2, 5, 8]);
    winning_positions_array.push([3, 5, 7]);
    winning_positions_array.push([3, 6, 9]);
    winning_positions_array.push([4, 5, 6]);
    winning_positions_array.push([7, 8, 9]);

var  X_Player_Positions= new Array(); 
var O_Player_Positions = new Array();



var currentPlayer = 0;

var num_moves = 0;
var points1 = 0;    // player 1 points
var points2 = 0;    // player 2 points
var size = 3;


function draw_Board() 
{
    var theGrid = document.getElementById("tic");
    var count = 1;


//tr, td, handler = draw board
   if(theGrid.hasChildNodes() == 1)
    {

         erasePreviousBoard(3);

    }
   
    var i = 0;
    while(i < 3)//there are three rows
   // for(i = 0; i < size; i++)
    {//for each column

        //create table row element
        var num_rows = document.createElement("TR");
        var j = 0;
        while(j < 3)
        {

            //create table data element
            var num_columns = document.createElement("TD");
            
            num_columns.id = count;
            //num_columns.innerHTML = count;

            //display_players();
            //score();

            num_columns.addEventListener('click', display_players);
            //num_columns.addEventListener('click', score);

            num_rows.appendChild(num_columns);
            count++;
            j++;

        }
        theGrid.appendChild(num_rows);
        i++;
    }
}


function erasePreviousBoard(num){
   var theGrid = document.getElementById("tic");
     
    while (theGrid.hasChildNodes() != 0) 
    {
        theGrid.removeChild(theGrid.firstChild);
    }

}


var display_players = function()
            {

                if (currentPlayer == 0) 
                {
                    //draw the X character for the X player
                    this.innerHTML = "<b>X</b>";
                    X_Player_Positions.push(parseInt(this.id));

                    //use the compare function 
                    //sort in ascending order
                    X_Player_Positions.sort(function(a, b) { return a - b });
                }

                else 
                {
                    //draw the O character for the O player
                    this.innerHTML = "<b>O</b>";
                    O_Player_Positions.push(parseInt(this.id));
                     //use the compare function 
                    //sort in ascending order
                    O_Player_Positions.sort(function(a, b) { return a - b });
                }
                
                num_moves++;

                var inProgress = checkWinner();
                if (inProgress)//if not in progress then end the game
                {
                    if(currentPlayer == 0)
                        points1++;
                    else
                        points2++;

                    document.getElementById("player1").innerHTML = points1;
                    document.getElementById("player2").innerHTML = points2;

                    reset();
                    draw_Board();
                }

                else//game is still in progress and switch players
                {

                    //switch players
                    if (currentPlayer == 1)
                        currentPlayer = 0;
                    else
                        currentPlayer = 1;
                    this.removeEventListener('click', arguments.callee);
                }
            };


function reset()
{
    currentPlayer = 0;
    X_Player_Positions = new Array();//reallocate two new arrays
    //for player x and player y boards
    O_Player_Positions = new Array();
    cur_player_board = new Array();//clear the position aray
    //so that we can play more than once

}

function checkWinner() {
    // check if current player has a winning hand
    // only stsrt checking when player x has size number of selections
    var win = false;
    var cur_player_board = new Array();

    if (currentPlayer == 0)
        cur_player_board = X_Player_Positions;
    else
        cur_player_board = O_Player_Positions;
    
    if (cur_player_board.length >= 3) 
    {

        var i = 0;
        while(i < 8)//for each possible winning array
        {
            var sets = winning_positions_array[i];//let's compare row by row
            var found_flag = true;
        
        
   
            var j = 0;
            while(j < 3)//for each element in  the winning pos array
            {
                var match  = false;//havent match  the winning match yet
                

                for (s = 0; s < cur_player_board.length; s++) //for each element of the player's board
                {
                    if (sets[j] == cur_player_board[s]) 
                    {
                        match  = true;
                        break;
                    }
                }

                if (match  == false) 
                {
                    found_flag = false;
                    break;
                }
                j++;
            }

            if (found_flag == true) 
            {
                win = true;
                break;
            }

            i++;
        }
    }
    return win;
} 



window.onload = draw_Board;//draw the board




























