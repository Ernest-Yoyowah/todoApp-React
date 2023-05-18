import React from "react";
import './App.css';


function GoalForm(props){
  const [formData, setFormData] = React.useState({goal: "", by: ""})

  function changeHandler(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function submitHandler(e){
    e.preventDefault();
    props.onAdd(formData);
    setFormData({goal: "", by: ""});
  }

  return(
    <>
    <h1>My Daily Tasks</h1>
    <form onSubmit={submitHandler}>
      <input type='text' name='goal' placeholder="Enter your task" value={formData.goal} onChange={changeHandler} />
      <input type='time' name='by' placeholder="Due date" value={formData.by} onChange={changeHandler} />
      <button>Submit Goals</button>
    </form>
    </>
  )
}

function ListOfGoals(props){
  return(
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>{g.goal}, Time {g.by}</span>
        </li>
      ))}
    </ul>
  )
}
export default function App(){
  const [allGoals, updateAllGoals] = React.useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  return(
    <div className="App">
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  )
}