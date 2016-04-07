//business logic
function Player(name, weapon, number) {
    this.name = name;
    this.weapon = weapon;
    this.number = number;
}
function Board(row1, row2, row3) {
    this.row1 = ["1a", "1b", "1c"];
    this.row2 = ["2a", "2b", "2c"];
    this.row3 = ["3a", "3b", "3c"];
}


var currentPlayer;
var tieCheck;

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
if((xCount + oCount) === 9){
  return "tie";
}
 else{
if (xCount === oCount) {
  return true;
} else if (xCount > oCount) {
  return false;
}}
};
var winner = "";
var victory = "";
var victory1 = "";
var victory3 = "";
Board.prototype.winner = function () {
  var victory = "";
  var victoriousPlayer = "";
  if(newBoard.row1[0] === newBoard.row1[1] && newBoard.row1[1] === newBoard.row1[2]){
    victory = "r1"
    victoriousPlayer = newBoard.row1[0];
  }
  if(newBoard.row2[0] === newBoard.row2[1] && newBoard.row2[1] === newBoard.row2[2]){
    victory = "r2"
    victoriousPlayer = newBoard.row1[0];
  }
  if(newBoard.row3[0] === newBoard.row3[1] && newBoard.row3[1] === newBoard.row3[2]){
    victory = "r3"
    victoriousPlayer = newBoard.row1[0];
  }
for (var i = 0; i < 3; i++){
      if (newBoard.row1[i] === newBoard.row2[i] && newBoard.row2[i] === newBoard.row3[i]) {
    victory =  "c" + [i+1]
    victoriousPlayer = newBoard.row1[i-1];
  }
}
if(newBoard.row1[0] === newBoard.row2[1] && newBoard.row2[1]=== newBoard.row3[2]){
  victory = "d1";
  victoriousPlayer = newBoard.row1[0];
}
if(newBoard.row1[2] === newBoard.row2[1] && newBoard.row2[1]=== newBoard.row3[0]){
  victory = "d2";
  victoriousPlayer = newBoard.row1[2];
}

  return victory;
  if(victory !== ""){
  console.log(victory);
  if(victoriousPlayer === "X"){
    winner = newPlayer1
  } else if(victoriousPlayer === "O")
    winner = newPlayer2
  }
  console.log(winner);
}




