const r = document.getElementById("response")

const formSub = document.getElementById('sub')
//compares the users input values to check if there password is correct
//throws an error if password is incorrect
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