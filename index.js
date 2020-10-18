// Variables for DOM elements

const bingoBoard = document.getElementById("bingo-board");
const generateBoardBtn = document.querySelector("#generate-board-btn")
const divsForPhrases = Array.from(bingoBoard.children)
const bingoWin = document.getElementById("bingo-win")
const phrase1 = document.querySelector("#phrase1");
const markedPhrases = []


// config array for phrases

const phrases = ["Hi, who just joined?", "Can you email that to everyone?", "___ , are you there?", "(Sound of someone typing, possibly with a hammer)",
	"Can everyone go on mute please", "(Loud, painful echo", "(Child or animal noise)", "(Someone not muted during a side conversation)", "Hi, can you hear me?",
	"I'm sorry, I was on mute", "Sorry, go ahead", "Can everyone see my screen?", "Sorry, I was having connection issues",
	"So (faded out) I can (interrupted connection) by (cuts out), ok?", "Sorry, I'm late, I had another meeting", "I have a hard stop at..."]


// Generate Bingo Board Button

generateBoardBtn.addEventListener("click", () => {
	divsForPhrases.forEach(div => {
		div.innerText = phrases[divsForPhrases.indexOf(div)]
	})
})

// Event handler for phrase-div's to be marked / unmarked on click

// Update to remove id when unmarked

divsForPhrases.forEach(div => {
	div.addEventListener("click", () => {
		div.classList.toggle("marked")
		markedPhrases.push(div.dataset.id)
		checkIfWin()
	})
});

// Function to check if player has bingo and to display win banner

// Update to make it work when marked Phrases are more than 4

function checkIfWin() {
	let hasBingoHorizontal = false;
	let hasBingoVertical = false;
	let hasBingoDiagonal = false;

	if(markedPhrases.length === 4) {
		markedPhrases.forEach(phrase => {
			if (markedPhrases.indexOf(phrase) === 3) {
				if(phrase.substring(0,1) === markedPhrases[0].substring(0,1)) {
					hasBingoVertical = true;
				} else {
					hasBingoVertical = false;
				}
			}  else {
				if(phrase.substring(0,1) === markedPhrases[markedPhrases.indexOf(phrase)+1].substring(0,1)) {
					hasBingoVertical = true;
				} else {
					hasBingoVertical = false;
				}
			}

			if (markedPhrases.indexOf(phrase) === 3) {
				if(phrase.substring(1,2) === markedPhrases[0].substring(1,2)) {
					hasBingoHorizontal = true;
				} else {
					hasBingoHorizontal = false;
				}
			} else {
				if(phrase.substring(1,2) === markedPhrases[markedPhrases.indexOf(phrase)+1].substring(1,2)) {
					hasBingoHorizontal = true;
				} else {
					hasBingoHorizontal = false;
				}
			}	

		});

		if (hasBingoHorizontal || hasBingoVertical || hasBingoDiagonal) {
			bingoWin.style.visibility = "visible";
		}
	}




	
}