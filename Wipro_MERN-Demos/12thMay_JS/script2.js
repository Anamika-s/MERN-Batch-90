// console.log("Start");
// console.log("In Between");
// console.log("End");

// // Async

// console.log("Start");
// setTimeout(function() 
// {
//    console.log("In Between");
// },2000);
// console.log("End");

// console.log("Start");

// function getName(name)
// {
//   setTimeout(()=>
//   {
//       console.log("In the Method  : " + "Hello : + " + name);
//       return name;
//   }, 2000);
// }
// var name = getName("Deepak");
// console.log(name);
// console.log("End");


console.log("Start");
function getName(name, callback)
{
  setTimeout(()=>
  {
  console.log("Inside "); callback(name);
  }, 2000);
}

getName("Deepak" , (name)=>
{
  console.log("Hello " + name);

})

console.log("End");