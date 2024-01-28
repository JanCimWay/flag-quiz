/* Modal box opening-closing */

/* Display */
document.getElementById("instructions").addEventListener("click", showInstructions)
function showInstructions() {
  document.getElementById("modal-screen").style.display = "block";
}

/* Hide */

document.getElementById("modal-screen").addEventListener("click", hideInstructions)
function hideInstructions() {
  document.getElementById("modal-screen").style.display = "none";
}