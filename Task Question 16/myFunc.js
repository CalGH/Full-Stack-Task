document.addEventListener("DOMContentLoaded", function() {
function setText(htmlElement, addition) {
    htmlElement.appendChild(document.createTextNode(addition.join(" ")));
}

function createList() {
  let myList = document.querySelector('#myList');

  for (let i = 1; i <= 100; ++i) {
    let newItem = document.createElement('li');
    newItem.classList.add("list-group-item");

    let newText = [String(i)];
    if(i % 3 == 0) {
       newText.push("Fizz");
    }
    if (i % 5 == 0) {
      newText.push("Buzz");
    }
    setText(newItem, newText);
    myList.appendChild(newItem);
  }
}

document.getElementById('newStuff').addEventListener("click", createList);
document.getElementById('clearStuff').addEventListener("click", function(){
  document.querySelector('#myList').innerHTML = "";
});
})
