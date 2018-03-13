var countdown;
var intervalId;
var q1 = {
	question: "Question 1?",
	correct: "correct answer",
	wrong1: "wrong1",
	wrong2: "wrong2",
	wrong3: "wrong3",
};
var q2 = {
	question: "Question 2?",
	correct: "correct answer",
	wrong1: "wrong1",
	wrong2: "wrong2",
	wrong3: "wrong3",
};
var q3 = {
	question: "Question 3?",
	correct: "correct answer",
	wrong1: "wrong1",
	wrong2: "wrong2",
	wrong3: "wrong3",
};
var q4 = {
	question: "Question 4?",
	correct: "correct answer",
	wrong1: "wrong1",
	wrong2: "wrong2",
	wrong3: "wrong3",
};
var q5 = {
	question: "Question 5?",
	correct: "correct answer",
	wrong1: "wrong1",
	wrong2: "wrong2",
	wrong3: "wrong3",
};
var q6 = {
	question: "Question 6?",
	correct: "correct answer",
	wrong1: "wrong1",
	wrong2: "wrong2",
	wrong3: "wrong3",
};
var questions = [q1,q2,q3,q4,q5,q6];
var randomQuestion;
var qGenerator = randomNoRepeats(questions);
var questionCounter = 1;
var numCorrect = 0;
var numWrong = 0;
var didntAnswer = 0;


// Functions ================================

function timer() {
	clearInterval(intervalId);
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	countdown--;

	$('#time').html(countdown);

	if (countdown === 0) {
		clearInterval(intervalId);
		didntAnswer++;
		continueGame();
	}
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// while elements remaining to shuffle
	while (currentIndex !== 0) {
		// pick a remaining element
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		// swap it with the current element
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

function newQuestion() {
	countdown = 6; //31 because there is a delay in displaying 30 so it starts at 29.
	timer();
	randomQuestion = qGenerator();
	$('#question').html(randomQuestion.question);

	var randomAnswers = [randomQuestion.correct, randomQuestion.wrong1, randomQuestion.wrong2, randomQuestion.wrong3];

	randomAnswers = shuffle(randomAnswers);

	$('#a1').html(randomAnswers[0]);
	$('#a2').html(randomAnswers[1]);
	$('#a3').html(randomAnswers[2]);
	$('#a4').html(randomAnswers[3]);
}

function randomNoRepeats(array) {
	var copy = array.slice(0);
	return function() {
		if (copy.length < 1) {
			copy = array.slice(0);
		}
		var index = Math.floor(Math.random() * copy.length);
		var item = copy[index];
		copy.splice(index, 1);
		return item;
	};
}

function resetGame() {
	countdown = 5;
	questionCounter = 1;
	numCorrect = 0;
	numWrong = 0;
	didntAnswer = 0;
	$('#time').html(countdown)
	newQuestion();
	timer();
}

function continueGame() {
	if (questionCounter < 6){
		questionCounter++;
		newQuestion();
	} else {
		alert("THE END. Answered Correct: " + numCorrect + " | Answered Wrong: " + numWrong + " | Didn't Answer: " + didntAnswer);
		resetGame();
	}
}

// Body =====================================

resetGame();

$('#a1').on('click', function() {
	if ($('#a1').text().indexOf(randomQuestion.correct) >= 0) {
		alert("correct");
		numCorrect++;
		continueGame();
	} else {
		alert("WRONG");
		numWrong++;
		continueGame();
	}
});

$('#a2').on('click', function() {
	if ($('#a2').text().indexOf(randomQuestion.correct) >= 0) {
		alert("correct");
		numCorrect++;
		continueGame();
	} else {
		alert("WRONG");
		numWrong++;
		continueGame();
	}
});

$('#a3').on('click', function() {
	if ($('#a3').text().indexOf(randomQuestion.correct) >= 0) {
		alert("correct");
		numCorrect++;
		continueGame();
	} else {
		alert("WRONG");
		numWrong++;
		continueGame();
	}
});

$('#a4').on('click', function() {
	if ($('#a4').text().indexOf(randomQuestion.correct) >= 0) {
		alert("correct");
		numCorrect++;
		continueGame();
	} else {
		alert("WRONG");
		numWrong++;
		continueGame();
	}
});

