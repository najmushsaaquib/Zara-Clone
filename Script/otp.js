
    document.querySelector("#form").addEventListener("submit", takeMe);



    function takeMe(event) {

        event.preventDefault();
        let code1 = document.querySelector("#code1").value;
        let code2 = document.querySelector("#code2").value;
        let code3 = document.querySelector("#code3").value;
        let code4 = document.querySelector("#code4").value;

        if(code1 == 1 && code2 == 2 && code3 == 3 && code4 == 4) {

            alert("Your transaction was successful. Thank you for shopping with ZARA");
            window.location.href = "/index.html"
        }

        else 
        {

            alert("Wrong OTP entered. Please try again")
        }

            document.querySelector("#code1").value = null;
            document.querySelector("#code2").value = null;
            document.querySelector("#code3").value = null;
            document.querySelector("#code4").value = null;

        console.log(code1,code4, "Hello ")
    }
