const today = new Date();
const day = today.getDay();
const date = today.getDate();
const month = today.getMonth() + 1;
const Day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

//          Show Date on DOM

document.querySelector('.txt').innerHTML = `<h2>${Day[day]}, ${Zero(month)} ${Zero(date)}</h2>`;

function Zero(num){
  return num < 10 ? '0'+num : num;
}

//                Add Todo

let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', e => {
  e.preventDefault();
  getItem(e)
});

function getItem(e){
  input = document.getElementById('add-todo').value;
  showTodo(input);
  document.getElementById('add-todo').value = null;
}

//            Make todo

var arr = [];
var getusrs = [];

var id = fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(data => {
        data.forEach(user => {
          arr.push(user.id + 10);
          getusrs.push(user.id);
        });
      });
    

var id, btnId;

function showTodo(item){

  id = getusrs.shift();
  btnId = arr.pop();

  liItem = document.createElement('li');
  liItem.classList.add('px-3');
  liItem.classList.add('m-3');
  liItem.classList.add('text-capitalize');
  liItem.classList.add('text-danger');

  
  itemNode  = 
      `<input type="checkbox" class="m-2" id="${id}">
      ${item}
      <i class="far fa-trash-alt fa-2x float-right" id="${btnId}"></i>`;

  liItem.innerHTML = itemNode;

  

    document.getElementById('todo-items').appendChild(liItem);
  
  

 //                For checkbox

let checkbox = document.getElementById(id).addEventListener('click', forTodo);
  
 //                For delete button

let delBtn = document.getElementById(btnId).addEventListener('click', deleteTodo);

 }

//                  Ckeck Todo

function forTodo(e){
  //console.log(e.target.id);
  e.target.checked ? checkTodo(e) : uncheckTodo(e);
}


function checkTodo(e){
  e.target.parentElement.classList.add('text-success');
  e.target.parentElement.classList.remove('text-danger');
}

function uncheckTodo(e){
  e.target.parentElement.classList.add('text-danger');
  e.target.parentElement.classList.remove('text-success');
}

//            Delete Todo

function deleteTodo(e){
  let delNode =  e.target.parentElement.parentElement;
  let currentNode = e.target.parentElement;
  delNode.removeChild(currentNode);
}
