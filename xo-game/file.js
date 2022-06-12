const player1 = document.getElementsByClassName('player1');
const player2 = document.getElementsByClassName('player2');

var boxes = document.getElementsByClassName('box');

var turn = true;

for(var i = 0; i < boxes.length; i++) {
  (function(index) {
    boxes[index].addEventListener("click", function() {
       console.log("Clicked index: " + index);
       turn = !turn
       if(!boxes[index].innerHTML)
            boxes[index].innerHTML = turn ? 'x' : 'o'
        
        checkWin(index, turn);
     });
  })(i);
}

function checkWin(index, turn){
    const winCase = [
        [0,1,2],[3,4,5],
        [6,7,8],[0,3,5],
        [1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]

    winCase.forEach(item => {
        if (
            boxes[item[0]].innerHTML &&
            boxes[item[0]].innerHTML === boxes[item[1]].innerHTML && 
            boxes[item[1]].innerHTML === boxes[item[2]].innerHTML &&
            boxes[item[0]].innerHTML === boxes[item[2]].innerHTML) {
            
            alert(`Player ${turn} won!!!`);
            resetGame();
              
        } 

        // boxes.forEach((item, idx) => {
        //     if(item[idx])
        // })


        if (boxes[0].innerHTML && boxes[1].innerHTML && boxes[2].innerHTML && boxes[3].innerHTML && boxes[4].innerHTML && boxes[5].innerHTML && boxes[6].innerHTML && boxes[7].innerHTML && boxes[8].innerHTML) {
            
            alert("Draw!");
            resetGame()
        }    
          
    });

    function resetGame(){ 
        for (box of boxes){
            box.innerHTML = ''
        }
    }
}


