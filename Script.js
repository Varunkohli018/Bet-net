function placeBet() {
  const result = Math.random() < 0.5 ? "You Win!" : "You Lose!";
  document.getElementById("result").textContent = result;
}
