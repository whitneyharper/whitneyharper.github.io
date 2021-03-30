const myHeading = document.querySelector('h1');
const changeTitleButton = document.querySelector('button.titleButton');
const changeTitleInput = document.querySelector('input.titleInput');
const addItemButton = document.querySelector('button.addButton');
const addItemInput = document.querySelector('input.addInput');
const list = document.querySelector('.list');
const lis = list.children;

function attachListItemButtons(li) {
    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);
    let down = document.createElement('button');
    down.className = 'down';
    down.textContent = 'Down';
    li.appendChild(down);
    let up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'Up';
    li.appendChild(up);
}

for (let i = 0; i < lis.length; i++) {
    attachListItemButtons(lis[i]);
}

list.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        if (event.target.className == 'remove') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
     }
     if (event.target.className == 'up') {
        let li = event.target.parentNode;
        let prevLi = li.previousElementSibling;
        let ul = li.parentNode;
        if (prevLi) {
        ul.insertBefore(li, prevLi);
        }
     }
     if (event.target.className == 'down') {
        let li = event.target.parentNode;
        let nextLi = li.nextElementSibling;
        let ul = li.parentNode;
        if (nextLi) {
        ul.insertBefore(nextLi, li);
        }
    }
}
});

//Add new item to list//
function addItem() {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    attachListItemButtons(li);
    ul.appendChild(li);
    addItemInput.value = '';
}

addItemButton.addEventListener('click', addItem);

//Change the title of List//
function changeListTitle() {
    myHeading.textContent = changeTitleInput.value;
    changeTitleInput.value = '';
}

changeTitleButton.addEventListener('click', changeListTitle);



