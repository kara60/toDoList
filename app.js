const addForm = document.querySelector('.add-form');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

addForm.addEventListener('submit', e => {
    e.preventDefault();

    const toDo = addForm.add.value.trim().toLowerCase();
    if(toDo.length){
        createTemplete(toDo);
    }
});

function createTemplete(toDo){
    let html = 
    `
        <li class="list-group-item d-flex justify-content-between align-items-center text-light">
            <span>${toDo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
    addForm.add.value = '';
}

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

search.addEventListener('keyup', e => {
    const term = search.value.trim().toLowerCase();

    createFilter(term);
});

const createFilter = (term) => {
    Array.from(list.children).filter((toDo) => {
        return !toDo.textContent.toLowerCase().includes(term);
    }).forEach((toDo) => {
        toDo.classList.add('filtered');
    });

    Array.from(list.children).filter((toDo) => {
        return toDo.textContent.toLowerCase().includes(term);
    }).forEach((toDo) => {
        toDo.classList.remove('filtered');
    });
};

