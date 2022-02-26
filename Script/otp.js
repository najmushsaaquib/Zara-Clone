
    document.querySelector("#form").addEventListener("submit", takeMe);
    
var data = JSON.parse(localStorage.getItem("loginData"))
       document.querySelector("#phone").innerHTML = "Your OTP has been sent to your registered mobile number: "+ data[0].phone

    alert( " <1234> is the One Time Password (OTP) for your payment on Zara. OTP is valid for next 10 minutes. Please do not share with anyone.")

var count=3
    function takeMe(event) {

        event.preventDefault();
        let code1 = document.querySelector("#code1").value;
        let code2 = document.querySelector("#code2").value;
        let code3 = document.querySelector("#code3").value;
        let code4 = document.querySelector("#code4").value;

        if(code1 == 1 && code2 == 2 && code3 == 3 && code4 == 4 && count>1) {

            alert("Your transaction was successful. Thank you for shopping with ZARA");
            window.location.href = "/index.html";
            localStorage.removeItem("cartData")

        }
        else if (count == 1)
        {
            alert("Sorry you exceeded the limit")
            alert("Payment failed.")
            window.location.href = "/Pages/viewAll.html"
        }
        
        else 
        {
            count--
            alert("Wrong OTP entered. Please try again, max attempt 3 times")
        }

        if (count == 1) {
            document.querySelector("#remain").innerHTML = "Last Attempt"
        }
        else {
            document.querySelector("#remain").innerHTML = "Remaining Attempts: " + count
        }
     
            document.querySelector("#code1").value = null;
            document.querySelector("#code2").value = null;
            document.querySelector("#code3").value = null;
            document.querySelector("#code4").value = null;

        console.log(code1,code4, "Hello ")
    }
