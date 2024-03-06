//Declarations
let dinosaur = document.getElementById("dinosaur");
let enemy = document.getElementById('enemy');
let enemy1 = document.getElementById('enemy1');
let score = document.getElementById("score");
let scoreNumber = 0;
let isMute = false;
let dinoCollide;
let enemyCollide;
 
//Jump Functionality
function jump () {
  dinosaur.style.transform = 'translateY(-300%) translateX(0%)';
  dinosaur.style.transition = 'transform 0.5s';  
  setTimeout(function() {
    dinosaur.style.transform = 'translateY(0) translateX(0)';
  }, 500);
}

//Dino jump on click
document.addEventListener("click", function() {
 jump ()  
});

//Dino jump on spacebar
document.addEventListener("keypress", event => {
  if (event.code === 'Space') {
  jump ()
  }
});

//Score
setInterval(function scoreNumberAdd() {
  score.textContent = `Score: ${scoreNumber}`;
  scoreNumber += 5;
}, 500);


setInterval(function generateRandom(maxLimit = 5){
  let rand = Math.random() * maxLimit;
  console.log(rand);
  rand = Math.floor(rand);
}, 10000);

function generateRand(maxLimit = 5){
  let rand = Math.random() * maxLimit;
  console.log(rand);
  rand = Math.floor(rand);
  return rand;
}


//Mute/Unmute Functionality
function musicFunc() {
  music = document.getElementsByTagName('audio');
  for(let e = 0; e < music.length; music[e].muted = !music[e].muted, e++);
  muteButton.src = './Images/miniMusicMuteButton.png';

  const muteButton = document.getElementById('music');
  if (isMute == true) {
    muteButton.src = './Images/miniMusicButton.png';
    isMute = false;
  } else {
    alert('a');
    muteButton.src = './Images/miniMusicMuteButton.png';
    isMute = true;
  }
}

//Collision Detection of Enemy 0
setInterval(function (){
dinoCollide = {x: dinosaur.getBoundingClientRect().left, y: dinosaur.getBoundingClientRect().top, width: dinosaur.offsetWidth, height: dinosaur.offsetHeight}; 
enemyCollide = {x: enemy.getBoundingClientRect().left, y: enemy.getBoundingClientRect().top, width: enemy.offsetWidth, height: enemy.offsetHeight};

if (dinoCollide.x > enemyCollide.x + enemyCollide.width ||
    dinoCollide.x + dinoCollide.width < enemyCollide.x ||
    dinoCollide.y > enemyCollide.y + enemyCollide.height ||
    dinoCollide.y + dinoCollide.height < enemyCollide.y) {
    isMute = !isMute;
    
} else if (dinoCollide.x+1 < enemyCollide.x-2 + enemyCollide.width ||
           dinoCollide.x+1 + dinoCollide.width > enemyCollide.x-2 ||
           dinoCollide.y+1 < enemyCollide.y-2 + enemyCollide.height ||
           dinoCollide.y+1 + dinoCollide.height > enemyCollide.y-2){
    alert(`Game Over. Your score is ${scoreNumber}`)
    scoreNumber = 0;
};
}, 100);

//Collision Detection of Enemy 1
setInterval(function (){
  dinoCollide = {x: dinosaur.getBoundingClientRect().left, y: dinosaur.getBoundingClientRect().top, width: dinosaur.offsetWidth, height: dinosaur.offsetHeight}; 
  enemyCollide = {x: enemy1.getBoundingClientRect().left, y: enemy1.getBoundingClientRect().top, width: enemy.offsetWidth, height: enemy.offsetHeight};
  
  if (dinoCollide.x > enemyCollide.x + enemyCollide.width ||
      dinoCollide.x + dinoCollide.width < enemyCollide.x ||
      dinoCollide.y > enemyCollide.y + enemyCollide.height ||
      dinoCollide.y + dinoCollide.height < enemyCollide.y) {
      isMute = !isMute;
      
  } else if (dinoCollide.x+2 < enemyCollide.x-2 + enemyCollide.width ||
             dinoCollide.x+2 + dinoCollide.width > enemyCollide.x-2 ||
             dinoCollide.y+2 < enemyCollide.y-2 + enemyCollide.height ||
             dinoCollide.y+2 + dinoCollide.height > enemyCollide.y-2){
      alert(`Game Over. Your score is ${scoreNumber}`)
      scoreNumber = 0;
  };
    
  }, 100);

setInterval(function (){
  let rand = Math.random() * 5;
  console.log(rand);
  rand = Math.floor(rand);
    
  if (enemyCollide.x < 0){
    if (rand>2){
    enemy1.style.backgroundImage = `url('./Images/kingKong.png')`;
    } else {
    enemy1.style.backgroundImage = `url('./Images/Tree.png')`;
    }
  }
}, 100);

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}