// There are 3 different ways to declare variables in JS
 // 1. var 
 // 2. let
 // 3. const

var Feedback = new Array();

function AddFeedback()
{
 var feedback = document.getElementById("txtComments").value;
     Feedback.push(feedback);
     console.log(Feedback.length);
}

function DisplayFeedbacks()
{
  for(var i = 0;i<=Feedback.length;i++)
  {
    console.log(Feedback[i]);
  }
}