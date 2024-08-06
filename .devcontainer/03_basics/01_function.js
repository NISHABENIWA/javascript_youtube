function sayMyName() {
    console.log("N");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
}

//sayMyName()

//function addTwoNumbers(number1 , number2){
 //   console.log(number1+number2);
//}

function addTwoNumbers(number1 , number2){
    let result = number1+number2
    return result
    
}
const result = addTwoNumbers(3,5)
 //console.log("result:" , result);

 function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in `

 }

 //console.log(loginUserMessage("nisha"));
 //console.log(loginUserMessage("harsh"));

 function calculateCarPrice(val1, val2, ...num){
       return num
 }
 console.log(calculateCarPrice(200,400,500,2000))
  const user = {
    username: "nisha",
    prices: 199
  }
  function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
  }
  handleObject({
    username: "sam",
    price: 399
  })
  const myNewArray = [200,400,100,600]

  function returnSecondValue(getArray){
    return getArray[1]
  }
  console.log(returnSecondValue(myNewArray));
  console.log(returnSecondValue([200,400,500,1000]));
