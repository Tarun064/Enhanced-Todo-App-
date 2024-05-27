import TaskItem from "./TaskItem";

function Task({item}){
  return <div>
    {item.map((task) => 
      <TaskItem final={task}></TaskItem>
    )}
  </div>
}
export default Task;