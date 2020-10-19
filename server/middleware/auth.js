const jwt = require('jsonwebtoken');
const  {ACCESS_TOKEN_SECRET} =  require("../index")


let auth = (req, res, next) => {
  let accessToken =req.headers.authorization;
  if (!accessToken){
      return res.status(403).send()
  }
  accessToken = accessToken.split(' ')[1]
  console.log(accessToken)



  let payload
  try{
    payload = jwt.verify(accessToken, ACCESS_TOKEN_SECRET)
      next()
  }
  catch(e){

    return res.status(401).send()
  } 

  
};

module.exports = { auth };
