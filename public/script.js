const body = document.querySelector("body");
const inputTxt = document.getElementById("myInput");
const todoList = document.querySelector("ul.todo-list");
const totalItems = document.getElementById("item-length");
const modeButton = document.getElementById("mode-btn");

const allBtn = document.getElementById("all-btn");
const activeBtn = document.getElementById("active-btn");
const completedBtn = document.getElementById("complt-btn");
const clearComplt = document.getElementById("clear-btn");



let data = [
  { name: "workout", check: false },
  { name: "sarapan", check: false },
  { name: "kuliah", check: false },


]

const listTemplate = ({ name, check }, id) => {
  if (check) {
    return `<li   class="todo-item group dark:border-darkTheme-700 px-4 h-10 border-b-2 flex items-center relative ">
              <button onclick={checked(event)}   class="check-border bg-check border-transparent  p-1 text-align bg-transparent mr-2 w-5 h-5 rounded-full border-2 border-lightTheme-400">
              <img src="../src/images/icon-check.svg" class="checked " />
              </button>                
            <span onclick={checked(event)}  class="text text-lightTheme-300 line-through text-${id} cursor-pointer w-full ">${name}</span>
            <button onclick={deleteItem(${id})} class="close-button opacity-0 cursor-pointer group-hover:opacity-100 ease-out duration-500 w-5 h-5 absolute top-3 right-4">
            <img src="../src/images/icon-cross.svg" class="close ml-2 border-lightTheme-400 w-full "/>
            </button>
            </li>`
  }
  return `<li   class="todo-item group dark:border-darkTheme-700 px-4 h-10 border-b-2 flex items-center relative ">
          <button onclick={checked(event)}   class="check-border p-1 text-align bg-transparent mr-2 w-5 h-5 rounded-full border-2 border-lightTheme-400">
          <img src="../src/images/icon-check.svg" class="checked opacity-0" />
          </button>                
        <span onclick={checked(event)}  class="text text-${id} cursor-pointer w-full">${name}</span>
        <button onclick={deleteItem(${id})} class="close-button opacity-0 cursor-pointer group-hover:opacity-100 ease-out duration-500 w-5 h-5 absolute top-3 right-4">
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
  getData.map((item, i) => {

    const newItem = listTemplate(item, i)
    todoList.innerHTML += newItem;
  })

  totalItems.innerHTML = `${data.length} items length`;
}

// add new data
const addItem = (e) => {
  if (e.key == "Enter") {
    data.push({ id: data.length, name: inputTxt.value, check: false })
    inputTxt.value = ""
    loadAllData()
  }
}

inputTxt.addEventListener("keyup", addItem)


// check data
const checked = (e) => {
  data.map(item => {
    if (e.target.innerHTML == item.name) {
      item.check = !item.check
    }
  })
  loadAllData()
}

// delete data
const deleteItem = (index) => {

  data = data.filter((item, i) => i !== index)
  loadAllData()
}

// item active
activeBtn.addEventListener('click', () => {
  let count = 0
  data.map(item => {
    if (item.check == false) count++
  })
  totalItems.innerHTML = `${count} items length`;
  count = 0
})

// show items length
allBtn.addEventListener('click', () => {
  loadAllData()
})

// show items length completed
completedBtn.addEventListener('click', () => {
  let count = 0
  data.map(item => {
    if (item.check == true) count++
  })
  totalItems.innerHTML = `${count} items length`;
  count = 0
})


// clear completed
clearComplt.addEventListener('click', () => {
  data = data.filter(item => item.check !== true)
  loadAllData()
})


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


