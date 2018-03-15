var countdown;
var intervalId;
var q1 = {
	question: "What does Shepherd Book offer Kaylee as payment for passage? A little cash and ...",
	correct: "Strawberries",
	wrong1: "The Bible",
	wrong2: "Gold",
	wrong3: "a Compression Coil",
	image: "assets/images/Kaylee.gif"
};
var q2 = {
	question: "What is the name of the spaceship?",
	correct: "Serenity",
	wrong1: "Serendipity",
	wrong2: "Serenade",
	wrong3: "Serene",
	image: "assets/images/Serenity.gif"
};
var q3 = {
	question: "In the Unification War, the Allied Planets fought the Independent Planets. What were the Independants also know as?",
	correct: "The Browncoats",
	wrong1: "The Fireflies",
	wrong2: "The Purple Bellies",
	wrong3: "The Rebel Alliance",
	image: "assets/images/Browncoats.gif"
};
var q4 = {
	question: "What is a popular curse word used in the Firefly universe?",
	correct: "Gorram",
	wrong1: "Frak",
	wrong2: "Shiny",
	wrong3: "Gǔnkāi",
	image: "assets/images/gorram.gif"
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
		$('#timesUpModal .modal-body').html('<img src="assets/images/timesUp.gif"><p>The correct answer is </p>' + randomQuestion.correct);
		$('#timesUpModal').modal('show');
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
	countdown = 31; //31 because there is a delay in displaying 30 so it starts at 29.
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
	countdown = 30;
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
		$('#summaryModal .modal-body').html("THE END. Answered Correct: " + numCorrect + " | Answered Wrong: " + numWrong + " | Didn't Answer: " + didntAnswer);
		$('#summaryModal').modal('show');
	}
}

// Body =====================================

resetGame();

$('#a1').on('click', function() {
	if ($('#a1').text().indexOf(randomQuestion.correct) >= 0) {
		clearInterval(intervalId);
		numCorrect++;
		$('#correctAnswerModal .modal-body').html('<p><img src="' + randomQuestion.image +'"</p>');
		$('#correctAnswerModal').modal('show');
	} else {
		clearInterval(intervalId);
		numWrong++;
		$('#wrongAnswerModal .modal-body').html('<img src="assets/images/wrong.gif"><p>The correct answer is </p>' + randomQuestion.correct);
		$('#wrongAnswerModal').modal('show');
	}
});

$('#a2').on('click', function() {
	if ($('#a2').text().indexOf(randomQuestion.correct) >= 0) {
		clearInterval(intervalId);
		numCorrect++;
		$('#correctAnswerModal .modal-body').html('<p><img src="' + randomQuestion.image +'"</p>');
		$('#correctAnswerModal').modal('show');
	} else {
		clearInterval(intervalId);
		numWrong++;
		$('#wrongAnswerModal .modal-body').html('<img src="assets/images/wrong.gif"><p>The correct answer is </p>' + randomQuestion.correct);
		$('#wrongAnswerModal').modal('show');
	}
});

$('#a3').on('click', function() {
	if ($('#a3').text().indexOf(randomQuestion.correct) >= 0) {
		clearInterval(intervalId);
		numCorrect++;
		$('#correctAnswerModal .modal-body').html('<p><img src="' + randomQuestion.image +'"</p>');
		$('#correctAnswerModal').modal('show');
	} else {
		clearInterval(intervalId);
		numWrong++;
		$('#wrongAnswerModal .modal-body').html('<img src="assets/images/wrong.gif"><p>The correct answer is </p>' + randomQuestion.correct);
		$('#wrongAnswerModal').modal('show');
	}
});

$('#a4').on('click', function() {
	if ($('#a4').text().indexOf(randomQuestion.correct) >= 0) {
		clearInterval(intervalId);
		numCorrect++;
		$('#correctAnswerModal .modal-body').html('<p><img src="' + randomQuestion.image +'"</p>');
		$('#correctAnswerModal').modal('show');
	} else {
		clearInterval(intervalId);
		numWrong++;
		$('#wrongAnswerModal .modal-body').html('<img src="assets/images/wrong.gif"><p>The correct answer is </p>' + randomQuestion.correct);
		$('#wrongAnswerModal').modal('show');

	}
});

$('#timesUpModal').on('hide.bs.modal', function() {
	continueGame();
});

$('#correctAnswerModal').on('hide.bs.modal', function() {
	continueGame();
});

$('#wrongAnswerModal').on('hide.bs.modal', function() {
	continueGame();
});

$('#summaryModal').on('hide.bs.modal', function() {
	resetGame();
});




