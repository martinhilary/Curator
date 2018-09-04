var React=require('react');
var LayoutContainer=require("../layouts/main.jsx");
class Login extends React.Component{
	render(){
		return(
		<LayoutContainer>
		<div id="loginform">
			<form action="/users/login" method="POST">
			<br />
			<h1> Sign In </h1>
			Email: <input name="email" type="text" placeholder="Email" />
			<br />
			Password:<input name="password" type="password" placeholder="Password" />
			<input type="submit" name="submit" />
			</form>
		</div>
		</LayoutContainer>
		)
	}
}

module.exports= Login;



