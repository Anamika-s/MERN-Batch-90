console.log("Inside Script4 Callback");

const students = [
  {name:"Deepak", marks : 90},
  
  {name:"Ajay", marks : 40},
  
  {name:"Sagar", marks : 70},
  
  {name:"Meena", marks : 60}
];

function EnrollmentStudent(student, DisplayStudents)
{
  setTimeout(()=>
  {
students.push(student) ;
console.log("Student is enrolled");
DisplayStudents();
} ,4000);
}

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

var student =  {name :"Param" , marks:98};
EnrollmentStudent(student, DisplayStudents);
// DisplayStudents();
 