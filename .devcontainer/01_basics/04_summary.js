// stack (primitive) 
let myyoutubename = "abcyoutube.com"
let anotherYoutubename = myyoutubename

console.log(anotherYoutubename);
console.log(myyoutubename);

 anotherYoutubename = "xyzyoutube.com"
 console.log(anotherYoutubename);
 console.log(myyoutubename);

 //heap (non primitive)

 let userone = {
    email: "user@gmail.com",
    upi : "user@abi"
 }

let usertwo = userone
usertwo.email = "123@gmail.com"

//console.log(userone.email)
//console.log(usertwo.email)

