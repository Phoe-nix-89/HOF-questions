let arr = [["A","A",2020],["b","b",2013],['c','c',2005],['d','d',2019],['e','e',2009],['f','f',2007]]

let newarr = arr.filter(elem => elem[2]<2010)

let ARR = arr.filter(elem => elem[2] >= 2010)

console.log(newarr);

for(let elem of ARR){
    let temp = elem[1].toUpperCase();
    elem[1] = temp
}

console.log(ARR);