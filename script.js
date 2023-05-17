var rndNum;
function generateRndNum(){
  //this will make a random number
  //for the play to guess
  rndNum = Math.random()
  document.getElementById("title").innerHTML = rndNum
}
