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
    question: "Lequel de ces prénoms n'a jamais été porté au pôle food ?",
    incorrectAnswers: ['Silvère', 'Coraline', 'Eloïse'],
    correctAnswer: 'Joséphine'
  },{
    question: "Que fait-on quand on &quot;lute&quot; ?",
    incorrectAnswers: ['On galère', 'On sifflotte','On coupe ce qui dépasse'],
    correctAnswer: 'On ferme hermétiquement'
  },{
    question: " &quot;Tailler une carotte en paysanne &quot;, c'est :",
    incorrectAnswers: ['Une expression graveleuse', 'Couper une carotte déguisée en paysanne', 'Couper une carotte en longueur'],
    correctAnswer: 'Découper une carotte en petits triangles'
  },{
    question: "Quelle chaîne Youtube a le plus d'abonnés ?",
    incorrectAnswers: ['750g', 'Norman', 'Cyprien'],
    correctAnswer: 'Squeezie'
  },{
    question: "En novembre 2018, quelle recette revisitée sur 750g a provoqué une polémique sur internet ?",
    incorrectAnswers: ['Le wrap d\'agneau', 'Les pommes noisettes', 'La quiche lorraine'],
    correctAnswer: 'Le rougail saucisse'
  },{
    question: "Combien de fois William a-t-il quitté le pôle food ?",
    incorrectAnswers: ['1 fois', '3 fois', 'Il est parti ??'],
    correctAnswer: '2 fois'
  },{
    question: "Lequel de ces fromages n'est pas corse ?",
    incorrectAnswers: ['Le Brocciu', 'Le Casgiu merzu', 'Le Sartinesu'],
    correctAnswer: 'Le Casu Agedu'
  },{
    question: "Quelle est la suite des paroles de cette chanson de Lorie :  &quot;Moi j'ai besoin d'amour...&quot;",
    incorrectAnswers: ['... tous les jours', '... j\'suis comme ça', '... et ça me va'],
    correctAnswer: '... des bisous, des câlins'
  },{
    question: "Qu'est-ce qu'un rondeau ?",
    incorrectAnswers: ['Un cercle en métal', 'Un moule rond', 'Une pince de précision'],
    correctAnswer: 'Une marmite basse'
  },{
    question: "Qui a le plus d'ancienneté sur sa fiche de paie ?",
    incorrectAnswers: ['Caroline', 'Pascale', 'Aurore'],
    correctAnswer: 'Gwendal'
  },{
    question: "Qui a dit \"Dès qu’on pète un coup ça envoie un mail\"",
    incorrectAnswers: ['Alexis', 'Marie L', 'Anasthasia'],
    correctAnswer: 'Laurent'
  },{
    question: "Quels sont les noms des enfants d'Alain Ducasse ?",
    incorrectAnswers: ['Gaspard, Melchior et Baltazar', 'Nicolas, Julien et Corinne', 'Yüna, Arthus et Gwenaëlle'],
    correctAnswer: 'Arzhel, Daé et Tenzor'
  },{
    question: "Au Noël 2017, quelle était la couleur du string de François ?",
    incorrectAnswers: ['Rouge', 'Léopard', 'Doré'],
    correctAnswer: 'Argenté'
  },{
    question: "En 2019, combien d'étoiles Michelin Alain Ducasse détient-il ?",
    incorrectAnswers: ['3 étoiles', '8 étoiles', '10 étoiles'],
    correctAnswer: '18 étoiles'
  },{
    question: "Quelle est la date de mise en ligne de l'Académie du Goût ?",
    incorrectAnswers: ['Le lundi 9 juin 2014', 'Le mardi 10 juin 2014', 'Le lundi 23 juin 2014'],
    correctAnswer: 'Le mardi 24 juin 2014'
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

