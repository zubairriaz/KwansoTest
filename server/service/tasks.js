
let taskList = []
class Task{
  constructor (name){
      this.name = name
      }
   
  addTask = (task) =>{
    let len = task.length
    taskList.push({id:len ,name:task.name,})
    return {id:len, ...task}
  }

  static getTasks = ()=>{
    return taskList
  }

  getTasks = () =>{
      return taskList.slice(-1)[0]
  }

  
 

}

module.exports = { Task };



