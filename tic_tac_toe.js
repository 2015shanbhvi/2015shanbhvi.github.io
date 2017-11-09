
var  winning_positions_array= new Array(); //array to hold the winning indices 

    winning_positions_array.push([1, 2, 3]);//not sure how else other than hardcode it
    winning_positions_array.push([1, 4, 7]);//start top left 
    winning_positions_array.push([1, 5, 9]);
    winning_positions_array.push([2, 5, 8]);
    winning_positions_array.push([3, 5, 7]);
    winning_positions_array.push([3, 6, 9]);
    winning_positions_array.push([4, 5, 6]);
    winning_positions_array.push([7, 8, 9]);

function draw_Board() 
{
    var theGrid = document.getElementById("tic");
    var counter = 1;


//tr, td, handler = draw board




    for(i = 0; i < size; i++)
    {//for each column

        var num_rows = document.createElement("tr");
        for(j = 0; j < size; j++)
        {

            var num_columns = document.createElement("td");
            
            num_columns.id = counter;

            var handler = function()
            {

                if(currentPlayer ==0)
                {

                    //draw the X character for the X player
                    this.innerHTML = "<b>X</b>";
                    X_Player_Positions.push(parseInt(this.id));

                    //use the compare function 
                    //sort in ascending order
                    X_Player_Positions.sort(function(a, b) { return a - b });

                }

                if(currentPlayer == 1)
                {
                    //draw the O character for the O player
                    this.innerHTML = "<b>O</b>";
                    Y_Player_Positions.push(parseInt(this.id));
                     //use the compare function 
                    //sort in ascending order
                    Y_Player_Positions.sort(function(a, b) { return a - b });
                }

            };

            var score = function()
            {
                 move++;
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


            num_columns.addEventListener('click', handler);
            num_columns.addEventListener('click', score);

            num_rows.appendChild(num_columns);
            counter++;


        }
        theGrid.appendChild(num_rows);


    }



}



