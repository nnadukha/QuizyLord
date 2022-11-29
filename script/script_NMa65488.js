window.addEventListener("DOMContentLoaded",function(){
 /*Questions*/
let Questions = [
  {
    question: 'Number of primitive data types in Java are?',
    a: '6',
    b: '7 ',
    c: '8',
    d: '9',
    correct: 'c',
  },
  {
    question: 'Arrays in java are-',
    a: 'Object references',
    b: 'Objects ',
    c: 'Primitive data type',
    d: 'None',
    correct: 'b',
  },
  {
    question: 'Identify the modifier which cannot be used for constructor.',
    a: 'public ',
    b: 'protected',
    c: 'private',
    d: 'static',
    correct: 'd',
  },
];

/*Define all elements */
var question = document.getElementById('question');
var a = document.getElementById('answer0');
var b = document.getElementById('answer1');
var c = document.getElementById('answer2');
var d = document.getElementById('answer3');
var btn = document.getElementById('myBttn');
var allAnswers = document.querySelectorAll('.answer');
var imgSources = ["images/villain.png", //0
                    "images/villain_nohead.png", //1
                    "images/villain_noheadarm.png", //2
                    "images/villain_noarm.png", //3
                    "images/villain_noheadleg.png", //4
                    "images/villain_nolegarm.png", //5
                    "images/villain_nolegs.png"]; //6
var container = document.getElementById('container');
var result_placeholder = document.getElementById('result_placeholder');
//video with congrats
var video = document.getElementById('videoYT');
//initial image of the villain
var img = document.getElementById('inform');
//nohead img
var img2 = document.getElementById('inform2');
//no legs img
var img3 = document.getElementById('inform3');
//no arms img
var img4 = document.getElementById('inform4');
//body part areas of the first image
var head = document.getElementById('headarea');
var legs = document.getElementById('legsarea');
var hands = document.getElementById('handsarea');
//areas of the images without 1 body part
var legs2 = document.getElementById('legsarea2');
var hands2 = document.getElementById('handsarea2');
var head3 = document.getElementById('headarea3');
var hands3 = document.getElementById('handsarea3');
var head4 = document.getElementById('headarea4');
var legs4 = document.getElementById('legsarea4');
//images wihtout 2 body parts
var noheadlegimg = document.getElementById('noheadleg');
var noheadarmimg = document.getElementById('noheadarm');
//var nolegarmimg = document.getElementById('nolegarm'); //unused
//create placeholder for the text below answers 
let finalScore = "";
let finalScoreH = document.createElement('h2');
result_placeholder.appendChild(finalScoreH);
let index = 0;
let score = 0;
//get the selected answer
function selected() {
let answers = undefined;
allAnswers.forEach((e) => {
  if (e.checked) {
    answers = e.id;
  }
});
return answers;
}
//uncheck all radios
function uncheck() {
allAnswers.forEach((e) => {
  e.checked = false;
});
}
//load the quiz data
function getquiz() {
  uncheck();
question.innerText = Questions[index].question;
a.innerText = Questions[index].a;
b.innerText = Questions[index].b;
c.innerText = Questions[index].c;
d.innerText = Questions[index].d;
}

function runValidate() {
  var answeradios = document.getElementsByName("answer");
  var bool = false;

  var i = 0;
  while (!bool && i < answeradios.length) {
      if (answeradios[i].checked) bool = true;
      i++;        
  }

  if (!bool) finalScoreH.innerText = "Please choose your answer!";
  return bool;
}



//move forward the quiz
function startquiz() {
btn.addEventListener('click', () => {
  if(runValidate()){
    finalScoreH.innerText = "";
  let answers = selected();
  if (answers) {
    finalScoreH.innerText = "";
    if (answers == Questions[index].correct) {
      score++;
      firstKill();
      if(score == 2 && index == 1){
        console.log("this is second kill");
        secondKill();
      }
    } 
  } 
  index++;
  if (index < Questions.length) {
    getquiz();
  } else {
    btn.style.display = "none";
    if(score< 2){
      finalScore = 'You lost this battle! \n Your final score: ' + score + " out of 3 \n No more tries(((";
        img2.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "none";
        img.style.display = "flex";
        legs.remove();
        hands.remove();
        head.remove();
        img.style.animationName = "rotate";
        img.style.animationDuration = "10s";
        img.style.animation = "slide 10s linear 0s infinite";
        let laugh = new Audio('media/Laughter.m4a')
        laugh.play()

    } else if (score>= 2 && score < 3) {
      finalScore = 'You were so close! \n Your final score: ' + score+ " out of 3 \n Wanna try again?";
      let tryAgainBtn = document.createElement('input');
      tryAgainBtn.type = "button";
      tryAgainBtn.value = "Try Again";
      tryAgainBtn.id = "tryAgainBtn";
      result_placeholder.appendChild(tryAgainBtn);
      tryAgainBtn.addEventListener("click", function reload(){
        location.reload();
      })
    } else {
      finalKill();
      finalScore = 'You won!';
      let finalScoreH = document.createElement('h2');
      container.appendChild(finalScoreH);
      img.remove();
      video.style.display = "block";
      video.src += "?autoplay=1";
    }
      finalScoreH.innerText = finalScore;
  }
}
});


}
getquiz();
startquiz();

/* below is the most painful code */

//first part removal
function firstKill(){
  finalScoreH.innerText = "Correct! Now hit the villain wherever you want!";
  console.log("remove first part please");
  //remove head first
function removeHead(){
  img.style.display="none";
  legs.remove();
  hands.remove();
  head.remove();
  img2.style.display="flex";
  finalScoreH.innerText = "Keep going";
}
head.addEventListener("click", removeHead);

//remove legs first
function removeLegs(){
  img.style.display="none";
  legs.remove();
  hands.remove();
  head.remove();
  img3.style.display="flex";
  finalScoreH.innerText = "Keep going";
}
legs.addEventListener("click", removeLegs);

//remove arms first
function removeHands(){
  img.style.display="none";
  legs.remove();
  hands.remove();
  head.remove();
  img4.style.display="flex";
  finalScoreH.innerText = "Keep going";
}
hands.addEventListener("click", removeHands);
}

//second part removal
function secondKill(){
  finalScoreH.innerText = "Correct! Hit the villain one more time!";
  console.log("remove second part please");
  function removeHeadLegs(){
    //both approaches work!
    img2.style.display="none";
    noheadlegimg.style.display="flex";
    //img2.src = imgSources[4];
    // legs2.remove();
    // hands2.remove();
    finalScoreH.innerText = "Keep going";
  }
  legs2.addEventListener("click", removeHeadLegs);
  function removeHeadArms(){
    img2.style.display="none";
    noheadarmimg.style.display="flex";
    // img2.src = imgSources[2];
    // legs2.remove();
    // hands2.remove();
    finalScoreH.innerText = "Keep going";
  }
  hands2.addEventListener("click", removeHeadArms);

  function removeLegsHead(){
    img3.src = imgSources[4];
    head3.remove();
    hands3.remove();
    finalScoreH.innerText = "Keep going";
  }
  function removeArmsLegs(){
    img3.src = imgSources[5];
    head3.remove();
    hands3.remove();
    finalScoreH.innerText = "Keep going";
  }
  head3.addEventListener("click", removeLegsHead);
  hands3.addEventListener("click", removeArmsLegs);
  function removeArmsHead(){
    img4.src = imgSources[2];
    legs4.remove();
    head4.remove();
    finalScoreH.innerText = "Keep going";
  }
  function removeLegsArms(){
    img4.src = imgSources[5];
    head4.remove();
    legs4.remove();
    finalScoreH.innerText = "Keep going";
  }
    head4.addEventListener("click", removeArmsHead);
    legs4.addEventListener("click", removeLegsArms);
    console.log("killed second time");
}

//remove image fully
function finalKill(){
  document.querySelector('figcaption').style.display="none";
  noheadlegimg.style.display="none";
  noheadarmimg.style.display="none";
  //nolegarmimg.style.display="none";
}


});


