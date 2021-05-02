// Creating Elements

// Create element
const li = document.createElement('li');

// Add class
li.className='list-group-item list-group-item-secondary';

// Attribute
li.setAttribute('title','new item');
li.setAttribute('data-id','5');

// Text node
const text = document.createTextNode('new item');
li.appendChild(text);

const a = document.createElement('a');
a.setAttribute('href','#');
a.className='delete-item float-right';
a.innerHTML='<i class="fas fa-times"></i>';

// Append a to li
li.appendChild(a);

// Append li to ul
document.querySelector('#task-list').appendChild(li);



console.log(li);
