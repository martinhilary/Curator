var React=require('react')
var Layout=require('../layouts/main.jsx')
class Home extends React.Component{
	render(){
		return(
			<Layout>
			<h1>WELCOME TO THE CURATOR</h1>
			<div id="curateHome">
				<p class="curate"> CURATE YOUR FAVOURTIE FEEDS
				<img src="/images/draw-chick.png" />
				</p>
				<p class="curate"> CUSTOMISE YOUR CONTENT BASED ON YOUR PREFERENCES
				<img src="/images/scroll.png" />
				</p>
				<p class="curate"> SHARE YOUR FAVOURITE FEEDS
				<img src="/images/socialMedia.png" />
				</p>
			</div>
			</Layout>

			)
	}
}

module.exports= Home;