import { useRef } from "react";

function AddFile({onaddItem}){

  const todoName = useRef();
  const todoDueDate = useRef();
  const handleAddButtonClicked = ()=>{
    const addItem = todoName.current.value;
    const dueDate = todoDueDate.current.value;
    todoName.current.value = "";
    todoDueDate.current.value = "";
    onaddItem(addItem,dueDate);
  }

  return <div class="container">
  <div class="row my-row">
    <div class="col-6">
      <input type="text" placeholder="Enter yout to do task" ref={todoName}></input>
    </div>
    <div class="col-4">
      <input type="date" ref={todoDueDate}></input>
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success my-button"  onClick={handleAddButtonClicked}>Add</button>
    </div>
  </div>
</div>
}

export default AddFile;