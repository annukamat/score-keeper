var P1 = document.querySelector("#P1");
var p1Display = document.querySelector("#p1Display");
p1Score = 0;

var P2 = document.querySelector("#P2");
var p2Display = document.querySelector("#p2Display");
p2Score = 0;

gameOver = false;
winningScore = 5;
var Reset = document.querySelector('#reset');
var playingTo = document.querySelector("p span");
var Input = document.querySelector("input");

P1.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add('winner');
		   gameOver = true;
		}
	p1Display.textContent = p1Score;
	}
	
}
	)

P2.addEventListener("click",function(){
	if(!gameOver){
			p2Score++;
			if(p2Score === winningScore){
				 p2Display.classList.add("winner");
				gameOver = true;
			}
	p2Display.textContent = p2Score;
	}

}
	)

Reset.addEventListener("click", function(){
reset();	
})

function reset(){
	 p1Score = 0;
   p2Score = 0;
   p1Display.textContent = 0;
   p2Display.textContent = 0;
   p1Display.classList.remove("winner");
   p2Display.classList.remove("winner");
   gameOver = false;
}

Input.addEventListener("change",function(){
   playingTo.textContent = (Input.value);
   winningScore = Number(Input.value) ;
})