var myQuestion = [
    {
        question: "Who is Spider-man",
        answers: {
            a: 'Peter Parker',
            b: 'Miles Moreales',
            c: 'Gwinn Stacey',
            d: 'All of the above are a Spider-man (in thier respective universe)'
        },
        correctAnswer: 'd'
    },

    {
        question: "Like uncle Ben always said With Great Power",
        answers: {
            a: 'Comes Great Reward',
            b: 'Comes Great Equality',
            c: 'Comes Great Responsability',
            d: 'Comes Great Sustainability'
        },
        correctAnswer: 'c'
    },
    {
        question: "The first title for a Spiderman Comic was",
        answers: {
            a: 'Ultimate Spiderman',
            b: 'The Fantastic Spiderman',
            c: 'The Amazing Spiderman',
        },
        correctAnswer: 'c'
    },
    {
        question: "What power did the radioactive spider not give Spider-man ",
        answers: {
            a: 'Super Strength',
            b: 'Walll sticking',
            c: 'Spidey-sense',
            d: 'Web Slinging'
        },
        correctAnswer: 'd'
    },
    {
        question: "In the movie Spider-man Homecomeing who becomes Peters mentor",
        answers: {
            a: "Tony Stark",
            b: "Captain America",
            c: "Hawk-eye"
        },
        correctAnswer: 'a'
    },
    {
        question: "Spider-man was created by who?",
        answers: {
            a: 'Grand Lee',
            b: 'Stan Creed',
            c: 'Stan Lee',
        },
        correctAnswer: 'c'
    },
    {
        question: "Who is Peters main love interest",
        answers: {
            a: 'Mary Jane',
            b: 'Gwinn Stacey',
            c: 'Aunt May',
        },
        correctAnswer: 'a'
    }
];
var quizContainer = document.getElementById('quiz');
var resultContainer = document.getElementById('resul');
var submitButton = document.getElementById('submit');
var showResults;

function generateQuiz(questions) {

    function showQuestions() {
        // output storage
        var output = [];
        // each question
        for (var i = 0; i < questions.length; i++) {
            answer = [];
            // each avaible answer to the question
            for (letter in questions[i].answers) {
                // add an html raido button
                answer.push(
                    '<label>'
                    + '<input type= "radio" name= "question' + i + '" value="' + letter + '">'
                    + letter + ' : '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }
            // adding the questions and it answer to out put
            output.push(
                '<div class= "question">' + questions[i].question + '</div>'
                + '<div class= "answers">' + answer.join(' ') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');

    }


    showResults = function() {
        // getting answers from the quizz
        var answerContainer = document.querySelectorAll('.answers');
        // console.log(document.querySelectorAll('.answers'))

        // Answer tracker
        var userAnswer = '';
        var numCorrect = 0;

        //each question
        for (var i = 0; i < myQuestion.length; i++) {

            // find selected answers
            userAnswer = (answerContainer[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            // correct answer
            if (userAnswer === myQuestion[i].correctAnswer) {

                numCorrect++;
                //color answer
                answerContainer[i].style.color = 'lightgreen';
            }
            //if blank 
            else {
                answerContainer[i].style.color = "red"
            }
        }
        //showing the correct answers
        document.querySelector("#results").innerHTML = numCorrect + ' out of ' + questions.length;

    }
    //show the questions
    showQuestions();

    submitButton.onclick = function () {


        showResults(questions);
        submitButton.disabled = true

    }
}
function countdown() {
    var seconds = 60;
    function tick() {
        var counter = document.getElementById("timer");
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            alert("Time is up");
            showResults();
            submitButton.disabled = true
        }
    }
    tick();
}

// start the countdown
countdown();
generateQuiz(myQuestion);