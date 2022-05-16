console.log("XMLHttpRequest Object");
let btnGetData = document.getElementById("btnGetData");
btnGetData.addEventListener("click", btnGetDataClicked);

let btnAddData = document.getElementById("btnAddData");
btnAddData.addEventListener("click", btnAddDataClicked);


const xhr = new XMLHttpRequest();

function btnGetDataClicked()
{
  console.log("Button is clicked");

  
  console.log(xhr.readyState);
  // xhr.open("Get", "data.json");
  xhr.open("Get", "https://jsonplaceholder.typicode.com/users" , false);
   
  xhr.onprogress = ()=>
  {
 console.log("Progress");
  };
  xhr.onload = ()=>
  {
    document.getElementById("div1").innerHTML= xhr.response;   
    console.log(xhr.response);
  };
  xhr.send(null);
}


// For Post 
function btnAddDataClicked()
{
var obj ={"name" :"Abeer",
"job" :"leader"
};
xhr.getResponseHeader("Content-Type","application/json");
xhr.open("post", "https://reqres.in/api/users");
xhr.onprogress = ()=>
{
  console.log("Progress");
}

xhr.onload = ()=>
{
   console.log(xhr.responseText);
}
xhr.send(obj);
}

  




