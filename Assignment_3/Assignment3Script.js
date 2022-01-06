//1 Select the section with an id of container without using querySelector.
let containerEl = document.getElementById("container")

//2 Select the section with an id of container using querySelector.

let containerEl2 = document.querySelector(".container")

//3 Select all of the list items with a class of "second".

let secondClass = document.getElementsByClassName("second")

//4 Select a list item with a class of third, but only the list item inside of the ol tag.

let thirdEl = document.querySelector("ol .third")

//5 Give the section with an id of container the text "Hello!".

containerEL = document.querySelector("#container")
let helloEl = document.createElement("p")
helloEl.innerText = "Hello" 
document.querySelector("#container").appendChild(helloEl)
//6  Add the class main to the div with a class of footer.

let footer = document.querySelector(".footer")
footer.classList.add("main")

//7 Remove the class main on the div with a class of footer.

footer.classList.remove("main")

//8 Create a new li element.

let liEl = document.createElement("li")

//9 Give the li the text "four".
liEl.innerText = "four"

//10 Append the li to the ul element.

document.querySelector("ul").appendChild(liEl)

//12 Loop over all of the lis inside the ol tag and give them a background color of "green".

let liLoop = document.querySelectorAll("ol li")
for (let i = 0; i < liLoop.length; i++){
    liLoop[i].style.backgroundColor = "green";
}
 //13 Remove the div with a class of footer.

footer.remove() 