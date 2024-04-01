let obj = {
    TV : 40,
    Fridge : 200,
    Laptop : 300,
    PS5 : 400,
    PC : 200
}
console.log(obj);
let newobj = {}
let arr = Object.entries(obj)
arr.map((arr) => {
    let temp = new Object()
    temp[arr[0]] = arr[1]*80
    Object.assign(newobj,temp)
})
console.log(newobj);