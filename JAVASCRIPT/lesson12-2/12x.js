let score=JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
};


updateScoreelement();
/*if(score===null){
  score={
    win:0,
    losses:0,
    ties:0
  };
}*/

let isAutoplay=false;
let intervalid;

//const autoplay=()=>{
//}
document.querySelector('.auto-button').addEventListener('click',()=>{
  autoPlay();
  

});

function autoPlay(){
  if(!isAutoplay){
    intervalid=setInterval(()=>{
      const playerMove=pickComputerMove();
      playGame(playerMove);
    },1000);
    isAutoplay=true;
    //12t
    document.querySelector('.auto-button').innerHTML='Stop Playing';

  
  } else{
    clearInterval(intervalid);
    isAutoplay=false;
    //12t
    document.querySelector('.auto-button').innerHTML='Auto Play';
  }
}

document.querySelector('.js-rbutton').addEventListener('click',()=>{
  playGame('rock');
});
document.querySelector('.js-pbutton').addEventListener('click',()=>{
  playGame('paper');
});
document.querySelector('.js-sbutton').addEventListener('click',()=>{
  playGame('scissors');
});

document.body.addEventListener('keydown',(event)=>{
  if(event.key==='r'){
    playGame('rock');
  } else if(event.key==='p'){
    playGame('paper');
  } else if(event.key==='s'){
    playGame('scissors');
    //12u
  }else if(event.key==='a'){
    autoPlay();
  }else if(event.key==='Backspace'){
    showReset();
    //resetScoreelement();
  }
});
document.querySelector('.reset-button').addEventListener('click',()=>{
  showReset();
});

function showReset(){
  document.querySelector('.display-message').innerHTML=`Are you sure you want to reset the score?
  <button class='reset-yes confirm'>Yes</button>
  <button class='reset-no confirm'>No</button>
  `;
  document.querySelector('.reset-yes').addEventListener('click',()=>{
    resetScoreelement();
    hideMessage();

  });

  document.querySelector('.reset-no').addEventListener('click',()=>{
    hideMessage();

  });

}

function hideMessage(){
  document.querySelector('.display-message').innerHTML=' ';
  
}

function playGame(playerMove){
  const move=pickComputerMove();

  let res='';
  if(playerMove==='scissors'){
    if(move==='rock'){
      res='you lose.';
    }else if(move==='paper'){
      res='you win.';
    }else if(move==='scissors'){
      res='Tie.';
    }

  }else if(playerMove==='paper'){
    if(move==='rock'){
      res='you win.';
    }else if(move==='paper'){
      res='Tie.';
    }else if(move==='scissors'){
      res='you lose.';
    }
    
  }else if(playerMove==='rock'){
    if(move==='rock'){
      res='Tie.';
    }else if(move==='paper'){
      res='you lose.';
    }else if(move==='scissors'){
      res='you win.';
    }

  }
  if(res==='you win.'){
    score.wins+=1;
  }
  else if(res==='you lose.'){
    score.losses+=1;
  }
  else if(res==='Tie.'){
    score.ties+=1;
  }


  localStorage.setItem('score',JSON.stringify(score));

  
  updateScoreelement();

  document.querySelector('.js-res').innerHTML=res;

  document.querySelector('.js-moves').innerHTML=`you
<img src="images/${playerMove}-emoji.png"  class="icon">
<img src="images/${move}-emoji.png" class="icon">
  computer`;

}
function resetScoreelement(){
  score.wins=0;
  score.losses=0;
  score.ties=0;
  localStorage.removeItem('score');
  updateScoreelement();
}
document.querySelector('.reset-button').addEventListener('click',()=>{
  resetScoreelement();
});

function updateScoreelement(){
  document.querySelector('.js-score').innerHTML=`Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;

}


function pickComputerMove(){
  const randomNum=Math.random();
  let move='';
  if(randomNum>=0 && randomNum<1/3){
    move='rock';
  }else if(randomNum>=1/3 && randomNum<2/3){
    move='paper';
  }
  else if(randomNum>=2/3 && randomNum<1){
    move='scissors';
  }
  return move;
}