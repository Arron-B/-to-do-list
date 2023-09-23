///////  Selectors ///////////
const tasksBtn = document.getElementById("tab-button-1");
const completedBtn = document.getElementById("tab-button-2");
const categoriesBtn = document.getElementById("tab-button-3");
const tabButtons = document.querySelectorAll(".tab-button");
const taskTab = document.getElementById("tab1");
const completedTab = document.getElementById("tab2");
const categoriesTab = document.getElementById("tab3");
const allTabs = document.querySelectorAll(".tab");
const activeTab = document.getElementsByClassName("active-tab")[0];

const taskLists = document.getElementsByClassName("task-list-buttons")[0];

const taskModalBtn = document.querySelector(".new-task-button");
const taskModal = document.querySelector(".task-modal");
const taskModalInner = document.querySelector(".task-modal-container");
const xTaskModBtn = document.querySelector(".close-task-modal");

const listModalBtn = document.querySelector(".add-new-list");
///////// Variables //////////

let page = 1;

const categories = {
  Work: 'Work',
  Chores: 'Chores',
  Learning: 'Learning',
  Health: 'Health',
  Family: 'Family',
  Friends: 'Friends',
  Leisure: 'Leisure',
  Holiday: 'Holiday',
  Finance: 'Finance',
  Other: 'Other'
};

const tasks = {
  allTasks : [],
};

//task ex
// {task: str,   category: str, complete: false}

/////// function declarations ////////////

// const optionElement = document.createElement("option");

function showTab(selectedTab, clickedButton) {
  allTabs.forEach((el) => {
    !el.classList.contains("hidden") ? el.classList.add("hidden") : null;
    el.classList.contains("show-tab") ? el.classList.remove("show-tab") : null;
  });
  selectedTab.classList.remove("hidden");
  selectedTab.classList.add("show-tab");

  tabButtons.forEach((el) => {
    el.classList.contains("active-button")
      ? el.classList.remove("active-button")
      : null;
  });
  clickedButton.classList.add("active-button");
}


// function updateCategories () {
//   for (const category in categories) {
    
//   }
// }

/////// function invokes //////////


/////// event listeners  /////////

//Buttons
tasksBtn.addEventListener("click", () => {
  showTab(taskTab, tasksBtn);
});

completedBtn.addEventListener("click", () => {
  showTab(completedTab, completedBtn);
});

categoriesBtn.addEventListener("click", () => {
  showTab(categoriesTab, categoriesBtn);
});


// Modals

taskModalBtn.addEventListener("click", () => {
  taskModal.showModal();
})

xTaskModBtn.addEventListener("click", () => {
  taskModal.close();
})

taskModal.addEventListener('click', () => {
  taskModal.close()
})

taskModalInner.addEventListener('click', (event) => event.stopPropagation());
