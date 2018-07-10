var React=require('react')
var LayoutContainer=require('../layouts/main.jsx')
//Need to call a mthod to render html in react
//Should use map here and not controller
//Set innerHTML to the link;
//Control the DOM elements;
// <p dangerouslySetInnerHTML={ { __html: this.props.verge[i].content }  } />
class feed extends React.Component{
	render(){
		var firstFeed = [];
		var secondFeed=[];
		var thirdFeed=[];
		var fourthFeed=[];
		var fifthFeed=[];
		var sixthFeed=[];

		for( var i=0; i< 5;i++){
			var bbc = <div class="feedBorder" class="bbc">
						<a class="homelink" href="http://www.bbc.com/">BBC</a>
						<a class="homeFeed" href={this.props.bbc[i].link}>
						<p class="titleFeed">{this.props.bbc[i].title}</p>
						<p class="contentFeed">{this.props.bbc[i].content}</p>
						</a>
						</div>
			firstFeed.push( bbc);
		}
		// console.log(this.props.reddit)
		for (var i=0;i<5;i++){
			var cnn=  <div class="feedBorder" class="cnn">
							<a class="homeFeed" href={this.props.cnn[i].link}>CNN</a>
							<p class="titleFeed">{this.props.cnn[i].title}</p>
							<p class="contentFeed">{this.props.cnn[i].content}</p>
						</div>
			secondFeed.push( cnn );
		}
		for (var i=0;i<5;i++){
			var cbn=<div class="feedBorder" class="cbn">
						<a class="homeFeed" href={this.props.cbn[i].link}>CBN</a>
						<p class="titleFeed">{this.props.cbn[i].title}</p>
						<p class="contentFeed">{this.props.cbn[i].content}</p>
						</div>
			thirdFeed.push( cbn );
		}
		// console.log("nytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnyt")
		// console.log(this.props.nyt)


		for (var i=0;i<5;i++){
			var nyt=<div class="feedBorder" class="nyt">
						<a class="homeFeed" href={this.props.nyt[i].link}>New York Times</a>
						<p class="titleFeed">{this.props.nyt[i].title}</p>
						<p class="contentFeed">{this.props.nyt[i].content}</p>
						</div>
			fourthFeed.push( nyt );
		}


		for (var i=0;i<5;i++){
			var wired=<div class="feedBorder" class="wired">
						<a class="homeFeed" href={this.props.wired[i].link}>Wired</a>
						<p class="titleFeed">{this.props.wired[i].title}</p>
						<p class="contentFeed">{this.props.wired[i].content}</p>
						</div>
			fifthFeed.push( wired );
		}


		for (var i=0;i<5;i++){
			var verge=<div class="feedBorder" class="verge">
						<a href={this.props.verge[i].link}>Verge</a>
						<p class="titleFeed">{this.props.verge[i].title}</p>	
						<p class="contentFeed"></p>					
						</div>
			sixthFeed.push( verge );
		}



		// for(var i=0;i<5;i++){
		// 	var nyt=<div>
		// 				<p>{this.props.nyt[i].title}</p>
		// 				<p>{this.props.nyt[i].content}</p>
		// 				<a href={this.props.nyt[i].link}>NYT</a>
		// 				</div>
		// 	fourthFeed.push(nyt)
		// }
		//console.log(this.props.bbc[0].title)
		//}
		// console.log("4:Inside homepage")
		// console.log("hiiiiiiiiiiiiiiiiiiiiiiiiii")
		return(
			<LayoutContainer>
						<p id="title">THE CURATOR</p>

				<div>
					<div class="feed">
						<h1>Latest Articles</h1>
						
						{firstFeed}
						{secondFeed}
						{thirdFeed}
						{fourthFeed}
						{fifthFeed}
						{sixthFeed}
					</div>
				</div>
				<script src="/../public/Script/script.js" />
			</LayoutContainer>
		)
	}
}
module.exports= feed;