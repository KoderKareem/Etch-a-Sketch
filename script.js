let container = document.querySelector("#container");
let button = document.querySelector("button");

button.addEventListener("click", btnClicked);

const numOfDivs = 572;

for (let i = 0; i < numOfDivs; i++) {
  let newDiv = document.createElement("div");
  newDiv.className = "box";

  newDiv.addEventListener("mouseenter", ch);
  container.appendChild(newDiv);

  function ch(e) {
    let changeColor = (newDiv.style.backgroundColor = "blueviolet");
  }
}
function btnClicked(e) {
  let numberOfGrid = prompt("How many Squres do you want?");

  if (numberOfGrid <= 572) {
    const divsInsideContainer = container.querySelectorAll("div");
    divsInsideContainer.forEach((div) => {
      div.remove();
    });

    for (let i = 0; i < numberOfGrid; i++) {
      const newDiv = document.createElement("div");

      newDiv.className = "box";
      newDiv.addEventListener("mouseenter", change);
      container.appendChild(newDiv);

      function change(e) {
        let changeColor = (newDiv.style.backgroundColor = "red");
      }
    }
  } else {
    alert("please Enter below 573")
  }
}

// const divsInsideContainer = container.querySelectorAll("div");
// divsInsideContainer.forEach((div) => {
//   div.remove();
// });
