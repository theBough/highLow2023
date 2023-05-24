var rndNum;
var feedback = document.getElementById("feedback")
var theirGuess = document.getElementById("myInput")
var guessCount = document.getElementById("count")
var count  = 0;
function generateRndNum(){
  //this will make a random number
  //for the play to guess
  //This will make a random number between 1-500
  rndNum = Math.random()*500
  rndNum = Math.ceil(rndNum)
  //document.getElementById("title").innerHTML = rndNum
}//end function generateRndNum

function provideFeedback(){
  theirGuess = document.getElementById("myInput")
   theirGuess = parseInt(theirGuess.value)
  console.log(theirGuess)
  if(rndNum > theirGuess){
    feedback.textContent = "Too Low"
  }else if(rndNum < theirGuess){
    feedback.textContent = "Too High"
  }else{
    feedback.textContent = "You Got It!"
  }//end if

  count += 1;
  guessCount.textContent = "Guess Count: " + count
}
