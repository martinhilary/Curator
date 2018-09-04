var React=require('react')
var LayoutContainer= require('../layouts/main.jsx')
class newsFeed extends React.Component{
	render(){
		return(
		<LayoutContainer>
			<html>
			  <body>
				<h1>You have subscribed to the following feeds:</h1>
				<img class="size" src="/images/bbc.png" />
				<img class="size" src="/images/CNN.png" />
				<img class="size" src="/images/NYT.jpg" />
				<img class="size" src="/images/WIRED.jpg" />
			  </body>
			</html>
		</LayoutContainer>
			)
	}
}

module.exports = newsFeed;