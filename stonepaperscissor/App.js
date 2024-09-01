let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usersc = document.querySelector("#userscore");
const compsc = document.querySelector("#compscore");

const generatecompchoice = () =>
{
    let options = ["rock","paper","scissors"];
    const randidx=Math.floor(Math.random() * 3);
    return options[randidx];
}

const drawgame = () =>
    {
        console.log("game was draw");
        msg.innerText = "Game draw , play again !";
        msg.style.backgroundColor ="rgb(32, 4, 58)";
    }

const showwinner = (userwin,userchoice,compchoice) =>
{
    if(userwin)
    {
           
        userscore++;
        usersc.innerText = userscore;
        console.log("you win");
        msg.innerText = `You win ! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compscore++;
        compsc.innerText = compscore;
        console.log("you loose");
        msg.innerText = `You loose ! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) =>
{
    console.log("userchoice= ",userchoice);
    //generate computer choice ->modular
    const compchoice = generatecompchoice();
    console.log("comp choice=",compchoice);

    if(userchoice === compchoice)
        {
            drawgame();
        }
    else
    {
        let userwin = true;
        if(userchoice === "rock")
            {
                userwin = compchoice === "paper" ? false : true;
            }
        else if(userchoice === "paper")
            {
                 userwin = compchoice ==="scissors" ? false : true;
            }
        else
        {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice) =>{
choice.addEventListener("click",() => {
    const userchoice=choice.getAttribute("id");
    playgame(userchoice);
    // console.log("choice was clicked",userchoice);
});
});