var React=require('react');
var LayoutContainer=require("../layouts/main.jsx");
class Login extends React.Component{
	render(){
		return(
		<LayoutContainer>

			<form action="/users/login" method="POST">
			<br />
			Email: <input name="email" type="text" placeholder="Email" />
			<br />
			Password:<input name="password" type="password" placeholder="Password" />
			<input type="submit" name="submit" />
			</form>

		</LayoutContainer>
		)
	}
}

module.exports= Login;



