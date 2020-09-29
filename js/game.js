const question=document.getElementById("question");
const choiceA= document.getElementById("A");
const choiceB= document.getElementById("B");
const choiceC= document.getElementById("C");
const choiceD= document.getElementById("D");
const progress=document.getElementById("progress");
let questions =[
    {question:"complet'All roads leads to'",
    choiceA: "roma",
    choiceB: "Amman",
    choiceC: "Damascuse",
    choiceD: "Beruit",
    answer: A,
    },
{question:"'أكمل 'مثل شمسة",
choiceA: ["أيلول",
choiceB: "كانون",
choiceC: "حزيران",
choiceD: "نيسان",]
answer: B,
},
{question:"A watched' ' never boils",
choiceA: "kettle",
choiceB: "water",
choiceC: "pot",
choiceD: "plate",
answer: C,
},
{question:"Don’t put all of your' ' in one basket",
choiceA: "apple",
choiceB: "oranges",
choiceC: "tomato",
choiceD: "eggs",
answer: D,
},
{question:"You can lead a '  'to water, but you can’t make him drink it",
choiceA: "donkey",
choiceB: "horse",
choiceC: "dog",
choiceB: "cat",
answer: B,
},
];
 function Quiz(question){
     this.question=question,
     this.score=0,
     Quiz.all.push(this);
 }
 Quiz.all=[];
 console.log(Quiz.all);
 for (let i = 0; i <questions.length; i++) {
     new Quiz(questions[i],choiceA[i],choiceB[i],choiceC[i],choiceD[i],) 
     
 }


// sectionEl.addEventListener('click', clickHandler);
// function clickHandler(event) {
//             for (let i = 0; i < Quiz.all.length; i++) {
//                 // if () {
                
                         
//                 // }
        