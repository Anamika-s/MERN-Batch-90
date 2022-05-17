console.log("Inside Script10 using Promise");

const students = [
  {name:"Deepak", marks : 90},
  
  {name:"Ajay", marks : 40},
  
  {name:"Sagar", marks : 70},
  
  {name:"Meena", marks : 60}
];

function EnrollmentStudent(student)
{
 return new Promise((resolve, reject) =>
 {
  setTimeout(()=>
  {
    const error =false;
students.push(student) ;
console.log("Student is enrolled");
if(!error) 
{
  resolve();
}
else 
{
  reject();
} 
} ,4000);
 } );
 
}

var student =  {name :"Param" , marks:98};

EnrollmentStudent(student).then(()=>
{
DisplayStudents();
}).catch(()=>
{
  console.log("There was some error");
})


function DisplayStudents()
{
  setTimeout(()=>
  {
       var str ="";
     students.forEach(student=>
      {
      str+= "<li>"  + student.name  + "</li>";
      });
      document.getElementById("list").innerHTML = str;
  }, 2000);
}

// var student =  {name :"Param" , marks:98};
// EnrollmentStudent(student);
// DisplayStudents();
 