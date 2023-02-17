//function to check won of lost

export function checkWin(correct, wrong, word) {
  let status = "win";

  // Check for win
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  // Check for lose
  if (wrong.length === 10) status = "lose";

  return status;
}
//show function for notifications timer
export function show(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}
