const body = document.querySelector("body");
const inputTxt = document.getElementById("myInput");
const todoList = document.querySelector("ul.todo-list");
const totalItems = document.getElementById("item-length");
const modeButton = document.getElementById("mode-btn");
// const todoItems = todoList.childNodes;
// const todoItems = document.querySelectorAll("li.todo-item");

// console.log(todoItems)

const allBtn = document.getElementById("all-btn");
const activeBtn = document.getElementById("active-btn");
const completedBtn = document.getElementById("complt-btn");
const clearComplt = document.getElementById("clear-btn");



let data = ["workout", "sarapan", "kuliah"];

const listTemplate = (item, index) => {
  return `<li class="todo-item group dark:border-darkTheme-700 px-4 h-10 border-b-2 flex items-center relative ">
          <button onclick={checked(${index})} class="check-border p-1 text-align bg-transparent mr-2 w-5 h-5 rounded-full border-2 border-lightTheme-400">
          <img src="../src/images/icon-check.svg" class="checked opacity-0" />
          </button>                
        <span class="text text-${index + 1} cursor-pointer w-full">${item}</span>
        <button onclick={deleteItem(${item})} class="close-button opacity-0 cursor-pointer group-hover:opacity-100 ease-out duration-500 w-5 h-5 absolute top-3 right-4">
        <img src="../src/images/icon-cross.svg" class="close ml-2 border-lightTheme-400 w-full "/>
        </button>
        </li>`
}


// load data
const loadAllData = () => {
  localStorage.setItem("object", JSON.stringify(data))
  const object = localStorage.getItem('object')
  const getData = JSON.parse(object)
  todoList.innerHTML = ""

  getData.map((item, index) => {
    const newItem = listTemplate(item, index);
    todoList.innerHTML += newItem;
  })

  totalItems.innerHTML = `${data.length} items length`;
}

// add new data
inputTxt.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    data.push(inputTxt.value)
    inputTxt.value = ""
    loadAllData()
  }

})

const checked = (id) => {
  console.log(id)

}

// delete data
const deleteItem = (index) => {
  console.log(index)
  // data = data.filter((item, i) => i !== index)
  loadAllData()
}



// change mode
const changeMode = () => {
  const imgSource = ["../src/images/icon-moon.svg", "../src/images/icon-sun.svg"];

  if (document.documentElement.classList.contains("dark")) {
    modeButton.firstElementChild.src = imgSource[0];
    body.style.backgroundImage = window.innerWidth < 640 ? "url(../src/images/bg-mobile-light.jpg)" : "url(../src/images/bg-desktop-light.jpg)";
  } else {
    modeButton.firstElementChild.src = imgSource[1];
    body.style.backgroundImage = window.innerWidth < 640 ? "url(../src/images/bg-mobile-dark.jpg)" : "url(../src/images/bg-desktop-dark.jpg)";
  }

  document.documentElement.classList.toggle("dark");
};


modeButton.addEventListener("click", changeMode);
