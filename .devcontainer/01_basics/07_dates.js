//date
 let myDate = new Date();
 //console.log(myDate.toString());
 //console.log(myDate.toDateString());
 //console.log(myDate.toLocaleDateString());
 //console.log(typeof myDate);

 let myCreatedDate = new Date(2024, 5, 24);
 let myCreatedDates = new Date(2023, 0, 15, 3, 24);
 //console.log(myCreatedDates.toLocaleString());
 //console.log(myCreatedDate.toDateString());

 let myTimeStamp = Date.now()
 //console.log(myTimeStamp);
 //console.log(myCreatedDate.getTime());
//console.log(Date.now()/1000);

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
newDate.toLocaleString('default',{
    weekday: "long"
})

