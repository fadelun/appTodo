const inputTxt = document.getElementById("myInput");
const todoList = document.querySelector("ul.todo-list");
let list = [];

const inputText = (event) => {
  if (event.key == "Enter") {
    list.push(inputTxt.value);

    const newItem = `<li class="p-3 pl-4 border-b-2 flex">
                      <img src="./src/images/icon-check.svg" class="checked p-1 text-align bg-transparent mr-2 rounded-full border-2 border-lightTheme-400" />
                      
                      <span class="text text-${list.length + 1}">${inputTxt.value}</span>
                  </li>`;

    todoList.innerHTML += newItem;
    console.log(list);
    inputTxt.value = "";

    const allItems = todoList.querySelectorAll("li");
    for (let i = 0; i < allItems.length; i++) {
      let item = allItems[i];
      let text = item.querySelector(".text");
      let check = item.querySelector(".checked");

      item.addEventListener("click", (event) => {
        if (event.target == text) {
          text.classList.toggle("line-through");
          text.classList.toggle("text-lightTheme-300");
        }
        if (event.target == check) {
          check.classList.toggle("bg-check");
          check.classList.toggle("border-transparent");
        }
      });
    }
  }
};

inputTxt.addEventListener("keydown", inputText);
