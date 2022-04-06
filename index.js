
let username = window.prompt("Please enter your username:")

console.log(`Username: ${username} has logged on.`)

document.getElementById("nameRe").innerHTML = "Wrong Name?"

document.getElementById("Name").innerHTML = `You're logged in as ${username}.`

document.getElementById("nameRe").onclick = function() {

    let username = window.prompt("Choose a new name!")
    document.getElementById("Name").innerHTML = `You're logged in as ${username}.`
    console.log(`Username changed to ${username}!`)
}

document.getElementById("create").innerHTML = `Create Your First Task!`


document.getElementById("create").onclick = function() {

    document.getElementById("Task1").innerHTML = "Your first task is:"
    let thing1 = window.prompt("What Is the thing you need to do?")
    document.getElementById("p1").innerHTML = `To ${thing1}!`
    document.getElementById("create2").innerHTML = `Create Your second Task!`
    document.getElementById("create").innerHTML = `Edit Task 1?`
    console.log(`First Task is ${thing1}`)

}


document.getElementById("create2").onclick = function() {

  
  document.getElementById("Task2").innerHTML = "Your second task is:"
    let thing2 = window.prompt("What Is the thing you need to do?")
    document.getElementById("p2").innerHTML = `To ${thing2}!`
    document.getElementById("create2").innerHTML = `Edit Task 2?`
    console.log(`Second Task is ${thing2}`)

}

// get the element
const element = document.getElementById('create')

// always checking if the element is clicked, if so, do alert('hello')
element.addEventListener("click", () => {
	window.alert('Now saved in the list.');
});

// get the element
const element2 = document.getElementById('create2')

// always checking if the element is clicked, if so, do alert('hello')
element2.addEventListener("click", () => {
	window.alert('Now saved in the list.');
});








