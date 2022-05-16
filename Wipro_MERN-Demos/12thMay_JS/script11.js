console.log("Async Await Demo");

async function hello()
{
  console.log("inside hello");
  const response = await fetch("https://api.github.com/users");
 console.log("before response");
 const users =  await response.json();
 console.log("after response");
  return users;
}
// console.log("Before Calling hello ")
// var a = hello();
// console.log(" callingAfter hello")
// console.log(a);
hello().then(data=>console.log(data)).catch(()=> console.log("some error occured"));
console.log("This is the last statement")