"use strict";

class Eintrag {

    // constructor(todo, datum) {
    //     this._todo = todo;
    //     this._datum = datum;
    // }

    // Todo-Eintrag erstellen
    html_generieren() {

        let gesamteintrag = document.createElement("div");
        gesamteintrag.setAttribute("id", "***FunktionFuerRichtigen()***-text");
        gesamteintrag.setAttribute("class", "container");

        let eintrag = document.createElement("div");
        eintrag.setAttribute("id", "***FunktionFuerRichtigen()***-text");

        let form = document.createElement("form");
        form.setAttribute("class", "todo-form");

        let img_square = document.createElement("img");
        img_square.setAttribute("src", "src/img/square.PNG");
        img_square.setAttribute("id", "square");
        img_square.setAttribute("alt", "done");

        let input_todo = document.createElement("input");
        input_todo.setAttribute("type", "text");
        input_todo.setAttribute("class", "todo-input");

        let input_date = document.createElement("input");
        input_date.setAttribute("type", "date");
        input_date.setAttribute("class", "date-of-todo");
  
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

    // _eintragsposition_ermitteln() {

    //     let heute = new Date();
    //     console.log(heute);

    //     if (Date.now() < datum) {
    //         id_text_main_container = "overdue-container";
    //         id_text_eintrags_container = "overdue";
    //         html_text = "Überfällig";
    //     }
    //     if (Date.now() < datum) {
    //         id_text_main_container = "overdue-container";
    //         id_text_eintrags_container = "overdue";
    //         html_text = "Überfällig";
    //     }

    //     "today-container" class="container">
    //     <div id="today">Heute<


    // }

}




