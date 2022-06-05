import {useState} from "react";
import "./styles.css"

export default function App(){
  const [pending, setPending] = useState(["Learn React JS", "Learn Express JS", "Learn Mongo DB"]);
  const [completed, setCompleted] = useState([]);
  const showTasks = (task, index) => {
    return(
      <div>
        {task}
        <button onClick={()=>{taskCompleted(index)}}>X</button>
      </div>
    );
  };

  const taskCompleted = (index) => {
    var p = [...pending];
    var c = [...completed];

    c.push(pending[index]);
    p.splice(index, 1);

    setPending(p);
    setCompleted(c);


  }
  return(
   <div> 
     <div>
       <div className="task-container">
         {/* pending task */}
        <h1>Pending task</h1>
        {pending.map(showTasks)}
        </div>
        </div>
     <div>
     <div className="task-container">
       {/* completed task */}
        <h1>Completed task</h1>
        {completed}
        </div>
        </div>
      </div>
  );
}