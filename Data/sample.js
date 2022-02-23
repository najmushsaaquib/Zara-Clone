
let sampleData = []

let sampleObj = {

    name: "Najmush Saaquib",
    email: "najmush@gmail.com",
    password: "password",
}
 
sampleData.push(sampleObj)

localStorage.setItem("sampleData", JSON.stringify(sampleData))
