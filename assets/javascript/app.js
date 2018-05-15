$(document).ready(function () {
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var sec = 19;
	var queuePos = 0;
	var x;

	var questions = [
		q1 = {
			q: "Who is the creator of James Bond?",
			a1: "Donald Hamilton",
			a2: "Ian Fleming",
			a3: "Sir Arthur Conan Doyle",
			a4: "Tom Clancy",
			correctAnswer: "Ian Fleming"
		},
		q2 = {
			q: "What is the title of the first James Bond novel?",
			a1: "Casino Royal",
			a2: "You Only Live Twice",
			a3: "Goldfinger",
			a4: "From Russia, with Love",
			correctAnswer: "Casino Royal"
		},
		q3 = {
			q: "How many James Bond films did Sean Connery take part in?",
			a1: "6",
			a2: "9",
			a3: "1",
			a4: "3",
			correctAnswer: "6"
		},
		q4 = {
			q: "James Bond is a British agent, who does he work for?",
			a1: "Control",
			a2: "Scotland Yard",
			a3: "M16",
			a4: "The Queen's Guard",
			correctAnswer: "M16"
		},
		q5 = {
			q: "Who is the evil villain in the Bond story Live and Let Die?",
			a1: "Max Zorin",
			a2: "General Gogol",
			a3: "Mr.Big",
			a4: "Karl Stromberg",
			correctAnswer: "Mr. Big"
		},
		q6 = {
			q: "Which of these Bond movies features the evil group SPECTRE?",
			a1: "The Man with the Golden Gun",
			a2: "Dr. No",
			a3: "Thunderball",
			a4: "You Only Live Twice",
			correctAnswer: "Thunderball"
		},
		q7 = {
			q: "In the classic Bond movie Diamonds are Forever, what is the name of the group, which is smuggling diamonds?",
			a1: "SPECTRE",
			a2: "The Spangled Mob",
			a3: "The KGB",
			a4: "The Renards",
			correctAnswer: "The Spangled Mob"
		},
		q8 = {
			q: "In the James Bond story You Only Live Twice, James is injured in an explosion. What injury does he suffer?",
			a1: "Amnesia",
			a2: "Temporary blindness",
			a3: "A broken hand",
			a4: "He loses two fingers",
			correctAnswer: "Amnesia"
		},
		q9 = {
			q: "In the James Bond movie, The World is Not Enough, whom is Bond supposed to protect?",
			a1: "King Edward",
			a2: "President Ford",
			a3: "Bill Gates",
			a4: "Elektra King",
			correctAnswer: "Elektra King"
		}
	];

	function displayQ() {

		
		$("#question").html(questions[queuePos].q);
		$("#a1").html("<button>" + questions[queuePos].a1 + "</button>");
		$("#a2").html("<button>" + questions[queuePos].a2 + "</button>");
		$("#a3").html("<button>" + questions[queuePos].a3 + "</button>");
		$("#a4").html("<button>" + questions[queuePos].a4 + "</button>");

	}

	function displayAnswer() {
		
		if (sec === -1) {
			$("#question").html("You ran out of time!");
			$("#a1").html("The correct answer is:");
			$("#a2").html(questions[queuePos].correctAnswer);
			$("#a3").empty();
			$("#a4").empty();
			unanswered++;
		}
		else if ($(this).text() === questions[queuePos].correctAnswer) {
			$("#question").html("Correct!");
			$("#a1").html("The answer is:");
			$("#a2").html(questions[queuePos].correctAnswer);
			$("#a3").empty();
			$("#a4").empty();
			correct++;
		}
		else if ($(this).text() != questions[queuePos].correctAnswer) {
			$("#question").html("Incorrect!");
			$("#a1").html("The correct answer is:");
			$("#a2").html(questions[queuePos].correctAnswer);
			$("#a3").empty();
			$("#a4").empty();
			incorrect++;
		}

		queuePos++;
		clearInterval(x);
		sec = 19;
		x = setTimeout(displayQ, 3000);
		x = setTimeout(gameTimer, 3000);

	}

	function displayResults() {
		$("#question").empty();
		$("#a1").html("Correct Answers: " + correct);
		$("#a2").html("Incorrect Answers: " + incorrect);
		$("#a3").html("Unanswered: " + unanswered);
		$("#a4").empty();
		$("#time-left").empty();		
	}

	function gameTimer() {
		if (queuePos === questions.length) {
			displayResults();
			return;
		}
		$("#time-left").html("<h2>Time remaining: 20</h2>");
		x = setInterval(function () {
			$("#time-left").html("<h2>Time remaining: " + sec + "</h2>");
			sec--;
			if (sec === -1) {
				clearInterval(x);
				displayAnswer();
				sec = 19;
			}
		}, 1000);

	}

	$("#start").on("click", function () {
		gameTimer();
		displayQ();
	});

	$("#a1").on("click", displayAnswer);
	$("#a2").on("click", displayAnswer);
	$("#a3").on("click", displayAnswer);
	$("#a4").on("click", displayAnswer);
});