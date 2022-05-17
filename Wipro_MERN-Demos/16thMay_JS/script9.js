console.log("Promise");
// pending
// resolved
// rejected


// producing code
function func1()
{
   return new Promise (function (resolve, reject)
   {
     setTimeout(()=>
     { 
       const error =true;
       if(!error)
       { 
       console.log("Your promise has been fulfilled");
       resolve("Your promise has been fulfilled");
       }
       else 
       {
         reject("Your promise has been rejected");
       }
       
     }, 2000);
   });

}
// calling code
func1().then((data)=> {
  console.log("success");
  console.log(data);
  }).catch((data)=>
  {
    console.log("failed");
    console.log(data);
    
  })
   

