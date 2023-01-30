// Set time to the top of the page
var today = moment();
$("#currentDay").text(today.format("Do MMM YYYY HH:mm"));

// let currentHour = today.getHours();

let workingHours = [
  {
    name: "9AM",
    value: 9,
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
  let table = document.createElement("table");
  $("table").addClass(".time-block");
  let tableRow = document.createElement("tr");
  $("tr").addClass(".row");
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
    $("tr").addClass(".row");
    let amPM = document.createElement("td");
    amPM.innerHTML = workingHours[i].name;
    let userInput = document.createElement("textarea");
    let button = document.createElement("button");
    $("button").addClass(".saveBtn");
    tableRow.append(amPM, userInput, button);
    table.append(tableRow);
  }
  document.getElementById("timeCon").append(table);

  button.addEventListener("click", function(event)
  event.preventDefualt())
}

createTable();

// let hour9 = moment().hour(9);
// hour9.innerHTML = "9AM";
// let hour10 = moment().hour(10);
// hour10.innerHTML = "10AM";
// let hour11 = moment().hour(11);
// hour11.innerHTML = "11AM";
// let hour12 = moment().hour(12);
// hour12.innerHTML = "12PM";
// let hour13 = moment().hour(13);
// hour13.innerHTML = "1PM";
// let hour14 = moment().hour(14);
// hour14.innerHTML = "2PM";
// let hour15 = moment().hour(15);
// hour15.innerHTML = "3PM";
// let hour16 = moment().hour(16);
// hour16.innerHTML = "4PM";
// let hour17 = moment().hour(17);
// hour17.innerHTML = "5PM";

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

// let table =

// var button = $("<button>").addClass("saveBtn col-1");
// row.append(button);

// var btnImg = $("<i>").addClass("fas fa-save fa-2x");
// button.append(btnImg);
