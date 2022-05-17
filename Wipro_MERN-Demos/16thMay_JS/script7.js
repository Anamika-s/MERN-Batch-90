console.log("Fetch Api");

let btnGetData = document.getElementById("btnGetData");
btnGetData.addEventListener("click", btnGetDataClicked)


let btnAddData = document.getElementById("btnAddData");
btnAddData.addEventListener("click", btnAddDataClicked);


function btnGetDataClicked()
{
  console.log("Button is clicked");
fetch("data.json").then((response)=>
{
  console.log("Inside 1st then");
  return response.json();
}).then(data=>
  {
    
  console.log("Inside 2nd then");
 console.log(data);
  });

}


function btnAddDataClicked()
{
  var data = {
  "name":"John",
  "job" :"leader"
  };
  console.log("Added")
  var obj = {
  method : 'post',
  mode: 'cors',
  headers : {
    'Access-Control-Allow-Origin':'*',

    "Content-Type" :"application/json"
  },
  body: JSON.stringify(data)
    
  }
  var url = "https://reqres.in/api/users";
  fetch(url, obj).then(response=>
  {
     return response.json();
  }).then(data=>
  {

 console.log(" Record is Inserted" + data);
  });
}