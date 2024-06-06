function TaskItem({final,onDeleteClick}){
  return <div className="container">
  <div className="row my-row">
    <div className="col-6">
      {final.todo}
    </div>
    <div className="col-4">
      {final.date}
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger my-button"
    onClick={()=>onDeleteClick(final.todo)}>Delete</button>
    </div>
  </div>
</div>

}
export default TaskItem;