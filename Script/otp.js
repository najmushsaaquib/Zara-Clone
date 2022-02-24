function continueForm(){
  
    var n1 = document.querySelector("#n1").value;
    var n2 = document.querySelector("#n2").value;
    var n3 = document.querySelector("#n3").value;
    var n4 = document.querySelector("#n4").value;
    
    // var credObj = {
    //   card:card,
    //   date:date,
    //   cholder:cholder,
    //   cvv:cvv

    // };
    // credArr.push(credObj);
    // console.log(credArr);
    // localStorage.setItem("credentials",JSON.stringify(credArr));
    
      if(n1==="9"&&n2==="9"&&n3==="9"&&n4==="9")
      {
        window.location.href="Success.html";
      }
      else{
        alert("Wrong otp")
      }
}