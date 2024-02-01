const students = [
  {
    id: 1,
    name: "Snape",
    house: "Slytherin",
    imageUrl: "https://hips.hearstapps.com/cos.h-cdn.co/assets/16/02/1024x768/sd-aspect-1452789266-professor-severus-snape-harry-potter-1.jpg?resize=1200:*",
  },
  {
    id: 2,
    name: "Harry Potter",
    house: "Gryffindor",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/mv5bogi0ogi5ztmtnwm4ys00zwizlthmymytzgnknzdkotnjndkxxkeyxkfqcgdeqxvynjq4ode4mzqat-v1-sy1000-cr0-0-1528-1000-al-1589922130.jpg?crop=0.656xw:1.00xh;0.119xw,0&resize=640:*",
  }
];  


const app = document.querySelector('#app')
// app.innerHTML = "testing"

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender
};

const cardsOnDom = (students) => {
  let domString = ""
  students.map(student => {
    domString += `<div class="card" style="width: 18rem;">
      <h5 class="card-title">${student.name}</h5>
      <img src="${student.imageUrl}" class="card-img-top" alt="${student.name}">
      <div class="card-body">
        <p class="card-text">House: ${student.house}</p> 
         <button class="btn btn-danger" id="delete--${student.id}" class="delbtn">Expel</button>
</div>
</div>`;
  })
  renderToDom("#app", domString);
};
cardsOnDom(students); 

//next i need to target the buttons on the DOM
const allButton = document.querySelector("#All")  
const gryfButton = document.querySelector("#Gryffindor")
const slyButton = document.querySelector("#Slytherin")
const huffButton = document.querySelector("#Hufflepuff")
const ravenButton = document.querySelector("#Ravenclaw")

//add click even to show all the students on button cluck using the function we created
gryfButton.addEventListener("click", () => {
  filter(students, "Gryffindor")
  console.log("clicky"); 
});

slyButton.addEventListener("click", () => {
  filter(students, "Slytherin")
  console.log("clicks");
});

huffButton.addEventListener("click", () => {
  filter(students, "Hufflepuff")
  console.log("clicks");
});

ravenButton.addEventListener("click", () => {
  filter(students, "Ravenclaw")
  console.log("clicks");
});

allButton.addEventListener("click", () => {
  cardsOnDom(students)
  console.log("clicks");
});

//not working yet// works now i had to add students as an argument
const filter = (students, house) => {
  const houseArray = [];
  students.map(student => {
    if(student.house === house) {
      houseArray.push(student);
    }
    cardsOnDom(houseArray);
  })
}



const startApp = () => {
  cardsOnDom(students);
  e();
}
startApp();
