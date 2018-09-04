var React=require('react')
var LayoutContainer= require('../layouts/main.jsx')
class unicornFeed extends React.Component{
	render(){
		return(
		<LayoutContainer>
			<html>
			  <body>
				<h1>You have subscribed to the following feeds:</h1>
				<img class="size" src="/images/innocentive.png" />
				<img class="size" src="/images/BWD.jpg" />
				<img class="size" src="/images/BT.png" />
				<img class="size" src="/images/WSJ.png" />
			  </body>
			</html>
		</LayoutContainer>
			)
	}
}

module.exports = unicornFeed;