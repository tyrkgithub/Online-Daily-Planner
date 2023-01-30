// Set time to the top of the page
var today = moment();
$("#currentDay").text(today.format("Do MMM YYYY HH:mm"));

// let currentHour = today.getHours();

let workingHours = [
  {
  name: "hour9",
  value: 9
  },
  {
  name: "hour10",
  value: 10
  },
  {
  name: "hour11",
  value: 11
  }
  {
  name: "hour12",
  value: 12,

  "hour13",
  "hour14",
  "hour15",
  "hour16",
  "hour17",
];

let hour9 = moment().hour(9);
hour9.innerHTML = "9AM";
let hour10 = moment().hour(10);
hour10.innerHTML = "10AM";
let hour11 = moment().hour(11);
hour11.innerHTML = "11AM";
let hour12 = moment().hour(12);
hour12.innerHTML = "12PM";
let hour13 = moment().hour(13);
hour13.innerHTML = "1PM";
let hour14 = moment().hour(14);
hour14.innerHTML = "2PM";
let hour15 = moment().hour(15);
hour15.innerHTML = "3PM";
let hour16 = moment().hour(16);
hour16.innerHTML = "4PM";
let hour17 = moment().hour(17);
hour17.innerHTML = "5PM";

function createTable() {
  let table = document.createElement("table");
  let tableRow = document.createElement("tr");
  let th1 = document.createElement("th");
  th1.innerHTML = "Time";
  let th2 = document.createElement("th");
  th2.innerHTML = "Schedule";
  let th3 = document.createElement("th");
  th3.innerHTML = "Save";
  tableRow.append(th1, th2, th3);
  table.append(tableRow);
  for (let i = 0; i < workingHours.length; i++) {
    let tableRow = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = workingHours[i];
    let td2 = document.createElement("textarea");

    let td3 = document.createElement("button");
    tableRow.append(td1, td2, td3);
    var btnImg = $("<i>").addClass("fas fa-save fa-2x");
    td3.append(btnImg);
    table.append(tableRow);
  }
  document.getElementById("timeCon").append(table);
}

createTable();

// workingHours.forEach(function (workingHours) {
//   let amPM = workingHours.timeName;
//   let timeId = workingHours.timeNum;

//   let row = $("<section>").addClass("row");
//   timeCon.append(row);

//   let span = $("<span>" + amPM + "</span>").addClass("hour col-1");
//   row.append(span);

//   let userInput = $("<textarea").addClass("col-10 textarea");
//   userInput.attr("id", timeId);
//   row.append(userInput);

//   if (currentHour > timeId) {
//     userInput.addClass("past");
//     userInput.prop("disabled", true);
//   } else if (currentHour < timeId) {
//     userInput.addClass("future");
//   } else if (currentHour === timeId) {
//     userInput.addClass("present");
//   }
//   var button = $("<button>").addClass("saveBtn col-1");
//   row.append(button);
//   var btnImg = $("<i>").addClass("fas fa-save fa-2x");
//   button.append(btnImg);

//   var key = timeId;
//   var value = localStorage.getItem(key);
//   userInput.val(value);

//   row.on("click", "button", function (event) {
//     event.preventDefault();
//     var value = userInput.val();
//     localStorage.setItem(key, value);
//   });
// });
// /let events = ["", "", "", "", "", "", "", "", ""];
// let saveButtons = [
//   "hhh",
//   "kkk",
//   "lll",
//   "hhh",
//   "bbb",
//   "kkk",
//   ",,,",
//   "lll",
//   "jjj",
// ];

// let table =
//   "<table><thead><tr><th>Time<th>Event</th><th>Save</th></tr></thead><tbody>";
// for (i = 0; i < workingHours.length; i++) {
//   table +=
//     "<tr><td>" +
//     workingHours[i] +
//     "</td><td>" +
//     events[i] +
//     "</td><td>" +
//     saveButtons[i] +
//     "</td></th>";
// }

// table += "</tbody></table>";

// divCon.innerHTML = table;

// var button = $("<button>").addClass("saveBtn col-1");
// row.append(button);

// var btnImg = $("<i>").addClass("fas fa-save fa-2x");
// button.append(btnImg);
