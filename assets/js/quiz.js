/* Quiz question list */

let questions = [{
    question: "https://flagcdn.com/w160/de.png",
    answers: ["Ecuador", "Germany", "Chile", "Cuba"],
    correct: "Germany",
},
{
    question: "https://flagcdn.com/w160/gb.png",
    answers: ["Ghana", "Fiji", "Spain", "United Kingdom"],
    correct: "United Kingdom",
},
{
    question: "https://flagcdn.com/w160/gr.png",
    answers: ["Hong Kong", "Greece", "Indonesia", "Algeria"],
    correct: "Greece",
},
{
    question: "https://flagcdn.com/w160/kp.png",
    answers: ["North Korea", "Kazakhstan", "Cambodia", "Greenland"],
    correct: "North Korea",
},
{
    question: "https://flagcdn.com/w160/it.png",
    answers: ["Jamaica", "Liberia", "Lebanon", "Italy"],
    correct: "Italy",
},
{
    question: "https://flagcdn.com/w160/kw.png",
    answers: ["Liechtenstein", "Luxembourg", "Kuwait", "Libya"],
    correct: "Kuwait",
},
{
    question: "https://flagcdn.com/w160/lk.png",
    answers: ["Myanmar", "Malta", "Madagascar", "Sri Lanka"],
    correct: "Sri Lanka",
},
{
    question: "https://flagcdn.com/w160/np.png",
    answers: ["Nepal", "Maldives", "Niger", "Mexico"],
    correct: "Nepal",
},
{
    question: "https://flagcdn.com/w160/no.png",
    answers: ["Finland", "Norway", "Sweden", "Denmark"],
    correct: "Norway",
},
{
    question: "https://flagcdn.com/w160/iq.png",
    answers: ["Iraq", "Iran", "Jordan", "Kuwait"],
    correct: "Iraq",
},
{
    question: "https://flagcdn.com/w160/lv.png",
    answers: ["Lithuania", "Latvia", "Estonia", "Austria"],
    correct: "Latvia",
},
{
    question: "https://flagcdn.com/w160/cu.png",
    answers: ["Costa Rica", "Ecuador", "Dominican Republic", "Cuba"],
    correct: "Cuba",
},
{
    question: "https://flagcdn.com/w160/au.png",
    answers: ["United Arab Emirates", "Cape Verde", "Australia", "Estonia"],
    correct: "Australia",
},
{
    question: "https://flagcdn.com/w160/gy.png",
    answers: ["Honduras", "Haiti", "Jamaica", "Guyana"],
    correct: "Guyana",
},
{
    question: "https://flagcdn.com/w160/mc.png",
    answers: ["Madagascar", "Moldova", "Monaco", "Myanmar"],
    correct: "Monaco",
},
{
    question: "https://flagcdn.com/w160/ne.png",
    answers: ["Niger", "Peru", "Poland", "Paraguay"],
    correct: "Niger",
},
{
    question: "https://flagcdn.com/w160/si.png",
    answers: ["Slovakia", "Serbia", "Bosnia and Herzegovina", "Slovenia"],
    correct: "Slovenia",
},
{
    question: "https://flagcdn.com/w160/cm.png",
    answers: ["Cook Islands", "Greenland", "Cameroon", "Panama"],
    correct: "Cameroon",
},
{
    question: "https://flagcdn.com/w160/rs.png",
    answers: ["Russia", "Slovenia", "Slovakia", "Serbia"],
    correct: "Serbia",
},
];

/* General variable definition */
let question = document.getElementById("question-img");
/* Create a random number from 0 to count of questions */
let questionNumber = Math.floor(Math.random() * questions.length);
let answ1 = document.getElementById("answ1");
let answ2 = document.getElementById("answ2");
let answ3 = document.getElementById("answ3");
let answ4 = document.getElementById("answ4");
let answers = document.getElementsByClassName("answer");

/* Function completed when new question needs too be displayed */
function getNewQuestion() {
  questionNumber = Math.floor(Math.random() * questions.length);
  /* lines for filling the question and answer fields */
  question.src = questions[questionNumber].question;
  answ1.innerHTML = questions[questionNumber].answers[0];
  answ2.innerHTML = questions[questionNumber].answers[1];
  answ3.innerHTML = questions[questionNumber].answers[2];
  answ4.innerHTML = questions[questionNumber].answers[3];
  currentCorrect = questions[questionNumber].correct;

  /* Finding particular correct answer */
  currentCorrect = questions[questionNumber].correct;
}

getNewQuestion();


