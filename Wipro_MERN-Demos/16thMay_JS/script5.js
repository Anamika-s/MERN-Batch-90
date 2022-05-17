console.log("XMLHttpRequest Object");
let btnGetData = document.getElementById("btnGetData");
btnGetData.addEventListener("click", btnGetDataClicked);
const xhr = new XMLHttpRequest();
function btnGetDataClicked()
{
  console.log("Button is clicked");

  
  console.log(xhr.readyState);
  // xhr.open("Get", "data.json");
  xhr.open("Get", "https://jsonplaceholder.typicode.com/users" , false);
  console.log(xhr.readyState);
  xhr.onreadystatechange = StateChanged;
  xhr.send(null);
}

function StateChanged()
{
  console.log(xhr.readyState);
  console.log("State is changing");

  if(xhr.readyState==4 && xhr.status==200)
  { 
    document.getElementById("div1").innerHTML= xhr.response;   
  console.log(xhr.response);
}  } 
  
  




