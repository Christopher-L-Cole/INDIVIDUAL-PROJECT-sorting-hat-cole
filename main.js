const students = [
  {
    id: 1,
    name: "Snape",
    house: "Slytherin",
  },
  {
    id: 2,
    name: "Harry Potter",
    house: "Gryffindor",
  }
];  

const voldysStudents = [];


const app = document.querySelector('#app')

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender
};

const cardsOnDom = (students) => {
  let domString = ""
  students.map(student => {
    domString += `<div class="card" style="width: 18rem;">
      <h5 class="card-title">${student.name}</h5>
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

// works now i had to add students as an argument
const filter = (students, house) => {
  const houseArray = [];
  students.map(student => {
    if(student.house === house) {
      houseArray.push(student);
    }
    cardsOnDom(houseArray);
  })
}

//Create 1. select the form on the dom
const form = document.querySelector('form');
// form.addEventListener('submit'), (e) => {
//   e.preventDefault()
// }

//sort randomizer//
const assignRandomHouse = () => {
  const randomizer = Math.floor(Math.random() * 4);
  const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"]
  // const name = document.querySelector("#studentName");
  return houses[randomizer];
};
// 2. create a function that grabs all the values from the form, pushes the new object to the array, 
//then repaints the DOM with the new teammate
const newStudent = () => {
  const newStudentObj = {
    id: students.length + 1,
    name: document.querySelector("#studentName").value,
    house: assignRandomHouse(), //it worked
  };
  students.push(newStudentObj);
  cardsOnDom(students);
  form.reset();
};

// 3. Add an event listener for the form submit and pass it the function (callback)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  newStudent();
});






const startApp = () => {
  cardsOnDom(students);
};
startApp();
