const startBtn = document.querySelector('.butt1');
const btngroup = document.querySelector('.btn-group');
const btnExit = document.querySelector('.btn-ext');
const SEC1 = document.querySelector('.SEC1');
const btnctne = document.querySelector('.btn-cnt');
const quizcontainer = document.querySelector('.quiz-container');
const questionContainer = document.querySelector('.questions');
const optionList = document.querySelector('.optin-list');
const questionNumber = document.querySelector('.nbr-of-questions');
const scoreElement = document.querySelector('.Score');
const nxtBtn = document.querySelector('.nxt-btn');


                        // <!--Questions-->
const questions = [
        {

            question: "Qu'est-ce que Java ?",
            answer: 0,
            options: [
                "A. Java est un langage de programmation.",
                "B. Java est un système d'exploitation.",
                "C. Java est un logiciel de traitement de texte."
            ]
        },
        {

            question: "Quelle est la différence entre une classe et un objet en Java ?",
            answer: 2,
            options: [
                "A. Une classe et un objet sont des termes interchangeables en Java.",
                "B. Une classe est un objet et un objet est une méthode en Java.",
                "C. Une classe est un plan et un objet est une chose réelle créée à partir de ce plan."
            ]
        },
        {

            question: "Qu'est-ce qu'une exception en Java ?",
            answer: 1,
            options: [
                "A. Une exception est une condition normale dans un programme Java.",
                "B. Une exception est une erreur dans un programme.",
                "C. Une exception est une fonctionnalité optionnelle dans Java."
            ]
        },
        {
            question: "Qu'est-ce que le polymorphisme en Java ?",
            answer: 2,
            options: [
                "A. Le polymorphisme est une méthode pour restreindre l'accès aux données en Java.",
                "B. Le polymorphisme signifie que chaque classe en Java a la même forme.",
                "C. Le polymorphisme permet à une classe d'avoir différentes formes."
            ]
        },
        {

            question: "Qu'est-ce que l'héritage en Java ?",
            answer:2,
            options: [
                "A. L'héritage est un moyen de stocker des données dans Java.",
                "B. L'héritage permet à une classe de prendre les caractéristiques d'une autre.",
                "C. L'héritage est une méthode pour créer des instances d'objets en Java."
            ]
        }
    ];





let currentQuestionIndex = 0;
let score = 0;

startBtn.addEventListener('click', () => {
    btngroup.classList.add('active');
    SEC1.classList.add('active');
});

btnExit.addEventListener('click',  () => {
    btngroup.classList.remove('active');
    SEC1.classList.remove('active');
});

btnctne.addEventListener('click',  () => {
    quizcontainer.classList.add('active');
    btngroup.classList.remove('active');
    SEC1.classList.remove('active');
    showQuestion(); // Afficher la première question
});

// Fonction pour afficher une question
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    questionNumber.textContent = `Question : ${currentQuestionIndex + 1} / ${questions.length}`;

    // Réinitialisation de la liste des options
    optionList.innerHTML = '';

    // Création et ajout des options à la liste
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.dataset.index = index; // Stockage de l'index de l'option
        optionElement.addEventListener('click', handleOptionClick);
        optionList.appendChild(optionElement);
    });
}

// Fonction pour gérer le clic sur une option
function handleOptionClick(event) {
    const selectedOptionIndex = parseInt(event.target.dataset.index);
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOptionIndex === currentQuestion.answer) {
        score++; // Incrémenter le score si la réponse est correcte
        scoreElement.textContent = `Score : ${score} / ${questions.length}`;
    }

    // Désactiver les options après avoir choisi une réponse
    optionList.querySelectorAll('.option').forEach(option => {
        option.removeEventListener('click', handleOptionClick);
        option.classList.add('disabled');
    });
    event.target.classList.add('selected');
}

// Gestion de l'événement au clic sur le bouton "Next"
nxtBtn.addEventListener('click', () => {
    // Passer à la question suivante
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(); // Afficher la prochaine question
    } else {
        // Afficher le score final lorsque toutes les questions ont été répondues
        alert(`Votre score final est : ${score} / ${questions.length}`);
    }
});


