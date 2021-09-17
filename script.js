const inputTxt = document.getElementById("myInput");
const todoList = document.querySelector("ul.todo-list");
const totalItems = document.getElementById("item-length");
const button = document.getElementById("mode-btn");
const allBtn = document.getElementById("all-btn");
const activeBtn = document.getElementById("active-btn");
const completedBtn = document.getElementById("complt-btn");
const clearComplt = document.getElementById("clear-btn");

let array = [];

allBtn.addEventListener("click", () => {
  let total = todoList.childElementCount;
  totalItems.innerHTML = `${total} items length`;
});

activeBtn.addEventListener("click", () => {
  totalItems.innerHTML = `${array.length} items length`;
});

completedBtn.addEventListener("click", () => {
  let total = todoList.children;
  let lineThrough = [];

  [...total].forEach((item) => {
    if (item.children[1].classList.contains("line-through")) {
      lineThrough.push(item);
    }
  });
  totalItems.innerHTML = `${lineThrough.length} items length`;
});

// change mode
button.addEventListener("click", () => {
  const imgSource = ["./src/images/icon-moon.svg", "./src/images/icon-sun.svg"];

  if (document.documentElement.classList.contains("dark")) {
    button.firstElementChild.src = imgSource[0];
  } else {
    button.firstElementChild.src = imgSource[1];
  }

  document.documentElement.classList.toggle("dark");
});

const inputText = (event) => {
  if (event.key == "Enter") {
    array.push(inputTxt.value);

    const newItem = `<li class="dark:border-darkTheme-700 p-2 pl-4 border-b-2 flex items-center relative">
                          <div class="check-border p-1 text-align bg-transparent mr-2 w-5 h-5 rounded-full border-2 border-lightTheme-400">
                          <img src="./src/images/icon-check.svg" class="checked opacity-0" />
                          </div>                
                      <span class="text text-${array.length + 1} cursor-default">${inputTxt.value}</span>
                      <img src="./src/images/icon-cross.svg" class="close ml-2 border-lightTheme-400 w-4 h-4 absolute top-3 right-2"/>
                  </li>`;

    todoList.innerHTML += newItem;
    totalItems.innerHTML = `${array.length} items length`;

    inputTxt.value = "";

    const allItems = todoList.querySelectorAll("li");
    for (let i = 0; i < allItems.length; i++) {
      let item = allItems[i];
      let text = item.querySelector(".text");
      let check = item.querySelector(".check-border");
      let close = item.querySelector(".close");

      item.addEventListener("click", (event) => {
        //
        if (event.target == check || event.target == check.firstElementChild || event.target == text || event.target === item) {
          check.classList.toggle("bg-check");
          check.classList.toggle("border-transparent");
          check.firstElementChild.classList.toggle("opacity-0");
          text.classList.toggle("line-through");
          text.classList.toggle("text-lightTheme-300");

          for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
          }

          if (text.classList.contains("line-through")) {
            totalItems.innerHTML = `${(array.length -= 1)} items length`;
          } else {
            totalItems.innerHTML = `${(array.length += 1)} items length`;
          }
        }

        // close button
        if (event.target == close) {
          if (!text.classList.contains("line-through")) {
            item.remove();
            totalItems.innerHTML = `${(array.length -= 1)} items length`;
          }
        }
      });
    }
  }
};

inputTxt.addEventListener("keydown", inputText);
