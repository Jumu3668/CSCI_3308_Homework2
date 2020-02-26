/*
[IMPORTANT]
You are free to create any number of helper function you want.
We know the problem could be seached online, and we are aware of those solutions.
So please sight sources if you took help from any online resource.
*/





//IDs for all the table elements. You get the cell element just by using document.getElementById("A1")
var table_ids = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]

/*
An integer array of length 9.
Usaged: This is to store the state to the tictactoe board.
When a move is made
(Example player 1 (who is X) move at Cell 'A1' --- The board_state[0] will be made 1 )
Similarly, A move by player 2(who is O) at Cell 'A3' --- The board_state[2] will be made 0 )
We store the move of player 1 as '1' and player 2 as '0'. So after the above two moves the state should look like
[1, -1, 0, -1, -1, -1, -1, -1, -1]
*/
var board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1]


// A flag to keep track of the status of the game, false means the game is not started. The default value is set to false
var started = false

/*
A variable to keep track of each players turn. Since the game always starts with player 1 - The default value is set to '1'
1 means player_1
0 means player_0
*/
var turn = 1

/*
 @Return boolean
 @Param _str - A string variable - Note the type is not checked in the implementation
 The methods @Returns true is the _str is null or it has a length of 0, otherwise, the methods returns false
*/
function isEmpty(_str) {
	return (!_str || 0 === _str.length)
}

/*
@Return int This return the turn variable. Please note that
turn = 1 is for player_1 and
turn = 0 is for player_2
@Param - No param
*/
function whose_move(){
	return this.turn
}

/*
@Return void
@Param
This methods toggles the 'turn' variable.
if the turn is set to 1 it will make it 0
if the turn is set to 0 it will make it 1
*/
function toggle_move() {
	this.turn = !this.turn
}

/*
@Return boolean
@Param
The method returns the value of the 'started' flag.
true means the game has started
false means the game has not started
When the game has not started the flag is set to false. As soon as the game starts the flag must be set to true.
Once the game has finished or user has clicked on reset_play the flag must be set to false.
*/
function game_started(){
	// enable the move input line
	return this.started

}
/*
@Return integer
@Param
By column A1,B1,C1 -- A2,B2,C2 -- A3,B3,C3
By row A1,A2,A3 -- B1,B2,B3 -- C1,C2,C3
By diagonal A1,B2,C3 -- C1,B2,A3
If board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1], DRAW!
// board_state = [0,1,2,3,4,5,6,7,8]
*/
function check_winner() {
	// First checks for a winning pattern, then determines if pattern belongs to x or o
	// if (board_state[0] == board_state[3] == board_state[6] || board_state[1] == board_state[4] == board_state[7] || board_state[2] == board_state[5] == board_state[8] ){
	// 	alert("winner Column!")
	// } else if (board_state[0] == board_state[1] == board_state[2] || board_state[3] == board_state[4] == board_state[5] ||board_state[6] == board_state[7] == board_state[8]) {
	// 	alert("winner Row")
	// } else if (board_state[0] == board_state[4] == board_state[8] || board_state[2] == board_state[4] == board_state[6]) {
	// 	alert("winner diagonal")
	// } else {
	// 	alert("no winners detected")
	// }
	// check rows
	var XorO = '';
	if (!whose_move()){
		XorO = "X"
	} else {
		XorO = "O"
	}

	if ((Number(board_state[0]) == Number(board_state[1])) && (Number(board_state[1]) == Number(board_state[2])) && Number(board_state[0]) != -1) {
		alert("Winner is " + XorO + "!")
		reset_play();
	}
	if ((Number(board_state[3]) == Number(board_state[4])) && (Number(board_state[4]) == Number(board_state[5])) && Number(board_state[3]) != -1) {
		alert("Winner is " + XorO + "!")
		reset_play();
	}
	if ((Number(board_state[6]) == Number(board_state[7])) && (Number(board_state[7]) == Number(board_state[8])) && Number(board_state[6]) != -1) {
		alert("Winner is " + XorO + "!")
		reset_play();
	}

	//check columns
	if ((Number(board_state[0]) == Number(board_state[3])) && (Number(board_state[3]) == Number(board_state[6])) && Number(board_state[0]) != -1) {
		alert("Winner is " + XorO + "!")
		reset_play();
	}
	if ((Number(board_state[1]) == Number(board_state[4])) && (Number(board_state[4]) == Number(board_state[7])) && Number(board_state[1]) != -1) {
		alert("Winner is " + XorO + "!")
		reset_play();
	}
	if ((Number(board_state[2]) == Number(board_state[5])) && (Number(board_state[5]) == Number(board_state[8])) && Number(board_state[2]) != -1) {
		alert("Winner is " + XorO + "!")
		reset_play();
	}

	//check diags
	if ((Number(board_state[0]) == Number(board_state[4])) && (Number(board_state[4]) == Number(board_state[8])) && Number(board_state[0]) != -1) {
		alert("Winner is " + XorO + "!")
		reset_play();
	}
	if ((Number(board_state[2]) == Number(board_state[4])) && (Number(board_state[4]) == Number(board_state[6])) && Number(board_state[2]) != -1) {
		alert("Winner is " + XorO + "!")
		reset_play();
	}
	var tempArray = [];
	for (var i = 0; i < 9; i++) {
		if (board_state[i] == -1) {
			tempArray.push(-1);
		}
	}
	console.log(tempArray)
	if(!tempArray.includes(-1)){
		alert("draw!")
	}
}
/*
TODO - Rule 1
This is the first method you'll implement. This method is called when the Begin Play button is clicked.
The method should do all the validations as stated in rule 1.
1. Verify if the player names are empty or not. Raise an alert if they are empty.
2. If the field are empty don't start the game. This just means the function will return and do nothing. The 'started' flag will not be modified.
3. If all verification is successful, disable the name fields and update the player moves as shown in the image.
4. If all verification is successful, update the turn information on the page. (See the source code and image). And set the started flag to true.(this will help you track at any instant if the game is in start state or not.)
5. Once game has started, Handle multiple clicks on begin play.
*/

