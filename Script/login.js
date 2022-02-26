document.querySelector("#form").addEventListener("submit",loginPage)

//  var signupData=JSON.parse(localStorage.getItem("credentials"));

//   console.log(signupdet)
signupData={
    email:"rajayadavce@gmail.com",
    pass:12345
}
console.log("raja")

  function loginPage(event){

     event.preventDefault();

         var email=document.querySelector("#formdiv1>input").value;
         var password=document.querySelector("#formdiv2>input").value;

    console.log(email,password)
    document.querySelector("#login").style.cursor="not-allowed"
    

var flag=false;
        // for(var i=0;i<signupData.length;i++)
        {
            
            if(signupData.email==email&&signupData.pass==password)
            {
                flag=true;
                // break;
            }
            else
            {
                flag=false;
            }
        }
        if(flag==true)
        {
            alert("login success")
            obj={
                email:document.querySelector("#formdiv1>input").value,
                pass:document.querySelector("#formdiv2>input").value,
                flag:true
            }
           

            localStorage.setItem("loginData",JSON.stringify(obj))
            window.location.href="/index.html"
        }
        else{
            alert("Details not found")
            
        }
    }