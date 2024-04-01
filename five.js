let arr = ["www.demo.com","http://foo.co.uk/","http://regexr.com/foo.html?q=bar","https://mediatemple.net",
"https://ports.work.too:1337",
"http://127.0.0.1",
"http://127.0.0.1/something",
"http://127.0.0.1/something-else",
"http://127.0.0.1/something/else#anchored",
"http://127.0.0.1/something/else?and=more&even=more",
"httpabrakadabra.co//",
"http:google.com",
"http://no-tld-here-folks",
"http://potato.54.211.192.240/" 
]

let regex = /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/igm

for(let i=0;i<arr.length;i++){
    let str = arr[i]
    let temp = str.match(regex)
    if(temp !== null){
        console.log(temp[0] == arr[i]);
    }
    else{
        console.log(false);
    }
}