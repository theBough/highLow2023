var rndNum;
var feedback = document.getElementById("feedback")
var theirGuess = document.getElementById("myInput")
function generateRndNum(){
  //this will make a random number
  //for the play to guess
  //This will make a random number between 1-500
  rndNum = Math.random()*500
  rndNum = Math.ceil(rndNum)
  document.getElementById("title").innerHTML = rndNum
  if(rndNum > theirGuess.value){
    feedback.textContent = "Too Low"
  }else if(){
    
  }else{
    
  }//end if
}//end function generateRndNum
