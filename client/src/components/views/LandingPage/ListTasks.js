import React,{useEffect } from 'react'

import { listTasks } from "../../../_actions/user_actions";
import { useDispatch, useSelector } from "react-redux";

const TaskList =(state)=>{
    console.log(state)
  if(state.state && state.state.tasks){
   return state.state.tasks.map(task=>{
       return (
    <li key={task.id}>{task.name}</li>
        )
   })
  }else{
      return <li></li>
  }
}
function ListTasks(props) {
    const dispatch = useDispatch();
    let state = useSelector(state => state);
    useEffect(() => {
        dispatch(listTasks())
      }, [])
    console.log(state )
    
        return (
          <div className="app">
             <h2>Tasks</h2>
             <ul>
       <TaskList state = {state.user} />
            </ul>
          </div>
        );

    
}

export default ListTasks
