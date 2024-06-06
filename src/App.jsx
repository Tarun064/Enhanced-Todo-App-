import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './components/Heading'
import AddFile from './components/AddFile'
import "./App.css"
import Task from './components/Task'
import { useState } from 'react'
import DoneMessage from './components/DoneMessage'


function App() {

  const [todoItem,setTodoItem]=useState([]);

  const handleAddButton = (itemName,itemDate) => {
    console.log(itemDate,itemName);
    const newTodoItem = [...todoItem,{
      todo : itemName,
      date : itemDate,
    }];
    setTodoItem(newTodoItem);
  };

  const handleDeleteButton = (itemPresentName)=>{
    const newItems = todoItem.filter(item => item.todo !== itemPresentName);
    setTodoItem(newItems);
  }

  return (
    <center className='app-container'>
     <Heading></Heading>
     
     <div className='row-container'>
     <AddFile onaddItem={handleAddButton}></AddFile>
     {todoItem.length === 0 && <DoneMessage></DoneMessage>}
      <Task item={todoItem} onDeleteClick={handleDeleteButton}></Task>
     
     </div>
     
    </center>
  )
}

export default App
