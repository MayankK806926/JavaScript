//Create a terminal clock
function updateTime(){
    const now=new Date();
    const hrs=now.getHours();
    const min=now.getMinutes();
    const sec=now.getSeconds();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    console.clear();
    console.log(now)
    console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(updateTime,1000);
