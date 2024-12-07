//Counter in JS
let count=30;

function countdown(){
    console.clear();
    console.log(count);
    count--;

    if(count<0){
        console.log("Time's UP!!");
        clearInterval(counter);
    }
}
const counter=setInterval(countdown,1000);
