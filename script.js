var rndNum;
function generateRndNum(){
  //this will make a random number
  //for the play to guess
  //This will make a random number between 1-500
  rndNum = Math.random()*500
  rndNum = Math.ceil(rndNum)
  document.getElementById("title").innerHTML = rndNum
}
