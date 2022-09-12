import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

//
const App = () => {
  const[showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([
  {    
      id: 1, 
      text: 'Doctors Appointmet', 
      day: 'Feb 5th at 2:30pm', 
      reminder: true,
  },
  {
      id: 2, 
      text: 'Meeting', 
      day: 'Feb 6th at 1:30pm', 
      reminder: true,
  },
  {
      id: 3, 
      text: 'Food Shopping', 
      day: 'Feb 5th at 2:30pm', 
      reminder: false,
  },
  {
      id: 4, 
      text: 'Swimming', 
      day: 'Feb 10th at 11:45pm', 
      reminder: true,
  },
  {
      id: 5, 
      text: 'Test', 
      day: 'Feb 10th at 11:45pm', 
      reminder: false,
  }

  ])
  
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000 ) +1 
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }



  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id  
    ))
  }

  // Toggle Reminder 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id ? 
    {...task, reminder: !task.reminder } : task
    )
    
  )

  }





  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask
        (!showAddTask)} 
        showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} 
      />} 
      {tasks.length > 0 ? 
       <Tasks tasks={tasks}
       onDelete={deleteTask} 
       onToggle={toggleReminder}/> 
       : 'No Current Tasks' } 
       {/*Move this out add Div around task componate*/} 
      
    </div>
  ) 
}

export default App 
