// Constantes para añadir la tarea a la lista
const tareaEntrada = document.querySelector("#input-texto");
const btnAdd = document.querySelector("#input-submit");
const listaTareas = document.querySelector(".tareas-lista");
const vacio = document.querySelector(".vacio");

// Función para añadir la tarea a la lista
btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const tareaTexto = tareaEntrada.value;
    const li = document.createElement("li");
    const p = document.createElement("p");
    if (tareaTexto.trim() !== "") {
        li.classList.add("tarea");
    li.classList.add("borde-radio");
    p.classList.add("texto-tarea");
    p.textContent = tareaTexto;
    li.appendChild(p);
    li.appendChild(addBtnDelete());
    listaTareas.appendChild(li);
    vacio.style.display = "none";
    } else {
        alert("Escribe la tarea que deseas añadir");
    }
    tareaEntrada.value = "";
    tareaEntrada.focus();
})

// Funcion que agrega el boton de borrado a la tarea
function addBtnDelete () {
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("input-tarea");
    btnDelete.classList.add("borde-radio");
    btnDelete.classList.add("input-eliminar");
    btnDelete.innerText = "x";

    btnDelete.addEventListener("click", (e) => {
        e.preventDefault();
        const li = e.target.parentElement;
        listaTareas.removeChild(li)

        const items = document.querySelectorAll("li");
        if (items.length < 1) {
            vacio.style.display = "block";
        } 
    })
    return btnDelete
}
