// function Hello()
// {
//   console.log("hello");
// }

 
// Hello();

var Hello = function()
{
  return "hello";
}

console.log(Hello());

// Arrow Functions are a short cut to write Anonymous Method
// It uses Lambda Expression
// const Hello2 = () =>
// {
//   return "hello";

// }
const Hello2 = () => "hello";


console.log(Hello2());

// const Hello3 = (name) =>
// {
//   return "Hello " + name;
// }

const Hello3 = name =>"Hello " + name;

console.log(Hello3("Ajay"));

const Add = (n1 , n2 )=>n1 + n2;

console.log(Add(1,2));

