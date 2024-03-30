let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true; //playerX , player0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = ()=>{
    turn0 = true;
   enableBoxes();
   msgcontainer.classList.add("hide");

};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }

        box.disabled = true;

        checkwinner();
    
    });
});

const disbaleBoxes= () =>{
    for(let box of boxes)
       box.disabled = true;
};

const enableBoxes= () =>{
    for(let box of boxes){
       box.disabled = false;
       box.innerText = "";
    }
};



 const showWinner = (winner) =>{
        msg.innerText = `Congratulations, Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disbaleBoxes();
 };


const checkwinner = () => {
    for (pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner" , pos1val);

                showWinner(pos1val);

            }
        }
    }
};

 newgamebtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);