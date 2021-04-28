document.getElementById('button').addEventListener('click', displayMessage)

function displayMessage () {
  document.getElementById('p').innerHTML ="Big Suprise"
  document.getElementById('p').style.color = "red";
  document.getElementById('p').style.fontFamily = "Fantasy"
  document.getElementById('p').style.fontSize = "300%"
}  