function begin_play(){
	var player1_name = document.getElementById("player1_id");
	var player2_name = document.getElementById("player2_id");
	var button = document.getElementById("begin_play_button");
	var reset_play_button = document.getElementById("reset_play_button");
	reset_play_button.disabled = false;

	if (player1_name.value == '' || player2_name.value == '') {
		alert("Both player names must be filled in!");
	} else if (player1_name.value == player2_name.value) {
		alert("Player names cannot be identical.")
	} else if (game_started() == true) {
		alert("Already started. Please click \'Reset Play\' to start again.");
		button.disabled = true;
	} else {
		started = true;
		player1_name.disabled = true;
		player2_name.disabled = true;
		player1_name.value = player1_name.value.concat(" (X)");
		player2_name.value = player2_name.value.concat(" (O)");
		var turn = document.getElementById("turn_info");
		turn.innerHTML = "Turn for: " + player1_name.value.bold();

	}
}

/*
TODO - Rule 2
This is the second method you'll implement. This method is called when the Reset Play button is clicked.
The method should do all the things as stated in rule 2.
1. The reset play button should reset the whole game.(At any time when reset is clicked - All the three text boxes should be cleared and Turn should be set to the default message.)
2. The text boxes for entering name should be enablled back.
3. The Tic Tac Toe Grid should be set to its default entries.
4. Clicking reset play again and again shall have the same effect.(or no effect when clicked multiple times)
Remember to set the strated flag as false

*/
function reset_play(){
	var player1_name = document.getElementById("player1_id");
	var player2_name = document.getElementById("player2_id");
	var begin_play_button = document.getElementById("begin_play_button");
	var turn = document.getElementById("turn_info");
	var a1 = document.getElementById("A1");
	var a2 = document.getElementById("A2");
	var a3 = document.getElementById("A3");
	var b1 = document.getElementById("B1");
	var b2 = document.getElementById("B2");
	var b3 = document.getElementById("B3");
	var c1 = document.getElementById("C1");
	var c2 = document.getElementById("C2");
	var c3 = document.getElementById("C3");
	var array = [a1,a2,a3,b1,b2,b3,c1,c2,c3];

	player1_name.disabled = false;
	player2_name.disabled = false;
	player1_name.value = '';
	player2_name.value = '';

	if (game_started() == false) {
		alert("Game has not been started yet. Please fill out names for Player 1 and Player 2 and click \'Begin Play\' to start again.");
		reset_play_button.disabled = true;
	}
	started = false;
	turn.innerHTML = "Game has not begun";
	begin_play_button.disabled = false;

	// Set board to default entries
	a1.innerHTML="A1";
	a2.innerHTML="A2";
	a3.innerHTML="A3";
	b1.innerHTML="B1";
	b2.innerHTML="B2";
	b3.innerHTML="B3";
	c1.innerHTML="C1";
	c2.innerHTML="C2";
	c3.innerHTML="C3";
	board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1]
	turn = 1;
}

