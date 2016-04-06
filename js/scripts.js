//business logic
function Player(name, weapon, number) {
    this.name = name;
    this.weapon = weapon;
    this.number = number;
}
function Board(row1, row2, row3) {
    this.row1 = ["1a", "1b", "1c"];
    this.row2 = ["2a", "2b", "2c"]];
    this.row3 = ["3a", "3b", "3c"]];
}


var currentPlayer;

Board.prototype.playerTurn = function () {
  var xCount = 0;
  var oCount = 0;
for (var i = 0; i < 3; i++){
if(newBoard.row1[i] === "X"){
  xCount += 1;
} else if (newBoard.row1[i] === "O") {
  oCount += 1;
}
if(newBoard.row2[i] === "X"){
  xCount += 1;
} else if (newBoard.row2[i] === "O") {
  oCount += 1;
}
if(newBoard.row3[i] === "X"){
  xCount += 1;
} else if (newBoard.row3[i] === "O") {
  oCount += 1;
}
}
console.log(xCount);
console.log(oCount);
if (xCount === oCount) {
  return true;
} else if (xCount > oCount) {
  return false;
}
};
$(document).ready(function() {
      $("#player").submit(function(event) {
        event.preventDefault();

        var inputtedName1 = $("#player-1-name").val();
        var inputtedWeapon1 = $("#player-1-weapon").val();
        var inputtedName2 = $("#player-2-name").val();
        var inputtedWeapon2 = "";
        if (inputtedWeapon1 === "X") {
          inputtedWeapon2 = "O"
        } else {
          inputtedWeapon2 = "X"
        }
        var newPlayer1 = new Player(inputtedName1, inputtedWeapon1, 1);
        var newPlayer2 = new Player(inputtedName2, inputtedWeapon2, 2);

        newBoard = new Board("row1", "row2", "row3");

        $(".1a").click(function(){
          currentPlayer = newBoard.playerTurn();
          if(currentPlayer === true){
            currentPlayer = newPlayer1
          } else if(currentPlayer === false){
            currentPlayer = newPlayer2
          }
          console.log(currentPlayer);
          newBoard.row1[0]= currentPlayer.weapon;
          $("#1a").text(currentPlayer.weapon);
          console.log(newBoard);
        });
        $(".1b").click(function(){
          currentPlayer = newBoard.playerTurn();
          if(currentPlayer === true){
            currentPlayer = newPlayer1
          } else if(currentPlayer === false){
            currentPlayer = newPlayer2
          }
          console.log(currentPlayer);
          newBoard.row1[1]= currentPlayer.weapon;
          $("#1b").text(currentPlayer.weapon);
          console.log(newBoard);
        });
        $(".1c").click(function(){
          currentPlayer = newBoard.playerTurn();
          if(currentPlayer === true){
            currentPlayer = newPlayer1
          } else if(currentPlayer === false){
            currentPlayer = newPlayer2
          }
          console.log(currentPlayer);
          newBoard.row1[2]= currentPlayer.weapon;
          $("#1c").text(currentPlayer.weapon);
          console.log(newBoard);
        });
        $(".2a").click(function(){
          currentPlayer = newBoard.playerTurn();
          if(currentPlayer === true){
            currentPlayer = newPlayer1
          } else if(currentPlayer === false){
            currentPlayer = newPlayer2
          }
          console.log(currentPlayer);
          newBoard.row2[0]= currentPlayer.weapon;
          $("#2a").text(currentPlayer.weapon);
        });
        $(".2b").click(function(){
          currentPlayer = newBoard.playerTurn();
          if(currentPlayer === true){
            currentPlayer = newPlayer1
          } else if(currentPlayer === false){
            currentPlayer = newPlayer2
          }
          console.log(currentPlayer);
          newBoard.row2[1]= currentPlayer.weapon;
          $("#2b").text(currentPlayer.weapon);
        });
        $(".2c").click(function(){
          currentPlayer = newBoard.playerTurn();
          if(currentPlayer === true){
            currentPlayer = newPlayer1
          } else if(currentPlayer === false){
            currentPlayer = newPlayer2
          }
          console.log(currentPlayer);
          newBoard.row2[2]= currentPlayer.weapon;
          $("#2c").text(currentPlayer.weapon);
        });
        $(".3a").click(function(){
          currentPlayer = newBoard.playerTurn();
          if(currentPlayer === true){
            currentPlayer = newPlayer1
          } else if(currentPlayer === false){
            currentPlayer = newPlayer2
          }
          console.log(currentPlayer);
          newBoard.row3[0]= currentPlayer.weapon;
          $("#3a").text(currentPlayer.weapon);
        });
        $(".3b").click(function(){
          currentPlayer = newBoard.playerTurn();
          if(currentPlayer === true){
            currentPlayer = newPlayer1
          } else if(currentPlayer === false){
            currentPlayer = newPlayer2
          }
          console.log(currentPlayer);
          newBoard.row3[1]= currentPlayer.weapon;
          $("#3b").text(currentPlayer.weapon);
        });
        $(".3c").click(function(){
          currentPlayer = newBoard.playerTurn();
          if(currentPlayer === true){
            currentPlayer = newPlayer1
          } else if(currentPlayer === false){
            currentPlayer = newPlayer2
          }
          console.log(currentPlayer);
          newBoard.row3[2]= currentPlayer.weapon;
          $("#3c").text(currentPlayer.weapon);
        });
        console.log(newBoard);
    });


});
