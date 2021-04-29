const quizData = [
    {
        question: 'Which language runs in a web browser',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'What does CSS stand for?',
        a: 'Central Style sheets',
        b: 'Cascading Style Sheets',
        c: 'Cascading Simple Sheets',
        d: 'Cars SUVs Sailboats',
        correct: 'b'
    },
    {
        question: 'What does HTML Stand for?',
        a: 'Hypertext Markup Language',
        b: 'Hypertext markdown Language',
        c: 'Hyperloop  Machine Language',
        d: 'Helicopters Terminals Motorboats',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript Launched',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'None of above',
        correct: 'b'
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submitBtn = document.getElementById('submit')


let currentQuiz = 0

let score = 0

loadquiz()

function loadquiz(){

    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getAnswer(){
    let answer
   
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer

}



submitBtn.addEventListener('click', () =>{
    const answer = getAnswer()

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadquiz()
        }else{
            quiz.innerHTML = `
            <h2>You answerd ${score} / ${quizData.length} question correctly</h2>

            <button onclick = "location.reload()">Reload</button>
            `
        }

    }
    
    
})













































