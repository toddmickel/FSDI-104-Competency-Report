var inputItem = document.getElementById('list-item');
var lastItem = 0;
var del = [];

function addToList() {
    if (inputItem.value === '') {
        alert('Please enter an item to be added to the list and then try again.');
    } else {
        displayList();
        inputItem.value = '';
        lastItem++;
    }
}

function displayList() {
        var li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.setAttribute('id', `item${lastItem}`);
        var inp = document.createElement('input');
        inp.setAttribute('class', 'form-check-input me-1');
        inp.setAttribute('type', 'checkbox');
        inp.setAttribute('value', '""');
        inp.setAttribute('aria-label', '...');
        inp.setAttribute('id', `input${lastItem}`);
        inp.setAttribute('onclick', `lineOut(${lastItem})`);
        li.appendChild(inp);
        var listItem = document.createTextNode(inputItem.value);
        li.appendChild(listItem);
/*        var delbtn = document.createElement('button');
        delbtn.setAttribute('type', 'button');
        delbtn.setAttribute('class', 'btn btn-primary del');
        delbtn.setAttribute('onclick', `deleteItem(${lastItem})`);
        delbtn.setAttribute('id', `del${lastItem}`);
        delbtn.style.visibility = 'hidden';        
        delbtn.innerHTML = 'Delete';
        li.appendChild(delbtn); */
        document.querySelector('ul').appendChild(li);  
}

/*
function deleteItem(num) {
    var delItem = document.getElementById(`item${num}`);
    delItem.parentNode.removeChild(delItem);
}
*/

function lineOut(num) {
    var lineItem = document.getElementById(`item${num}`);
    var inputId = document.getElementById(`input${num}`);
//    var delId = document.getElementById(`del${num}`);
    if (inputId.checked === true) {
        lineItem.setAttribute('class', 'list-group-item line-out');
//        delId.style.visibility = 'visible'; 
        del.push(num);
        document.getElementById('delete-btn').style.visibility = 'visible';
    } else {
        const index = del.indexOf(num);
        lineItem.setAttribute('class', 'list-group-item');
//        delId.style.visibility = 'hidden'; 
        if (index > -1) {
            array.splice(index, 1);
        }
    }
}

function deleteItems() {
    for (i = 0; i < del.length; i++) {
        var itemId = document.getElementById(`item${del[i]}`);
        itemId.parentNode.removeChild(itemId);
    }
    del = [];
}