// Our large collection of fruits (the database!)
let Reminders = [
  "Hit the gym",
  "Pay bills",
  "Meet George",
  "Buy eggs",
  "Read a book",
  "Organize office",
];

// DocString

/** @type {HTMLDivElement} */
let searchAlert = document.getElementById("alert-search-warn");
/** @type {HTMLInputElement} */
let searchInput = document.getElementById("myInput");
/** @type {HTMLUListElement} */
let ReminderList = document.getElementById("myUL");

// Hide the search results alert warning.
searchAlert.style.display = "none";
// Focus the search bar so users can start typing to search immediately.
searchInput.focus();

// Append all the fruit to load dynamically.
for (const Reminder of Reminders) {
  ReminderList.innerHTML += `
    <li>${Reminder}</li>
  `;
}

// Check for results after each keystroke on the search bar.
searchInput.addEventListener("keyup", function () {
  let matchesFound = 0;
  const query = this.value.toLowerCase().trim();

  for (const child of ReminderList.children) {
    const ReminderName = child.innerText;
    const matchFound = ReminderName.toLowerCase().includes(query);

    // Display or hide the item, if the query matches the fruit name.
    if (matchFound) {
      child.style.display = "list-item";
      matchesFound += 1;
    } else {
      child.style.display = "none";
    }
  }

  // Show or hide the alert, if no results were found.
  if (query !== "" && matchesFound === 0) {
    searchAlert.innerText = `No results found for '${query}'.`;
    searchAlert.style.display = "block";
  } else {
    searchAlert.style.display = "none";
  }
});
// Todo List
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
