const itemsList = document.querySelector('#items-list');
const itemInput = document.querySelector('#item-input');
const addItemBtn = document.querySelector('#add-item-btn');
const sortAscBtn = document.querySelector('#sort-asc');
const sortDescBtn = document.querySelector('#sort-desc');

let items = [];

function render() {
    itemsList.innerHTML = '';
    items.forEach(function(item) {
        const itemElement = document.createElement('li');
        itemElement.classList.add('item');
        itemElement.textContent = item;
        itemsList.appendChild(itemElement);
    });
}

function addItem() {
    const newItem = itemInput.value.trim();
    if (newItem !== '') {
        items.push(newItem);
        render();
        itemInput.value = '';
    }
}

function sortAsc() {
    items.sort();
    render();
}

function sortDesc() {
    items.sort().reverse();
    render();
}


addItemBtn.addEventListener('click', addItem);
sortAscBtn.addEventListener('click', sortAsc);
sortDescBtn.addEventListener('click', sortDesc);
render();
