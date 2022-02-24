var stor = JSON.parse(localStorage.getItem("credentials"));
    console.log(stor);
    document.querySelector("#form").addEventListener("submit", logInfun)
     var form = document.querySelector("#form")
    function logInfun(event) {
        event.preventDefault();
        var email = form.email.value;
        var pass = form.pass.value;
     
         for(var i=0; i<stor.length; i++){
             var flag = false;
             if(stor[i].email==email && stor[i].pass==pass)
              flag= true;
         }
         if(flag==true)
         {
            window.location.href="loggedin.html";
         }
         else{
            alert("Login fail");
         }
                 
         };