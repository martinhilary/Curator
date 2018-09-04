var React= require('react')
var LayoutContainer =require('../layouts/main.jsx')
class feedSubscribed extends React.Component{
	render(){
		return(
		<LayoutContainer>
			<html>
			  <body>
				<h1>You have subscribed to the following feeds:</h1>
			  </body>
			</html>
		</LayoutContainer>
			)
	}
}
module.exports = feedSubscribed;