$(document).ready(function() {
      $("#player").submit(function(event) {
        event.preventDefault();
        $("#player").hide();
        $(".table").show();
        var inputtedName1 = $("#player-1-name").val();
        var inputtedName2 = $("#player-2-name").val();
        var inputtedWeapon2 = "";
        console.log(inputtedName1);
        console.log(inputtedName2);

        var newPlayer1 = new Player(inputtedName1, "X", 1);
        var newPlayer2 = new Player(inputtedName2, "O", 2);
        console.log(newPlayer1);
        console.log(newPlayer2);
        newBoard = new Board("row1", "row2", "row3");

        victory = newBoard.winner()
        var current = function(player){
          console.log(player);

        }

        var victory2 = function(victory){
          console.log(victory1);
          if(victory !== ""){
            $("."+ victory).addClass("win")
            $(".table1").empty();
          }};

          var alerty = function(player, victory, tie){
            if(tie === "tie" && victory === ""){
              $("#headlines").empty().append("It's a Tie! Refresh the page and try again!")
            } else {
            if(player === newPlayer1){
              if(victory !== ""){
                $("#headlines").empty().append(newPlayer1.name + " has dominated! Bow down " + newPlayer2.name);
              } else {
              $("#headlines").empty().append(newPlayer2.name + "'s Turn, Place a Herring");
            }} else if(player === newPlayer2){
                  if(victory !== ""){
                    $("#headlines").empty().append(newPlayer2.name + " has dominated! Bow down " + newPlayer1.name);
                  } else {
              $("#headlines").empty().append(newPlayer1.name + "'s Turn, Place a Ninja Star");
            }}}};

        $(".1a").click(function(){
          currentPlayer = newBoard.playerTurn();
          if(currentPlayer === true){
            currentPlayer = newPlayer1;
          }  else if(currentPlayer === false){
            currentPlayer = newPlayer2;
          }
          newBoard.row1[0]= currentPlayer.weapon;
          tieCheck = newBoard.playerTurn();
          if(currentPlayer.weapon === "X"){
            $("#1a").empty().removeClass("table1").append("<img src='ninja.png' alt='picture of a ninja star'>")
          } else if (currentPlayer.weapon === "O"){
            $("#1a").empty().removeClass("table1").append("<img src='herring.jpg' alt='picture of a herring'>")
          }
          victory2(newBoard.winner());
          alerty(currentPlayer, newBoard.winner(), tieCheck);
        });
        $(".1b").click(function(){
          currentPlayer = newBoard.playerTurn();
          if(currentPlayer === true){
            currentPlayer = newPlayer1;
          } else if(currentPlayer === false){
            currentPlayer = newPlayer2;
          }
          console.log(currentPlayer);
          newBoard.row1[1]= currentPlayer.weapon;
          tieCheck = newBoard.playerTurn();
          console.log(tieCheck);
          if(currentPlayer.weapon === "X"){
            $("#1b").empty().removeClass("table1").append("<img src='ninja.png' alt='picture of a ninja star'>")
          } else if (currentPlayer.weapon === "O"){
            $("#1b").empty().removeClass("table1").append("<img src='herring.jpg' alt='picture of a herring'>")
          }
          victory2(newBoard.winner());
          alerty(currentPlayer, newBoard.winner(), tieCheck);

        });
        $(".1c").click(function(){
          currentPlayer = newBoard.playerTurn();
          if(currentPlayer === true){
            currentPlayer = newPlayer1;
          } else if(currentPlayer === false){
            currentPlayer = newPlayer2;
          }
          console.log(currentPlayer);
          newBoard.row1[2]= currentPlayer.weapon;
          tieCheck = newBoard.playerTurn();
          console.log(tieCheck);
          if(currentPlayer.weapon === "X"){
            $("#1c").empty().removeClass("table1").append("<img src='ninja.png' alt='picture of a ninja star'>")
          } else if (currentPlayer.weapon === "O"){
            $("#1c").empty().removeClass("table1").append("<img src='herring.jpg' alt='picture of a herring'>")
          }

          victory2(newBoard.winner());
          alerty(currentPlayer, newBoard.winner(), tieCheck);

        });
        $(".2a").click(function(){
          currentPlayer = newBoard.playerTurn();
          if(currentPlayer === true){
            currentPlayer = newPlayer1;
          } else if(currentPlayer === false){
            currentPlayer = newPlayer2;
          }
          console.log(currentPlayer);
          newBoard.row2[0]= currentPlayer.weapon;
          tieCheck = newBoard.playerTurn();
          console.log(tieCheck);
          if(currentPlayer.weapon === "X"){
            $("#2a").empty().removeClass("table1").append("<img src='ninja.png' alt='picture of a ninja star'>")
          } else if (currentPlayer.weapon === "O"){
            $("#2a").empty().removeClass("table1").append("<img src='herring.jpg' alt='picture of a herring'>")
          }

          victory2(newBoard.winner());
          alerty(currentPlayer, newBoard.winner(), tieCheck);
        });
        $(".2b").click(function(){
          currentPlayer = newBoard.playerTurn();
          if(currentPlayer === true){
            currentPlayer = newPlayer1;
          } else if(currentPlayer === false){
            currentPlayer = newPlayer2;
          }
          console.log(currentPlayer);
          newBoard.row2[1]= currentPlayer.weapon;
          tieCheck = newBoard.playerTurn();
          console.log(tieCheck);
          if(currentPlayer.weapon === "X"){
            $("#2b").empty().removeClass("table1").append("<img src='ninja.png' alt='picture of a ninja star'>")
          } else if (currentPlayer.weapon === "O"){
            $("#2b").empty().removeClass("table1").append("<img src='herring.jpg' alt='picture of a herring'>")
          }

          victory2(newBoard.winner());
          alerty(currentPlayer, newBoard.winner(), tieCheck);
        });
        $(".2c").click(function(){
          currentPlayer = newBoard.playerTurn();
          if(currentPlayer === true){
            currentPlayer = newPlayer1;
          } else if(currentPlayer === false){
            currentPlayer = newPlayer2;
          }
          console.log(currentPlayer);
          newBoard.row2[2]= currentPlayer.weapon;
          tieCheck = newBoard.playerTurn();
          console.log(tieCheck);
          if(currentPlayer.weapon === "X"){
            $("#2c").empty().removeClass("table1").append("<img src='ninja.png' alt='picture of a ninja star'>")
          } else if (currentPlayer.weapon === "O"){
            $("#2c").empty().removeClass("table1").append("<img src='herring.jpg' alt='picture of a herring'>")
          }

          victory2(newBoard.winner());
          alerty(currentPlayer, newBoard.winner(), tieCheck);
        });
        $(".3a").click(function(){
          currentPlayer = newBoard.playerTurn();
          if(currentPlayer === true){
            currentPlayer = newPlayer1;
          } else if(currentPlayer === false){
            currentPlayer = newPlayer2;
          }
          console.log(currentPlayer);
          newBoard.row3[0]= currentPlayer.weapon;
          tieCheck = newBoard.playerTurn();
          console.log(tieCheck);
          if(currentPlayer.weapon === "X"){
            $("#3a").empty().removeClass("table1").append("<img src='ninja.png' alt='picture of a ninja star'>")
          } else if (currentPlayer.weapon === "O"){
            $("#3a").empty().removeClass("table1").append("<img src='herring.jpg' alt='picture of a herring'>")
          }

          victory2(newBoard.winner());
          alerty(currentPlayer, newBoard.winner(), tieCheck);
        });
        $(".3b").click(function(){
          currentPlayer = newBoard.playerTurn();
          if(currentPlayer === true){
            currentPlayer = newPlayer1;
          } else if(currentPlayer === false){
            currentPlayer = newPlayer2;
          }
          console.log(currentPlayer);
          newBoard.row3[1]= currentPlayer.weapon;
          tieCheck = newBoard.playerTurn();
          console.log(tieCheck);
          if(currentPlayer.weapon === "X"){
            $("#3b").empty().removeClass("table1").append("<img src='ninja.png' alt='picture of a ninja star'>")
          } else if (currentPlayer.weapon === "O"){
            $("#3b").empty().removeClass("table1").append("<img src='herring.jpg' alt='picture of a herring'>")
          }

          victory2(newBoard.winner());
          alerty(currentPlayer, newBoard.winner(), tieCheck);
        });
        $(".3c").click(function(){
          currentPlayer = newBoard.playerTurn();
          if(currentPlayer === true){
            currentPlayer = newPlayer1;
          } else if(currentPlayer === false){
            currentPlayer = newPlayer2;
          }
          console.log(currentPlayer);
          newBoard.row3[2]= currentPlayer.weapon;
          tieCheck = newBoard.playerTurn();
          console.log(tieCheck);
          if(currentPlayer.weapon === "X"){
            $("#3c").empty().removeClass("table1").append("<img src='ninja.png' alt='picture of a ninja star'>")
          } else if (currentPlayer.weapon === "O"){
            $("#3c").empty().removeClass("table1").append("<img src='herring.jpg' alt='picture of a herring'>")
          }

          victory2(newBoard.winner());
          alerty(currentPlayer, newBoard.winner(), tieCheck);
        });
    });
});
