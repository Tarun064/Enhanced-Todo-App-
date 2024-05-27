function TaskItem({final}){
  return <div class="container">
  <div class="row my-row">
    <div class="col-6">
      {final.todo}
    </div>
    <div class="col-4">
      {final.date}
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger my-button">Delete</button>
    </div>
  </div>
</div>

}
export default TaskItem;