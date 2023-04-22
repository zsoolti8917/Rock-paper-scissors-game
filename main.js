let game = confirm("Do you want to play rock paper scissors?");

if (game) {
  let playerChoice = prompt("Choose rock, paper, or scissors");
  // let computerChoice = Math.floor(Math.random() *3 +1) ;
  if (playerChoice) {
    let playerDecision = playerChoice.trim().toLowerCase();
    if (
      playerDecision === "rock" ||
      playerDecision === "paper" ||
      playerDecision === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let result =
        playerDecision === computer
          ? "Tie game."
          : playerDecision === "rock" && computer === "paper"
          ? `the winner is: Computer \nPlayer decision: ${playerDecision} \nComputer Decision: ${computer}`
          : playerDecision === "paper" && computer === "scissors"
          ? `the winner is: Computer \nPlayer decision: ${playerDecision} \nComputer Decision: ${computer}`
          : playerDecision === "scissors" && computer === "rock"
          ? `the winner is: Computer \nPlayer decision: ${playerDecision} \nComputer Decision: ${computer}`
          : `the winner is: Player \nPlayer decision: ${playerDecision} \nComputer Decision: ${computer}`;

      alert(result);
    } else {
      alert("You did not enter rock, paper or scissors.");
    }
  } else {
    alert("i see you changed your mind");
  }
} else {
  alert("Ok, maybe next time");
}
