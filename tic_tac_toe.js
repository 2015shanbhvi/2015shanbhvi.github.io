
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
var Y_Player_Positions = new Array();



var currentPlayer = 0;

var num_moves = 0;
var points1 = 0;    // player 1 points
var points2 = 0;    // player 2 points
var size = 3;





   


function draw_Board() 
{
    var theGrid = document.getElementById("tic");
    var counter = 1;


//tr, td, handler = draw board
   if(theGrid.hasChildNodes() == 1)
    {

         erasePreviousBoard(3);
        // erasePreviousBoard(3);
         //erasePreviousBoard(3);
    }
   

    

    for(i = 0; i < size; i++)
    {//for each column

        var num_rows = document.createElement("tr");
        for(j = 0; j < size; j++)
        {

            var num_columns = document.createElement("td");
            
            num_columns.id = counter;
            //num_columns.innerHTML = counter;

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
                    Y_Player_Positions.push(parseInt(this.id));
                     //use the compare function 
                    //sort in ascending order
                    Y_Player_Positions.sort(function(a, b) { return a - b });
                }
                
                score();
            };

            var score = function()
            {
                num_moves++;
                var isWin = checkWinner();

                if (isWin)
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

                else
                {
                    if (currentPlayer == 0)
                        currentPlayer = 1;
                    else
                        currentPlayer = 0;
                    this.removeEventListener('click', arguments.callee);
                }
            };


            num_columns.addEventListener('click', display_players);
            //num_columns.addEventListener('click', score);

            num_rows.appendChild(num_columns);
            counter++;


        }
        theGrid.appendChild(num_rows);


    }



}


function erasePreviousBoard(num){
   var theGrid = document.getElementById("tic");
        //for(i = 0; i < num; i++)
        //{
        //    console.log(num);
            theGrid.removeChild(theGrid.firstChild);
            //theGrid.removeChild(theGrid.firstChild);
            //theGrid.removeChild(theGrid.firstChild);
        //}
        
    
}





function reset()
{
    currentPlayer = 0;
    X_Player_Positions = new Array();
    Y_Player_Positions = new Array();
}


function checkWinner() {
    // check if current player has a winning hand
    // only stsrt checking when player x has size number of selections
    var win = false;
    var playerSelections = new Array();

    if (currentPlayer == 0)
        playerSelections = X_Player_Positions;
    else
  playerSelections = Y_Player_Positions;
    
    if (playerSelections.length >= size) 
    {
        // check if any 'winning_positions_array' are also in your selections
        
        for (i = 0; i < winning_positions_array.length; i++) 
        {
            var sets = winning_positions_array[i];  // winning hand
            var setFound = true;
            
            for (r = 0; r < sets.length; r++) 
            {
                // check if number is in current players hand
                // if not, break, not winner
                var found = false;
                
                // players hand
                for (s = 0; s < playerSelections.length; s++) 
                {
                    if (sets[r] == playerSelections[s]) 
                    {
                        found = true;
                        break;
                    }
                }

                // value not found in players hand
                // not a valid set, move on
                if (found == false) 
                {
                    setFound = false;
                    break;
                }
            }

            if (setFound == true) 
            {
                win = true;
                break;
            }
        }
    }

    return win;
} 

window.onload = draw_Board;//draw the board


