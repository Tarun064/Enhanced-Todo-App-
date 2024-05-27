
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './components/Heading'
import AddFile from './components/AddFile'
import FirstTask from './components/FirstTask'
import SecondTask from './components/SecondTask'
import "./App.css"
import Task from './components/Task'


function App() {

  let todo=[{
    todo : "Back to work",
    date : "25/05/2024"
  },
  {
    todo : "Go to work",
    date : "25/05/2024"
  },
  {
    todo : "Complete task",
    date : "25/05/2024"
  },]

  return (
    <center className='app-container'>
     <Heading></Heading>
     
     <div className='row-container'>
     <AddFile></AddFile>
      <Task item={todo}></Task>
     
     </div>
     
    </center>
  )
}

export default App
