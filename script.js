
function submitAnswers() {
  var total = 21;
  var score= "";



  var q1 = document.forms["quizform"]["q1"].value;
  var q2 = document.forms["quizform"]["q2"].value;
  var q3 = document.forms["quizform"]["q3"].value;
  var q4 = document.forms["quizform"]["q4"].value;
  var q5 = document.forms["quizform"]["q5"].value;
  var q6 = document.forms["quizform"]["q6"].value;
  var q7 = document.forms["quizform"]["q7"].value;
  var q8 = document.forms["quizform"]["q8"].value;
  var q9 = document.forms["quizform"]["q9"].value;
  var q10 = document.forms["quizform"]["q10"].value;
  var q11 = document.forms["quizform"]["q11"].value;
  var q12 = document.forms["quizform"]["q12"].value;
  var q13 = document.forms["quizform"]["q13"].value;
  var q14 = document.forms["quizform"]["q14"].value;
  var q15 = document.forms["quizform"]["q15"].value;
  var q16 = document.forms["quizform"]["q16"].value;
  var q17 = document.forms["quizform"]["q17"].value;
  var q18 = document.forms["quizform"]["q18"].value;
  var q19 = document.forms["quizform"]["q19"].value;
  var q20 = document.forms["quizform"]["q20"].value;
  var q21 = document.forms["quizform"]["q21"].value;

     //validation
      for(i = 1;i <= total; i++){
      if(eval("q" + i) === null || eval("q" + i)  === "") {
        alert("you missed question" + i);
        return false;
    }
  }

   // set correct answers
   var answers =["a","d","b","c","b","a","d","c","b","a","d","c","d","a","d","b","c","a","a","d","b"];

       for(i = 1;i <= total; i++){
       if(eval("q" + i) === answers[i- 1]) {
         score++;
       }
    }
    var calculation = ((score/total) * 100).toFixed(2);
    var results = document.getElementById("results");
    results.innerHTML = "<h3>Congrats, you scored <span>"+score+ "</span> out of <span>" +total+ "</span> !</h3>"

    if(score > 18) {
      alert("DAMN WIZ KID!");
    } else if (score > 15) {
      alert("ALRIGHT ALRIGHT ALRIGHT!");
    } else if(score > 9){
      alert("NOT TOO BAD!");
    } else {
      alert("KEEPING TRYING, PRACTICE MAKES PERFECT!");
    }

    alert("Alrighty, you got " +calculation+ " % !");
    return false;




}
