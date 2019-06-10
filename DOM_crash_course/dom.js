const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form submit event

form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

// filter elemments
filter.addEventListener('keyup', filterItems);

function addItem(e) {
    e.preventDefault();

    // Get input value
    const newItem = document.getElementById('item').value;

    // Create new li element
    const li = document.createElement('li');
    // add a class name
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create del button element
    const deleteBtn = document.createElement('button');

    // add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // append the text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
    console.log(li);
}

// remove node
function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }


}

// filter items function
function filterItems(e){
    // convert text to lowercase
    const text = e.target.value.toLowerCase();
    // get all Li
    var items =  itemList.getElementsByTagName('li');
    // covert to an array
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}