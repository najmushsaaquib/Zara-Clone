
    document.querySelector("#submit").addEventListener("submit", takeMe);

    let code1 = document.querySelector("#code1").value || 0;
    console.log(code1)


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

        else alert("Wrong OTP entered. Please try again")
        console.log(code1,code4)
    }
