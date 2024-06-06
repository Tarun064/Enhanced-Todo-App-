import TaskItem from "./TaskItem";

function Task({item,onDeleteClick}){
  return <div>
    {item.map((task) => 
      <TaskItem final={task} onDeleteClick={onDeleteClick}></TaskItem>
    )}
  </div>
}
export default Task;