quizData = [{
    question : "which programming language most used in 2020?",
    a : "Java",
    b : "Javascript",
    c : "Python",
    d : "C/C++",
    correct : "b",
},{
    question : "Who is India prime minister in 2020?",
    a : "Narendra Modi",
    b : "Pranap mugarji",
    c : "A.P.J. Abdul kalam",
    d : "Ragul Gandhi",
    correct : "a" ,
},{
    question : "When India wil get independence?",
    a : "1940",
    b : "1948",
    c : "1949",
    d : "1947",
    correct : "d", 
},{
    question : "CSS stand for?",
    a : "Hypertext Markup language",
    b : "cascading relesheet",
    c : "cascading stylesheet",
    d : "stylesheet",
    correct : "c" ,
},{
    question : "Who is TamilNadu Chief Minister in 2020?",
    a : "O.Pannerselvam",
    b : "M.K.stalin",
    c : "Palanisami",
    d : "Vijayakanth",
    correct : "c" ,
},
];

const questionEle = document.getElementById("question");
const a_option = document.getElementById("a_opt");
const b_option = document.getElementById("b_opt");
const c_option = document.getElementById("c_opt");
const d_option = document.getElementById("d_opt");
const answers = document.querySelectorAll(".answer");
const btn = document.getElementById("submit");
const result = document.getElementById("result-con");

var current = 0;
let score = 0;
function quizLoad(){
    const currentData = quizData[current];
    questionEle.innerHTML = currentData.question;
    a_option.innerHTML = currentData.a;
    b_option.innerHTML = currentData.b;
    c_option.innerHTML = currentData.c;
    d_option.innerHTML = currentData.d;

    btn.addEventListener("click",function(){
        var ans = correctAns();
        if(ans){
            if(ans.id == current.correct){
                score++;
            }
            current += 1;
            deSelect();
            if(current < quizData.length){
                quizLoad();
            }
            else{
                result.innerHTML = '<h2 style="text-align:center;"> You Finished Score is '+score+ '</h2>';
            }
        }
    });
}
quizLoad();

function correctAns(){
    var an = undefined;
    answers.forEach(function(answer){
        if(answer.checked){
            an = answer.id;
        }
    });
    return an;
}
function deSelect(){
    answers.forEach(function(answer){
        answer.checked = false;
    });
}