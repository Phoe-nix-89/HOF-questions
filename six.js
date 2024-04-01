let regex = /[(https:\/\/www\.linkedin.com)]{20}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)+/g

let str = "https://www.linkedin.com/in/mattea-azara-shoker-7b566673"

let temp = str.match(regex)

if(temp !== null && temp[0] === str){
    console.log("Yes this is a valid Linkedin URL");
}
else{
    console.log("Not a valid Linkedin URL");
}