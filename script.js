///////  Selectors ///////////
const monthButton = document.querySelector(".selected-month");
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
const selectedListBtn = document.getElementsByClassName("selected-list")[0];

///////// Variables //////////

const tasks = {
  allTasks : [],
  completedTasks: []
  /* exTaskList : {
       listName : 'string',
       tasks : [array]
  } */
}

/////// function declarations ////////////

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

/////// event listeners  /////////

tasksBtn.addEventListener("click", () => {
  showTab(taskTab, tasksBtn);
});

completedBtn.addEventListener("click", () => {
  showTab(completedTab, completedBtn);
});

categoriesBtn.addEventListener("click", () => {
  showTab(categoriesTab, categoriesBtn);
});

selectedListBtn.addEventListener("click", () => {
  taskLists.classList.toggle('show');
});

document.addEventListener("click", (event) => {
  if (!event.target.closest('.selected-list') && taskLists.classList.contains('show')) {
    taskLists.classList.remove('show')
  }
});
