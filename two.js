let i = 1;
let timer = setInterval(() => {
    console.log(i);
    //if(i == 3) return;
    if(i == 3) clearInterval(timer)
    i++;
},1000)


setTimeout(() => {
    let randomnumber = Math.floor(Math.random() * 10)
    console.log("Random number generated is : ",randomnumber);
},4000)