document.querySelector("#form").addEventListener("submit",signUpfun)
var credArr = JSON.parse(localStorage.getItem("credentials")) || [];
function signUpfun(event){
    event.preventDefault();
    var sUp = document.querySelector("#input").value;
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;
    
    var credObj = {
      input:sUp,
      email:email,
      pass:pass

    };
    credArr.push(credObj);
    console.log(credArr);
    localStorage.setItem("credentials",JSON.stringify(credArr));
    
      if(email=="")
      {
        alert("Incomplete information")
      }
      else{
        window.location.href="login.html";
      }
}