/*
TODO - Rule 3
This is the last method you'll implement. This method is called everytime a move has been player( Play button was clicked).
The method should do all the things as stated in rule 2.
1. The moves should be validated can only be these ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
2. Invalid moves should be reported by an alert message.(You are encorraged to use Modal which you learned in HW1 - Usage is not mandatory.)
3. If the move is a valid move, the grid should be updated with the correct move (Player 1 is always - 'X', and Player 2 is always 'O' (This is not zero!)) - The turn information should also be updated
	Hint: Use the turn variable to figure out who is currently playing. Use to toggle method to change moves.
4. A move should always be a valid move. (Example: If say a move was made in already filled cell, it should be invalidated with an alert.)
5. If the game has not started, clicking on <b>Play</b> should give an alert "The game has not started."<br/>
6. After any move, the state of the table should be validated.(see the document attached in the homework)
   If the there is winner - Show it in an alert message - (Ex - Winner is X or O) - Displaying name is not important. <br/>
7. The game should reset itself once a winner is determined.<br/>
8. After all the moves have exhausted, you're not required to display any message. (It should be obvious to Reset play.)<br/>

*/
function play() {
	// initial game state check
	if (game_started() == false) {
		alert("Game has not been started yet. Please fill out names for Player 1 and Player 2 and click \'Begin Play\' to start again.");
	} else {
		var turn = document.getElementById("turn_info");
		var player1_name = document.getElementById("player1_id");
		var player2_name = document.getElementById("player2_id");
		var play_button = document.getElementById("play_button");
		var board_input = document.getElementById("move_text_id");
		var a1 = document.getElementById("A1");
		var a2 = document.getElementById("A2");
		var a3 = document.getElementById("A3");
		var b1 = document.getElementById("B1");
		var b2 = document.getElementById("B2");
		var b3 = document.getElementById("B3");
		var c1 = document.getElementById("C1");
		var c2 = document.getElementById("C2");
		var c3 = document.getElementById("C3");
		var array = [a1,a2,a3,b1,b2,b3,c1,c2,c3];
		var invalid_move = 1;
		// checks if valid coordinates and if empty coordinates
		for (var i = 0; i < table_ids.length; i++) {
			if (board_input.value == table_ids[i] && board_state[i] == -1) {

				// puts valid input into board
				board_state[i] = whose_move();
				// update board
				if(whose_move()) {
					//set coordinate to x
					for (var i = 0; i < array.length; i++) {
						// iterate through array to see where array[i] == board_input.value
						if(array[i].innerHTML == board_input.value) {
							array[i].innerHTML = "X";
						}
					}
				} else {
					//set coordinate to o
					for (var i = 0; i < array.length; i++) {
						// iterate through array to see where array[i] == board_input.value
						if(array[i].innerHTML == board_input.value) {
							array[i].innerHTML = "O";
						}
					}
				}
				// next turn
				toggle_move();

				// update turn on page
				if(whose_move()) {
					turn.innerHTML = "Turn for: " + player1_name.value.bold();
				} else {
					turn.innerHTML = "Turn for: " + player2_name.value.bold();
				}
				invalid_move = 0;


			}
		}
		// no match therefore invalid input
		if(invalid_move) {
			var valid_move = [];
			//scans board for empty spots
			for (var i = 0; i < table_ids.length; i++){
				if (board_state[i] == -1) {
					valid_move.push(table_ids[i]);
					console.log(valid_move);
				}
			}
			alert("Invalid move. List of valid moves are: " + valid_move);
			valid_move = [];
		}
		board_input.value = '';
		check_winner();
	}
}

/*
Do not change this method.
*/
function moveEnter(event) {
	if(event.keyCode == 13) {
		event.preventDefault()
		play()
	}

}
