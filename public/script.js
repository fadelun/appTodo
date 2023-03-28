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



let array = ["workout", "sarapan", "kuliah"];

const listTemplate = (item, index) => {
  return `<li class="todo-item group dark:border-darkTheme-700 px-4 h-10 border-b-2 flex items-center relative ">
          <button class="check-border p-1 text-align bg-transparent mr-2 w-5 h-5 rounded-full border-2 border-lightTheme-400">
          <img src="../src/images/icon-check.svg" class="checked opacity-0" />
          </button>                
        <span class="text text-${index + 1} cursor-pointer w-full">${item}</span>
        <button class="close-button opacity-0 cursor-pointer group-hover:opacity-100 ease-out duration-500 w-5 h-5 absolute top-3 right-4">
        <img src="../src/images/icon-cross.svg" class="close ml-2 border-lightTheme-400 w-full "/>
        </button>
        </li>`
}



const checkArray = () => {
  if (array.length > 0) {
    array.map((item, index) => {
      const newItem = listTemplate(item, index);
      todoList.innerHTML += newItem;
      totalItems.innerHTML = `${array.length} items length`;
      inputTxt.value = "";

    })
  }


}

const checkAllList = (event) => {
  console.log(event)
  const todoItems = todoList.querySelectorAll("li");
  console.log(todoItems)
  const items = Object.values(todoItems)
  const getAttributes = items.map(item => {
    let text = item.querySelector(".text");
    let check = item.querySelector(".check-border");
    let close = item.querySelector(".close-button");

    //check button
    item.addEventListener("click", (event) => {

      if (event.target == check || event.target == check.firstElementChild || event.target == text || event.target === item) {
        check.classList.toggle("bg-check");
        check.classList.toggle("border-transparent");
        check.firstElementChild.classList.toggle("opacity-0");
        text.classList.toggle("line-through");
        text.classList.toggle("text-lightTheme-300");
        if (text.classList.contains("line-through")) {
          totalItems.innerHTML = `${(array.length -= 1)} items length`;
        } else {
          totalItems.innerHTML = `${(array.length += 1)} items length`;
        }
      }
    })

    // close button
    close.addEventListener('click', (event) => {
      console.log(event.target)
      if (!text.classList.contains("line-through")) {
        item.remove();
        totalItems.innerHTML = `${(array.length -= 1)} items length`;
      }

    });
  })
}


const handleInputText = (event) => {
  if (event.key == "Enter") {
    array.push(inputTxt.value);
    const newItem = listTemplate(inputTxt.value, array.length)
    todoList.innerHTML += newItem;
    totalItems.innerHTML = `${array.length} items length`;
    inputTxt.value = "";
    console.log(array)
  }

}
inputTxt.addEventListener("keypress", handleInputText);




checkArray()
checkAllList()



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


// create new todo
const inputText = (event) => {
  const allBtn = document.getElementById("all-btn");
  const activeBtn = document.getElementById("active-btn");
  const completedBtn = document.getElementById("complt-btn");
  const clearComplt = document.getElementById("clear-btn");




  // if (event.key == "Enter") {

  //   array.push(inputTxt.value);

  //   const newItem = listTemplate(inputTxt.value, array.length)


  //   todoList.innerHTML += newItem;
  //   totalItems.innerHTML = `${array.length} items length`;
  //   inputTxt.value = "";

  //   console.log(array)

  //   const allItems = todoList.querySelectorAll("li");
  //   console.log("allitems =>", allItems)
  //   for (let i = 0; i < allItems.length; i++) {
  //     let item = allItems[i];
  //     let text = item.querySelector(".text");
  //     let check = item.querySelector(".check-border");
  //     let close = item.querySelector(".close-button");


  //     item.addEventListener("click", (event) => {
  //       //check button
  //       if (event.target == check || event.target == check.firstElementChild || event.target == text || event.target === item) {
  //         check.classList.toggle("bg-check");
  //         check.classList.toggle("border-transparent");
  //         check.firstElementChild.classList.toggle("opacity-0");
  //         text.classList.toggle("line-through");
  //         text.classList.toggle("text-lightTheme-300");
  //         if (text.classList.contains("line-through")) {
  //           totalItems.innerHTML = `${(array.length -= 1)} items length`;
  //         } else {
  //           totalItems.innerHTML = `${(array.length += 1)} items length`;
  //         }
  //       }

  //       // close button
  //       close.addEventListener('click', () => {

  //         console.log(event.target)
  //         if (!text.classList.contains("line-through")) {
  //           item.remove();
  //           totalItems.innerHTML = `${(array.length -= 1)} items length`;
  //         }

  //       });

  //     })
  //   }
  // }
  let total = todoList.children;
  let lineThrough = [];

  allBtn.addEventListener("click", () => {
    let total = todoList.childElementCount;
    totalItems.innerHTML = `${total} items length`;
  });

  activeBtn.addEventListener("click", () => {
    totalItems.innerHTML = `${array.length} items length`;
    lineThrough = [];
  });

  completedBtn.addEventListener("click", () => {
    [...total].forEach((item) => {
      if (item.children[1].classList.contains("line-through")) {
        lineThrough.push(item);
      }
    });
    totalItems.innerHTML = `${lineThrough.length} items length`;
  });

  clearComplt.addEventListener("click", () => {
    lineThrough = [];
    array = [];
    totalItems.innerHTML = `${array.length} items length`;
    [...total].forEach((item) => item.remove());
  });
};

inputTxt.addEventListener("keydown", inputText);
modeButton.addEventListener("click", changeMode);
