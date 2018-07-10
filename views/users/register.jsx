var React=require("react")
var LayoutContainer=require('../layouts/main.jsx')
class Register extends React.Component{
	render(){
		return(
		  <LayoutContainer>
		  <div id="registerForm">
			<form action="/users/register" method="POST">
			<h1>CREATE A CURATOR ACCOUNT</h1>
			<ul id="registerBox">
			<li>Name:  <input id="pigs" name="name" type="text" placeholder="Name" /></li>
			<br />
			<li>Email:  <input name="email" type="text" placeholder="Email" /></li>
			<br />

			<li>Password:<input name="password" type="text" placeholder="Password"/></li>
			<br />
			<li>Confirm Password:<input name="checkPw" type="password" placeholder="Confirm password" /></li>
			<br />
			<input name="submit" type="submit" />
			</ul>
			</form>
		  </div>
		</LayoutContainer>
		)
	}
}

module.exports= Register;