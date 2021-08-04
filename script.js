'use strict';
  
/* Game logic */

const snumber=Math.trunc(Math.random()*20)+1;

console.log("Secret NUmber :" , snumber);

let score=20;
let highscore=0;

  document.querySelector('.check').addEventListener('click',function(){

 
const c=Number(document.querySelector('.guess').value);

console.log(c,typeof(c))

if(!c){
    document.querySelector('.message').textContent='Enter correct number'
}
else if(c==snumber){

  document.querySelector('.number').textContent=snumber;
document.querySelector('.message').textContent='Correct Number';
document.querySelector('body').style.backgroundColor='#008000';
document.querySelector('.number').style.width='30rem';

if(score > highscore){

  highscore=score;

  document.querySelector('.highscore').textContent=highscore;
}



}
else if(c > snumber){
if(score > 0){
document.querySelector('body').style.backgroundColor='#FF0000';
document.querySelector('.number').style.width='30rem';
document.querySelector('.message').textContent="TOO HIGH";
score--;
document.querySelector('.score').textContent=score;

}
else{
  document.querySelector('.message').textContent="you lost the game";
}
}
else if(c<snumber){
  if(score > 0){

    document.querySelector('body').style.backgroundColor='#FF8C00';
    document.querySelector('.number').style.width='30rem';
    document.querySelector('.message').textContent="TOO low";
    score--;
    document.querySelector('.score').textContent=score;
    
    }
    else{
      document.querySelector('.message').textContent="you lost the game";
      //document.querySelector('body').style.backgroundColor='#008000';
    }

}

  });

document.querySelector('.again').addEventListener('click',function(){
document.querySelector('.score').textContent=20;
document.querySelector('body').style.backgroundColor='#222';
document.querySelector('.message').textContent='Start guessing...';
document.querySelector('.guess').value='';
document.querySelector('.number').textContent='?';
document.querySelector('.number').style.width='15rem';
})
