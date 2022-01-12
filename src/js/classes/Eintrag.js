"use strict";

class Eintrag {

    constructor(todo, datum) {
        this._todo = todo;
        this._datum = datum;
    }

    // Todo-Eintrag erstellen
    html_generieren() {

        let gesamteintrag = document.createElement("div");
        gesamteintrag.setAttribute("id", "TEST-text_div1");
        gesamteintrag.setAttribute("class", "container");

        let eintrag = document.createElement("div");
        eintrag.setAttribute("id", "TEST-text-div2");

        let form = document.createElement("form");
        form.setAttribute("class", "todo-form");

        let img_square = document.createElement("img");
        img_square.setAttribute("src", "src/img/square.PNG");
        img_square.setAttribute("id", "square");
        img_square.setAttribute("alt", "done");

        let input_todo = document.createElement("input");
        input_todo.setAttribute("type", "text");
        input_todo.setAttribute("class", "todo-input");
        input_todo.setAttribute("value", this._todo);

        let input_date = document.createElement("input");
        input_date.setAttribute("type", "date");
        input_date.setAttribute("class", "date-of-todo");
        input_date.setAttribute("value", this._datum);
  
        let img_trash = document.createElement("img");
        img_trash.setAttribute("src", "src/img/trash.PNG");
        img_trash.setAttribute("id", "trash");
        img_trash.setAttribute("alt", "delete");

        gesamteintrag.insertAdjacentElement("afterbegin", eintrag);
        gesamteintrag.insertAdjacentElement("beforeend", form);
        form.insertAdjacentElement("beforeend", img_square);
        form.insertAdjacentElement("beforeend", input_todo);
        form.insertAdjacentElement("beforeend", input_date);
        form.insertAdjacentElement("beforeend", img_trash); 

        return gesamteintrag;

    }
} // Ende Class Eintrag


// Add Todo-Eintrag + Todo-Datum
let todo_eintrag;
let todo_datum;
let id_text;

let add_button = document.querySelector("#plus-img");

add_button.addEventListener("click", function() {
  
    todo_eintrag = document.querySelector("#new-todo").value;
    todo_datum = document.querySelector("#set-date").value;

    let todo_vergleichsdatum = new Date(todo_datum = document.querySelector("#set-date").value);
    let akt_datum = new Date();

    if (    todo_vergleichsdatum.getFullYear() === akt_datum.getFullYear() &&
            todo_vergleichsdatum.getMonth() === akt_datum.getMonth() &&
            todo_vergleichsdatum.getDate() === akt_datum.getDate()         
        ) {id_text = "heute";     
        } else if (todo_vergleichsdatum < akt_datum) {
            id_text = "overdue-container"; 
            } else if ( todo_vergleichsdatum.getFullYear() === akt_datum.getFullYear() &&
                        todo_vergleichsdatum.getMonth() === akt_datum.getMonth() &&
                        todo_vergleichsdatum.getDate() === akt_datum.getDate() + 1     
                    ) {id_text = "tomorrow-container";
                } else if (todo_vergleichsdatum > akt_datum) {
                    id_text = "later-container";
                }

const eintrag1 = new Eintrag(todo_eintrag, todo_datum);
let inhalt1 = eintrag1.html_generieren();


if(id_text === "heute") {
    let site = document.querySelector("#today");
    site.insertAdjacentElement("afterend", inhalt1);
} else if (id_text === "tomorrow-container") {
    let site = document.querySelector("#tomorrow");
    site.insertAdjacentElement("afterend", inhalt1);
} else if (id_text === "later-container") {
    let site = document.querySelector("#later");
    site.insertAdjacentElement("afterend", inhalt1);
} else if (id_text === "overdue-container") {
    let site = document.querySelector("#overdue");
    site.insertAdjacentElement("afterend", inhalt1);
}

reset_todo_native()
reset_date_native()

});





