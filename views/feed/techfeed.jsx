var React=require('react')
var LayoutContainer= require('../layouts/main.jsx')
class techFeed extends React.Component{
	render(){
		return(
		<LayoutContainer>
			<html>
			  <body>
				<h1>You have subscribed to the following feeds:</h1>
				<img class="size" src="/images/verge.png" />
				<img class="size" src="/images/Nasa.png" />
				<img class="size" src="/images/gadget360.png" />
				<img class="size" src="/images/tech_review .png" />
			  </body>
			</html>
		</LayoutContainer>
			)
	}
}

module.exports = techFeed;