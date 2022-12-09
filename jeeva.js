
var questionBank= [
    {
        question : 'capital of tamil nadu?',
        option : ['Tamil nadu','Chennai','Dharmapuri','Namakkal'],
        answer : 'Chennai'
    },
    {
        question : 'Tamil nadu largest city?',
        option : ['Chennai','Trichy','Coimbatore','Ramanathapuram'],
        answer : 'Ramanathapuram'
    },
    {
        question : 'Tamil nadu cheif minister?',
        option : ['Udhayanidhi Stalin','Edappadi k.Palaniswami','O.Panneerselvam','None of the above'],
        answer : 'None of the above'
    },
    {
        question : 'Total number of districts in tamilnadu',
        option : ['28','29','32','31'],
        answer : '32'
    },
    {
        question : 'Who was the author of "THIRUKURAL"?',
        option : ['Kambar','Thiruvalluvar','Bharati','Bharathidasan'],
        answer : 'Thiruvalluvar'
    },
    {
        question : 'Sum of two number 5,7 ?',
        option : ['5','7','12','15'],
        answer : '12'
    },
    {
        question : '5 + 6 - (6/2) = ?',
        option : ['10','9','8','7'],
        answer : '8'
    },
    {
        question : 'Who discovered Newtons law?',
        option : ['Nikola Tesla','Albert Einstein','Faraday','Isaac Newton'],
        answer : 'Isaac Newton'
    },
    {
        question : '1,3,5,7, Next number ?',
        option : ['11','10','9','8'],
        answer : '11'
    },
    {
        question : 'Udayagiri fort is located in ?',
        option : ['Ramnad','Tirunelveli','Sivagangai','Kanniyakumari'],
        answer : 'Kanniyakumari'
    },
    {
        question : 'How many major harbours are there in tamil nadu?',
        option : ['3','4','5','5'],
        answer : '3'
    },
    {
        question : '36,34,30,28,24, Next number ?',
        option : ['20','22','23','21'],
        answer : '22'
    },
    {
        question : 'which sports is recoganised as the state game in tamil nadu ?',
        option : ['Chess','Football','Cricket','Kabaddi'],
        answer : 'Kabaddi'
    },
    {
        question : 'World fastest man?',
        option : ['Usain Bolt','Allan Wells','Andre De','None of the above'],
        answer : 'Usain Bolt'
    },
    {
        question : 'Usain Bolt world record in 100 m ?',
        option : ['10 s','9.48 s','9.58 s','9.38 s'],
        answer : '9.58 s'
    },
    {
        question : 'How many times usain bolt become olympic champion?',
        option : ['8','11','10','15'],
        answer : '8'
    },
    {
        question : 'THiruvasagam was translated into english by ?',
        option : ['Kambar','Bharati','Gandi','G.U.Pope'],
        answer : 'G.U.Pope'
    },
    {
        question : 'Who was the author of Kalingattuparani ?',
        option : ['Kambar','Bharati','Jayamkondar','Bharathidasan'],
        answer : 'Jayamkondar'
    },
    {
        question : 'Long jump world record ?',
        option : ['8.95','9','9.05','9.10'],
        answer : '8.95'
    },
    {
        question : 'What is the rank of tamil nadu among indian states in terms of area ?',
        option : ['10','11','12','13'],
        answer : '11'
    },
]  
function shuffleArray(questionBank) {
    for (var i = questionBank.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));

        var temp = questionBank[i];
        questionBank[i] = questionBank[j];
        questionBank[j] = temp;
    }

    return questionBank;
}
shuffleArray(questionBank)

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}
next.addEventListener('click',nextQuestion);
function backToQuiz(){
    location.reload();
}
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}
displayQuestion();