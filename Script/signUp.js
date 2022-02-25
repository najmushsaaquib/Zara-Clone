document.querySelector("#form").addEventListener("submit",signUpfun)
var credArr = JSON.parse(localStorage.getItem("credentials")) || [];
function signUpfun(event){
    event.preventDefault();
    var sUp = document.querySelector("#input").value;
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;
    var add = document.querySelector("#add").value;
    var locality = document.querySelector("#locality").value;
    var city = document.querySelector("#city").value;
    var state = document.querySelector("#state").value;
    var region = document.querySelector("#region").value;
    var number = document.querySelector("#number").value;
    var acc1 = document.querySelector("#acc1").value;
    var acc2 = document.querySelector("#acc2").value;  
    var credObj = {
      input:sUp,
      email:email,
      pass:pass,
      add:add,
      locality:locality,
      city:city,
      state:state,
      region:region,
      number:number,
      acc1:acc1,
      acc2:acc2

    };
    credArr.push(credObj);
    console.log(credArr);
    localStorage.setItem("credentials",JSON.stringify(credArr));
    
      if(input==""||email==""||pass==""||add==""||locality==""||city==""||state==""||region==""||acc1==""||acc2=="")
      {
        alert("Incomplete information") 
      }
      else{
        window.location.href="login.html";
      }
}