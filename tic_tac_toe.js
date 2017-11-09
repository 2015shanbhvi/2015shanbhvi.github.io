
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
                
                var inProgress = 0;
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
    X_Player_Positions = new Array();//reallocate two new arrays
    //for player x and player y boards
    Y_Player_Positions = new Array();
}



window.onload = draw_Board;//draw the board


