const answer = document.getElementById("answer")

const formSub = document.getElementById('sub')

formSub.addEventListener("click",function(){
    let radius = document.getElementById('value').value
    let volume
    radius = Math.abs(radius);
    volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    answer.innerHTML = volume

})