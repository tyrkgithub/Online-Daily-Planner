// Set time to the top of the page
var today = moment();
$("#currentDay").text(today.format("Do MMM YYYY HH:mm"));

// Find the current hour
const d = new Date();
let currentHour = d.getHours();

// Set the working hours for the schedule.
let workingHours = [
  {
    name: "9AM", // What I want to display on the page
    value: 9, // The number to use to compare schedule time and current time
  },
  {
    name: "10AM",
    value: 10,
  },
  {
    name: "11AM",
    value: 11,
  },
  {
    name: "12PM",
    value: 12,
  },
  {
    name: "1PM",
    value: 13,
  },
  {
    name: "2PM",
    value: 14,
  },
  {
    name: "3PM",
    value: 15,
  },
  {
    name: "4PM",
    value: 16,
  },
  {
    name: "5PM",
    value: 17,
  },
];

function createTable() {
  // Does the following:

  let table = $("<table>"); // Creates table
  table.addClass("time-block"); // Gives table class

  for (let i = 0; i < workingHours.length; i++) {
    // For however many working hours there are do this:
    let tableRow = $("<tr>"); // Create a table row
    tableRow.addClass("row"); // Gives row class
    tableRow.attr("id", workingHours[i].name);

    let hour = $("<th>"); // Creates element in the row to display time
    hour.addClass("hour"); // Give time a class
    hour.textContent = workingHours[i].name; // Sets the workingHours.name strings as times

    let description = $("<textarea>"); // Creates a text input area
    description.addClass("textarea"); // Adds class to textarea

    let button = $("<button>"); // Creates button
    button.addClass("saveBtn"); // Adds class to button

    tableRow.append(hour, description, button); // Joins the time, textarea and button columns in one row
    table.append(tableRow); // Joins the rows to the table
  }
  $("#timeCon").append(table); //Joins the table to the HTML
}
createTable();

$("#9AM .textarea").val(localStorage.getItem("9AM"));
$("#10AM .textarea").val(localStorage.getItem("10AM"));
$("#11AM .textarea").val(localStorage.getItem("11AM"));
$("#12PM .textarea").val(localStorage.getItem("12PM"));
$("#1PM .textarea").val(localStorage.getItem("1PM"));
$("#2PM .textarea").val(localStorage.getItem("2PM"));
$("#3PM .textarea").val(localStorage.getItem("3PM"));
$("#4PM .textarea").val(localStorage.getItem("4PM"));
$("#5PM .textarea").val(localStorage.getItem("5PM"));

$("button").on("click", function () {
  let key = $(this).parent().attr("id");
  console.log(key);
  let value = $(this).siblings(".textarea").val();
  console.log(value);
  localStorage.setItem(key, value);
});

// for (let i = 0; i < workingHours.length; i++) {
//   if (currentHour > workingHours[i].value) {
//     description.addClass("past");
//   } else if (currentHour < workingHours[i].value) {
//     description.addClass("future");
//   } else if (currentHour === workingHours[i].value) {
//     description.addClass("present");
//   }
// }
