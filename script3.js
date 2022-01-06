const r = document.getElementById("response")

const formSub = document.getElementById('sub')

formSub.addEventListener("click",function(){
    let formName = document.getElementById('name').value
    let formPassword =document.getElementById('psw').value
    if(formPassword !== "12345678"){
        alert("Incorrect Password")
    }
    if(formPassword === "12345678"){
        r.innerHTML = "Correct Password"
    }
})