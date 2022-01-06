const p1 = document.querySelector(".p1")
const p2 = document.querySelector(".p2")
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")


//changes the paragraph elements text when the button is clicked
btn1.addEventListener("click",function(){
    p1.innerHTML = "I'm right"
})

btn2.addEventListener("click",function(){
    p2.innerHTML = "No, i'm right"
})