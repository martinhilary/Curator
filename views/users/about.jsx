var React=require('react')
var LayoutContainer=require('../layouts/main.jsx')

class about extends React.Component{
	render(){
		return(
			<LayoutContainer>
			<link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css?family=Gaegu" rel="stylesheet"/>
			<div id="alignabout">
			<p id="aboutjsx">A Content Curator is someone who continually finds, groups, organizes and shares the best and most relevant content on a specific issue online.
				We aspire to be the middleman for your favourite feeds and content and provide you with an unforgettable user experience.
			</p>
			</div>
			</LayoutContainer>
			)
	}
}

module.exports= about;