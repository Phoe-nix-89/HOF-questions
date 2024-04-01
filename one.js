let input = "Hello my name is Koustav"

setTimeout(() => {
    let arr = input.split("")
    let revarr = arr.reverse();
    let newstr = revarr.join("")
    console.log(newstr);
},2000)