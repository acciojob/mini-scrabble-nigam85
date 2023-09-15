//your code here
// Function to count letters and update the letter count in real-time
function countLetters() {
  // Get the input text from the textbox
  const inputText = document.getElementById("evaluatedText").value;

  // Count the number of characters (including spaces)
  const letterCount = inputText.length;

  // Update the letter count in the <h3> element
  document.getElementById("letterCount").textContent = letterCount;
}

// Initially set the letter count to 0
document.getElementById("letterCount").textContent = "0";

