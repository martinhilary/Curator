/**
 * User controller functions.
 *
 * Each user-related route in `routes.js` will call
 * one controller function here.
 *
 * Export all functions as a module using `module.exports`,
 * to be imported (using `require(...)`) in `routes.js`.
 */

/**
 * ===========================================
 * Controller logic
 * ===========================================
 */

/**
 * ===========================================
 * Export controller functions as a module
 * ===========================================
 */

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

module.exports = function(db){
const sha256=require('js-sha256');
var user=require('../models/user.js')(db)
const home=(request,response)=>{
  response.render("../views/users/home")
}
const register=(request,response)=>{
  response.render("../views/users/register")
}

const login= (request,response)=>{
  response.render("../views/users/login");
}

const createNew =(request,response)=>{
  let password_hash=sha256(request.body.password)
  user.userCreate(request.body.email, password_hash,(err,result)=>{
    if(err){
      console.log("query error",err.stack)
    }else{
      let user_id=result.rows[0].id
      response.send("Create a user with an id: "+password_hash)
    }  
  })
}



const Authentications =(request,response)=>{
  let password= sha256(request.body.password);
    user.userAuthentication(request.body.email,request.body.password,(err,result)=>{
      console.log(result);
      let passwordCompare=result.rows[0].password_hash;
      let user_id=result.rows[0].id;
      if(err){
        console.log("query error",err.stack)
      }else{
        console.log("error piece")
        console.log(password);
        console.log(passwordCompare);
        if(passwordCompare == password){
          console.log("You are logged in")
          response.cookie("logged in","true")
          response.cookie("user_id",user_id )
          response.send("You are logged in"+user_id)
        }
        else{
          response.redirect("/");
        }
    }
  })
}

  return {
    home,
    login,
    register,
    createNew,
    Authentications
  };
}
