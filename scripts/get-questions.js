var baseURL = 'https%3A%2F%2Fopentdb.com%2Fapi.php%3Famount%3D1',
    answerText = $('.answer'),
    getQuestionSuccess,
    responseCode,
    question,
    answers,
    correctAnswer,
    token,
    url
;


var steps = [
  {
    question: "C'est quoi une fourchette ?",
    incorrectAnswers: ['un aliment', 'ca existe pas', 'Réponse D'],
    correctAnswer: 'un truc pour manger'
  },{
    question: "Qui est chef damien ?",
    incorrectAnswers: ['Qui ça ?', 'Un animateur', 'Ton boss'],
    correctAnswer: 'Un cuisto'
  },{
    question: "Quelle est la bonne réponse ?",
    incorrectAnswers: ['Réponse fausse X', 'Réponse fausse Y', 'Réponse fausse Z'],
    correctAnswer: 'Réponse correcte'
  },{
    question: "Quelle est la bonne réponse ?",
    incorrectAnswers: ['Réponse fausse X', 'Réponse fausse Y', 'Réponse fausse Z'],
    correctAnswer: 'Réponse correcte'
  },{
    question: "Quelle est la bonne réponse ?",
    incorrectAnswers: ['Réponse fausse X', 'Réponse fausse Y', 'Réponse fausse Z'],
    correctAnswer: 'Réponse correcte'
  },{
    question: "Quelle est la bonne réponse ?",
    incorrectAnswers: ['Réponse fausse X', 'Réponse fausse Y', 'Réponse fausse Z'],
    correctAnswer: 'Réponse correcte'
  },{
    question: "Quelle est la bonne réponse ?",
    incorrectAnswers: ['Réponse fausse X', 'Réponse fausse Y', 'Réponse fausse Z'],
    correctAnswer: 'Réponse correcte'
  },{
    question: "Quelle est la bonne réponse ?",
    incorrectAnswers: ['Réponse fausse X', 'Réponse fausse Y', 'Réponse fausse Z'],
    correctAnswer: 'Réponse correcte'
  },{
    question: "Quelle est la bonne réponse ?",
    incorrectAnswers: ['Réponse fausse X', 'Réponse fausse Y', 'Réponse fausse Z'],
    correctAnswer: 'Réponse correcte'
  },{
    question: "Quelle est la bonne réponse ?",
    incorrectAnswers: ['Réponse fausse X', 'Réponse fausse Y', 'Réponse fausse Z'],
    correctAnswer: 'Réponse correcte'
  },{
    question: "Quelle est la bonne réponse ?",
    incorrectAnswers: ['Réponse fausse X', 'Réponse fausse Y', 'Réponse fausse Z'],
    correctAnswer: 'Réponse correcte'
  },{
    question: "Quelle est la bonne réponse ?",
    incorrectAnswers: ['Réponse fausse X', 'Réponse fausse Y', 'Réponse fausse Z'],
    correctAnswer: 'Réponse correcte'
  },{
    question: "Quelle est la bonne réponse ?",
    incorrectAnswers: ['Réponse fausse X', 'Réponse fausse Y', 'Réponse fausse Z'],
    correctAnswer: 'Réponse correcte'
  },{
    question: "Quelle est la bonne réponse ?",
    incorrectAnswers: ['Réponse fausse X', 'Réponse fausse Y', 'Réponse fausse Z'],
    correctAnswer: 'Réponse correcte'
  },{
    question: "Quelle est la bonne réponse ?",
    incorrectAnswers: ['Réponse fausse X', 'Réponse fausse Y', 'Réponse fausse Z'],
    correctAnswer: 'Réponse correcte'
  }
]

function getQuestion( difficulty ) {
  var step = steps[questionNum-1];
  question = step.question;
  answers = step.incorrectAnswers;
  correctAnswer = Math.floor(Math.random()*4);
  answers.splice(correctAnswer,0,step.correctAnswer);
  correctAnswer = ['A','B','C','D'][correctAnswer];
  // ...and then advertise that the request is complete
  getQuestionSuccess = true;
}

// function to display question & answer text and begin the countdown
function startQuestion() {
  $('#question').html(question);
  for (var i=0; i<4; i++)
    answerText[i].innerHTML = answers[i];
  startTimer(timeToAnswer);
  // also highlight the current question & value on the money ladder
  $('#q'+questionNum).attr('class','selected');
}

