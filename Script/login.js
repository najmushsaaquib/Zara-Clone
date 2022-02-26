document.querySelector("#form").addEventListener("submit",loginPage)
var loginCredentials = JSON.parse(localStorage.getItem("loginData")) || []
var signupData=JSON.parse(localStorage.getItem("credentials")) || [];
var purchase = JSON.parse(localStorage.getItem("purchaseData")) || []

function loginPage(event){

    event.preventDefault();

    if (signupData.length == 0)
    {
        alert("Wrong credentials, Please register to ZARA")
    }
    var email=document.querySelector("#formdiv1>input").value;
    var password=document.querySelector("#formdiv2>input").value;
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
            localStorage.setItem("loginData", JSON.stringify(loginCredentials))
            if (purchase.length == 0) {
                window.location.href = "/index.html"
            }
            else
            {
                window.location.href = "/Pages/purchase.html"
            }
        }
        else{
            alert("Credientials did not matched, make sure you have registered")
        }
}
    
document.querySelector("#createaccount").addEventListener("click", function () {
    window.location.href="/pages/signUp.html"
})