/*Another version, where parts disappear as the game progresses*/
//  let imgIndex = 0;
// function startquiz() {
//   btn.addEventListener('click', () => {
//     let answers = selected();
  
//     if (answers) {
//       if (answers == Questions[index].correct) {
//         score++;
//         imgIndex++;
        
//       } else{
//         imgIndex = imgIndex;
//       }
//       img.src = imgSources[imgIndex];
//       //console.log(imgIndex);
//     }
//     index++;
//     let finalScore = "";
//     let finalScoreH = document.createElement('h2');
//     container.appendChild(finalScoreH);
//     if (index < Questions.length) {
//       getquiz();
//     } else {
//       if(imgIndex< 2){
//         finalScore = 'You lost this battle! \n Your final score: ' + score + " out of 3 \n No more tries(((";
  
//       } else if (imgIndex>= 2 && imgIndex < 3) {
//         finalScore = 'You were so close! \n Your final score: ' + score+ " out of 3 \n Wanna try again?";
//         let tryAgainBtn = document.createElement('input');
//         tryAgainBtn.type = "button";
//         tryAgainBtn.value = "Try Again";
//         tryAgainBtn.id = "tryAgainBtn";
//         container.appendChild(tryAgainBtn);
//         tryAgainBtn.addEventListener("click", function reload(){
//           reload=location.reload();
//         })
//       } else {
//         finalScore = 'You won!';
//         let finalScoreH = document.createElement('h2');
//         container.appendChild(finalScoreH);
//         img.remove();
//         video.style.display = "block";
//         video.src += "?autoplay=1";
//       }
//         finalScoreH.innerText = finalScore;
//         //location.reload();
//     }
//   });
//   }