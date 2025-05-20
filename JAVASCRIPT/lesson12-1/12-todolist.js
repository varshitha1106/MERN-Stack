const array=[{
  name: 'make dinner',
  dueDate:'08-05-2022'
},{
  name:'watch tv',
  dueDate:'08-05-2022'
}];     //create array to store
displayList();

function displayList(){
  let todolisthtml='';

  array.forEach(function(item,index){
    //const item=array[i];
    //const name=item.name;
    const {name}=item;
    //const dueDate=item.dueDate;
    const {dueDate}=item;
    const html=`
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button" onclick="
      array.splice(${index},1);
      displayList();
    ">Delete</button>`
    ;
    todolisthtml+=html;

  })

  
  //console.log(todolisthtml);

  const ans=document.querySelector('.js-todo-list').innerHTML=todolisthtml;
}

function addTodo(){     //when we click add
  const inputEle=document.querySelector('.js-name');
  const inputname=inputEle.value; //get text from textbox

  const dateInputele=document.querySelector('.js-date');
  const inputdate=dateInputele.value;

  array.push({
    name:inputname,
    dueDate:inputdate
  }); //add it to array
  //console.log(array); //display the array in console

  inputEle.value='';

  displayList();
}