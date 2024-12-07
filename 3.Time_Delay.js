//Time delay btw setTimeout call and actually running of inner function
const startTime=Date.now();
setTimeout(()=>{
    const endTime=Date.now();
    const timeDifference=endTime-startTime;
    console.log(`Delay: ${timeDifference}`);
},2000)
