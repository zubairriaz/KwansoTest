const express = require('express');
const router = express.Router();
const {User} = require("../service/users")
const {Task} = require("../service/tasks")

const  {ACCESS_TOKEN_SECRET} = require("../index")
const jwt = require('jsonwebtoken');
const { auth } = require("../middleware/auth");
const tasks = require('../service/tasks');
let user;
//=================================
//             User
//=================================
router.get('/',(req, res)=>{
    return res.status(200).send(JSON.stringify({'welcome':'welcome'}))
})
router.post("/register", (req, res) => {
    let {email, password} = req.body
    if(!email || !password){
        return res.status( 404).send()
    }
    user = new User(email,password)
    console.log(user)
    user.addUser()
    console.log(user)
    
    return res.status(200).send(JSON.stringify({"user":user.getUser()}))

});

router.post("/login", (req, res) => {
    let {username, password} = req.body
    let userDict = User.getUserByUserName()
    console.log(userDict[username])
    if(!username || !password ){
        return res.status( 401).send()
    }
    if(userDict[username]){
        console.log(userDict[username]["password"])

        if(userDict[username]["password"] !== password){
            return res.status( 401).send()
        }else{
            let payload = {username, password}
            let accessToken = jwt.sign(payload,ACCESS_TOKEN_SECRET,{
                algorithm:'HS256',
                expiresIn:'365d'
            })
            return res.status(200).send(JSON.stringify({"jwt":accessToken}))
        }
    }
    return res.status( 401).send()
    

});

router.get("/user",auth, (req, res) => {
    return res.status(200).send(JSON.stringify({"user":user.getUser()}))
});

router.post("/create-task", auth, (req, res) => {
    let {name} = req.body
    let t = new Task(name)
    t = t.addTask(t)
    return res.status(200).send(JSON.stringify({"task":t}))
    
});
router.get("/list-tasks", auth, (req, res) => {
    return res.status(200).send(JSON.stringify({"tasks":Task.getTasks()}))
});

module.exports = router;
