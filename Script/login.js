document.querySelector("#form").addEventListener("submit",loginPage)
var loginCredentials = JSON.parse(localStorage.getItem("loginData")) || []
var signupData=JSON.parse(localStorage.getItem("credentials"));

// signupData={
//     email:"rajayadavce@gmail.com",
//     pass:12345


  function loginPage(event){

     event.preventDefault();

         var email=document.querySelector("#formdiv1>input").value;
         var password=document.querySelector("#formdiv2>input").value;

    console.log(email,password)
    document.querySelector("#login").style.cursor="not-allowed"
    
var flag=false;
        for(var i=0;i<signupData.length;i++)
        {
            
            if(signupData[i].email==email && signupData[i].pass==password)
            {
                flag = true;
                var name= signupData[i].input
                break;
            }
            else
            {
                flag=false;
            }
        }
        if(flag==true)
        {
            alert("login success")
            obj = {
                name: name,
                email:document.querySelector("#email").value,
                pass:document.querySelector("#pass").value,
            }
            loginCredentials.push(obj)
            localStorage.setItem("loginData",JSON.stringify(loginCredentials))
            window.location.href="/index.html"
        }
        else{
            alert("wrong details")
        }
  }
    
document.querySelector("#createaccount").addEventListener("click", function () {
      window.location.href="/pages/signUp.html"
  })