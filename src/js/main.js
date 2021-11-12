"user strict"


// Aktuelles Datum anzeigen
let current_date = new Date();
let option_date = {
    year: "numeric",
    month: "long",
    day: "2-digit",
};
date = current_date.toLocaleString("de-DE", option_date);
document.querySelector("#current-date").innerHTML = date;


// Aktuelle Uhrzeit anzeigen
function set_current_time() {
    let current_time = new Date();
    let option_time = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };
    time = current_time.toLocaleString("de-DE", option_time);
    document.querySelector("#current-time").innerHTML = time;
    setTimeout(set_current_time, 500);
}
set_current_time();


// Aktuelles Datum für new_Todo
date_new_todo = current_date.getFullYear().toString() + '-' + (current_date.getMonth() + 1).toString().padStart(2, 0) +
    '-' + current_date.getDate().toString().padStart(2, 0);
// document.querySelector("#todo-date").setAttribute("value", date_new_todo);


// min-Datum für new_Todo
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 
today = yyyy+'-'+mm+'-'+dd;
// document.getElementById("todo-date").setAttribute("min", today);
