

//need commas between values of an array (after the {} brackets) because they are all questions within the same array
//list of made up questions until I finalize questions. Just want to get through the code first
var listofquestions = [
    {
        question:"What is JavaScript?",
        answers: ["programming language","abcdef","bcdefg","cdefgh","defghi"],
        correctanswer: "programming language"
    },
    {
        question:"What Beyonce's last album?",
        answers: ["Act I: Renaissance","Act II","Beyonce","Lemonade","Sasha Fierce"],
        correctanswer: "Act I: Renaissance"
    },
    {
        question:"Who won album of the year at the 2024 Grammy Awards?",
        answers: ["Janelle Monae","Beyonce","Taylor Swift","Jon Batiste","SZA"],
        correctanswer: "Taylor Swift"
    },
    {
        question:"Who is having a baby girl in May?",
        answers: ["Rafa Crespo","Rachael Holmes","Mohak Schroff","John Doe","Brian Oldak"],
        correctanswer: "Brian Oldak"
    },
    {
        question:"Where is Adjoa going in December?",
        answers: ["Sierra Leone","California","Portugal","Barcelona","Ghana"],
        correctanswer: "Ghana"
    },
] 

//was going to add the list of answers in the same array but then I would have to do more work to map them directly to the answers so I didn't. For every question, I need to show the question text and then show the answers. When someone clicks an answer, we need to add an event listener for the next action.

//Event listener for once I click, Start Quiz, 
//Event listener that will lead me through questions 1-5. 
//If the question is correct then a variable needs to appear at the bottom or top of the page saying its correct, but if its incorrect, then a variable needs to appear at the bottom or top of the page saying its incorrect AND 5 seconds needs to be removed from the timer. 
//adding ++ to the end of question index so it will increase along as we move to the next question
var QuizBtn = document.querySelector("#generate")
var answer0Btn = document.querySelector("#answer-0")
answer0Btn.style.visibility="hidden"
answer0Btn.addEventListener("click",showCorrectAnswer)

var answer1Btn = document.querySelector("#answer-1")
answer1Btn.addEventListener("click",showCorrectAnswer)
answer1Btn.style.visibility="hidden"
var answer2Btn = document.querySelector("#answer-2")
answer2Btn.addEventListener("click",showCorrectAnswer)
answer2Btn.style.visibility="hidden"
var answer3Btn = document.querySelector("#answer-3")
answer3Btn.addEventListener("click",showCorrectAnswer)
answer3Btn.style.visibility="hidden"
var answer4Btn = document.querySelector("#answer-4")
answer4Btn.addEventListener("click",showCorrectAnswer)
answer4Btn.style.visibility="hidden"
function showCorrectAnswer () {
    // alert("TBD")
    // alert(this.id);
    // alert(document.getElementById(this.id).value)
    var answerSelected = document.getElementById(this.id).value
    // alert (answerSelected)
    // alert(questionindex)
    // alert(listofquestions[questionindex].correctanswer)
    if (answerSelected == listofquestions[questionindex].correctanswer)
{   document.querySelector("#question-response").innerHTML = "Correct Answer!"

}
else {
    document.querySelector("#question-response").innerHTML = "Wrong Answer!"
}
questionindex++;
// alert ("stop")
setTimeout(1000)
showNextQuestion()
}

QuizBtn.addEventListener("click", showNextQuestion);
function showNextQuestion() {
    var currentquestion = listofquestions[questionindex]
    console.log(currentquestion.question)
    var questionelem = document.querySelector("#question")
    questionelem.innerHTML = currentquestion.question
    
    showanswer(currentquestion,0)
    //add event listener
    showanswer(currentquestion,1)
    showanswer(currentquestion,2)
    showanswer(currentquestion,3)
    showanswer(currentquestion,4)

    // questionindex++;
}
// QuizBtn.addEventListener("click", showquestion);
// function showquestion() {
//     var currentquestion = listofquestions[questionindex]
//     console.log(currentquestion.question)
//     var questionelem = document.querySelector("#question")
//     questionelem.innerHTML = currentquestion.question
    
//     showanswer(currentquestion,0)
//     //add event listener
//     showanswer(currentquestion,1)
//     showanswer(currentquestion,2)
//     showanswer(currentquestion,3)
//     showanswer(currentquestion,4)

//     questionindex++;
// }
var questionindex = 0;

function showanswer(question,indexofanswer) {
    // question.answers[indexofanswer]
    var answerelem = document.querySelector("#answer-"+indexofanswer)
    answerelem.innerHTML = question.answers[indexofanswer]
    answerelem.value = question.answers[indexofanswer]
    answerelem.style.visibility="visible"

}
//  if showquestion.questionindex () {

//  }



//add event listener for moving to the next question, make take quiz separate from the questions (it needs to be shown separate), and then scoring - the logic for everything and local storage
//to add a number to a string, all we have to do is add a plus sign, as referenced in line 53
// var answer0 = currentquestion.answers[0]
// var answer1 = currentquestion.answers[1]
// var answer2 = currentquestion.answers[2]
// var answer3 = currentquestion.answers[3]
// var answer4 = currentquestion.answers[4] 


//I am trying to show the questions (per index) based on questions that I listed above

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);

  //need a function that displays questions
  //needs a function that validates an answer to a question (confirm) 
  //function for end of the quiz and scoring 
  //should we include the score during the quiz or just have it after the quiz?


  //