document.querySelector("#form").addEventListener("submit",loginPage)

//  var signupData=JSON.parse(localStorage.getItem("signupData"));

//   console.log(signupdet)
signupData={
    email:"rajayadavce@gmail.com",
    password:12345
}
console.log("raja")

  function loginPage(event){

     event.preventDefault();

         var email=document.querySelector("#formdiv1>input").value;
         var password=document.querySelector("#formdiv2>input").value;

    console.log(email,password)
    

var flag=false;
        // for(var i=0;i<signupData.length;i++)
        {
            
            if(signupData.email==email&&signupData.password==password)
            {
                flag=true;
            }
            else
            {
                flag=false;
            }
        }
        if(flag==true)
        {
            alert("login success")
        }
        else{
            alert("wrong details")
        }
    }