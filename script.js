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
                "A. Une classe et un objet sont la même chose.",
                "B. Une classe est un objet et un objet est une méthode en Java.",
                "C. Une classe est un modèle à partir duquel des objets sont créés, tandis qu'un objet est une instance spécifique d'une classe."
            ]
        },
        {

            question: "Comment déclarer un tableau d'entiers en Java ?",
            answer: 1,
            options: [
                "A. array int[];",
                "B. int[] array;",
                "C. array[] int;"
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

            question: "Quelle est la méthode utilisée pour obtenir la longueur d'une chaîne de caractères en Java ? ?",
            answer:2,
            options: [
                "A. size()",
                "B. count()",
                "C. length() ."
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
    showQuestion();
});

// Fonction pour afficher une question
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    questionNumber.textContent = `Question : ${currentQuestionIndex + 1} / ${questions.length}`;

    optionList.innerHTML = '';


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
        score++;
        scoreElement.textContent = `Score : ${score} / ${questions.length}`;
    }

    optionList.querySelectorAll('.option').forEach(option => {
        option.removeEventListener('click', handleOptionClick);
        option.classList.add('disabled');
    });
    event.target.classList.add('selected');
}


nxtBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert(`Your final score is : ${score} / ${questions.length}`);
    }
});


