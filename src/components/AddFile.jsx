import { useState } from "react";

function AddFile({onaddItem}){

  const [addItem,setAddItem]=useState();
  const [dueDate,setDueDate]=useState();

  const handleNewItem = (event) => {
    setAddItem(event.target.value);
  }
  const handledueDate = (event) => {
    setDueDate(event.target.value);
  }
  const handleAddButtonClicked = ()=>{
    onaddItem(addItem,dueDate);
    setAddItem("");
    setDueDate("");
  }

  return <div class="container">
  <div class="row my-row">
    <div class="col-6">
      <input type="text" placeholder="Enter yout to do task" value={addItem} onChange={handleNewItem}></input>
    </div>
    <div class="col-4">
      <input type="date" value={dueDate} onChange={handledueDate}></input>
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success my-button"  onClick={handleAddButtonClicked}>Add</button>
    </div>
  </div>
</div>
}

export default AddFile;