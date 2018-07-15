let questionNumber = 0;
let score = 0;
let questionArray = [];

function getRandomQuestions() {
	while(questionArray.length < STORE.length) {
		let num = Math.floor(Math.random() * STORE.length);
		if(questionArray.indexOf(num) === -1) {
			questionArray.push(num);
		}
	}
}

function startQuiz() {
	//should trigger the first question to be displayed
	$('.js-start').click(function() {
		$('.startQuiz').addClass('hidden');
		$('.js-answer-form').removeClass('hidden');
		$('.js-answer-form').html(renderQuestion());
		$('.js-question-number').html(`1`);
 		startTimer();
	});
}

function startTimer() {
	let count = 29;
	let timer = setInterval(function() {
		if($('.js-answer-form').find('div').hasClass('js-feedback')) {
			clearInterval(timer);
		}
		else if(count === 0) {
			clearInterval(timer);
			$('.js-answer-form').html(renderFeedback("Incorrect","https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Close_Icon_Dark-512.png","red x icon"));
		}
		else if(count > 0 && count <= 10) {
			$('.js-timer').addClass('warning');
		}
		$('.js-timer').empty();
		$('.js-timer').append(`${count}`);
		count --;
	}, 1000);
}

function renderQuestion() {
	// should render a question to the page

	if (questionNumber < STORE.length) {
		return `<div class="js-question">
        <div>
          <span class="js-timer">30</span>
        </div>
        <form>
          <fieldset>
        	<legend><h2>${STORE[questionArray[questionNumber]].question}</h2></legend>
            ${renderQuestionHtml()}
          </fieldset>
          <button type="submit" class="js-submit button">Submit</button>
        </form>
		</div>`
	}
}

function renderQuestionHtml() {
	let html = "";
	for(i = 0; i < STORE[questionArray[questionNumber]].answers.length; i++) {
		let num = i + 1;
    	html += `<label for="option${num}">
        <input type="radio" name="answer" value="${STORE[questionArray[questionNumber]].answers[i]}" id="option${num}" required><span>${STORE[questionArray[questionNumber]].answers[i]}</span>
        </label>`;
    }
    return html;
}

function renderFeedback(answer,img,alt) {
	if((questionNumber + 1) < STORE.length) {
		return `<div class="js-feedback">
		<div class="feedback-img">
		<img src="${img}" alt="${alt}">
		</div>
		<h2>${answer}</h2>
        <p>${STORE[questionArray[questionNumber]].explanation}</p>
		<button class="js-next button">Next</button>
		</div>`;
	}
	else {
		return `<div class="js-feedback">
		<div class="feedback-img">
		<img src="${img}" alt="${alt}">
		</div>
		<h2>${answer}</h2>
        <p>${STORE[questionArray[questionNumber]].explanation}</p>
		<button class="js-results button">Results</button>
		</div>`;
	}
}

function incrementScore() {
	score ++;
	$('.js-score').html(`${score}`);
}

function incrementQuestionNumber() {
	questionNumber ++;
}

function displayQuestionNumber() {
	$('.js-question-number').html(`${questionNumber + 1}`);
}

function displayCheckedAnswer() {
	$('input[name=answer]:checked').closest('label').addClass('checkedOption');
}

function removeDisplayedAnswer() {
	$('label').removeClass('checkedOption');
}

function handleClickedOption() {
	$('.js-answer-form').on('click','input',function() {
		removeDisplayedAnswer();
		displayCheckedAnswer();
	})
}

function handleSubmitAnswer() {
	//responsible for when users submit an answer
	$('.js-answer-form').on('submit','form',function(event) {
		event.preventDefault();
		let choice = $('input:checked').val();
		let answer = STORE[questionArray[questionNumber]].correctAnswer;
		if(choice === answer) {
			$('.js-answer-form').html(renderFeedback("Correct","https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png","green check mark"));
			incrementScore();
		}
		else {
			$('.js-answer-form').html(renderFeedback("Incorrect","https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Close_Icon_Dark-512.png","red x icon"));
		}
	});
}

/*
This function is no longer needed, as the radio inputs now have regular functionality

function handleNoAnswer() {
	$('.js-answer-form').on('click','.js-submit',function() {
		if($('form input:radio:checked').length < 1) {
			alert("Uh oh! Please select an answer before submitting.")
		}
	});
}
*/

function renderNextQuestion() {
	//should render the next question after "Next" is clicked
	$('.js-answer-form').on('click','.js-next',function() {
		incrementQuestionNumber();
		$('.js-answer-form').html(renderQuestion());
		displayQuestionNumber();
		startTimer();
	});
}

function handleResultsPage() {
	$('.js-answer-form').on('click','.js-results',function() {
		renderResults(score);
	});
}

function renderResultsHtml(img,alt,title,msg,pct) {
	return `<div class="js-result-div">
				<img src="${img}" alt="${alt}">
				<h2>${title}</h2>
		        <p>You got ${pct}% correct! ${msg}</p>
		        <button class="js-restart button">Restart</button>
			</div>`
}

function renderResults(result) {
	let score = Math.floor((result / STORE.length) * 100);

	//still repetitive, but a lot cleaner now.

	if(score === 100) {
		$('.js-answer-form').html(renderResultsHtml(perfect.image,perfect.alt,perfect.title,perfect.msg,score));
	}
	else if(score >= 70 && score < 100) {
		$('.js-answer-form').html(renderResultsHtml(good.image,good.alt,good.title,good.msg,score));
	}
	else if(score >= 50 && score < 70) {
		$('.js-answer-form').html(renderResultsHtml(bad.image,bad.alt,bad.title,bad.msg,score));
	}
	else{
		$('.js-answer-form').html(renderResultsHtml(worst.image,worst.alt,worst.title,worst.msg,score));
	}
}

function handleRestart() {
	$('.js-answer-form').on('click','.js-restart',function() {
		questionNumber = 0;
		score = 0;
		questionArray.length = 0;
		$('.js-question-number').html('0');
		$('.js-score').html('0');
		$('.js-answer-form').addClass('hidden');
		$('.startQuiz').removeClass('hidden');
		getRandomQuestions();
	});
}

function displayTotalQuestions() {
	$('.js-total-questions').html(`${STORE.length}`);
}

function handleQuiz() {
	//fire off quiz functions
	getRandomQuestions();
	startQuiz();
	renderQuestion();
	handleSubmitAnswer();
	renderNextQuestion();
	handleResultsPage();
	handleRestart();
	handleClickedOption();
	displayTotalQuestions();
}

$(handleQuiz);
