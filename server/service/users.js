
let userList = {}
class User{
  constructor (username, password){
      this.username = username
      this.password = password
  }
   
  addUser = () =>{
    userList[this.username]={username:this.username,password:this.password}
  }

  getUser = ()=>{
    return {id:this.username , email:this.password}
  }
  static getUserByUserName = () =>{
         return userList
  }

}

module.exports = { User };



