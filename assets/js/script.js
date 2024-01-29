/* Modal box opening-closing */

/* Display modal screen after clicking on instruction button*/
document.getElementById("instructions").addEventListener("click", showInstructions);
function showInstructions() {
  document.getElementById("modal-screen").style.display = "block";
}

/* Hide  instructions after clicking anywhere on modal-screen*/

document.getElementById("modal-screen").addEventListener("click", hideInstructions);
function hideInstructions() {
  document.getElementById("modal-screen").style.display = "none";
}