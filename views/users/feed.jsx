var React=require('react')
var LayoutContainer=require('../layouts/main.jsx')
//Need to call a mthod to render html in react
//Should use map here and not controller
//Set innerHTML to the link;
//Control the DOM elements;
// <p dangerouslySetInnerHTML={ { __html: this.props.verge[i].content }  } />
class feed extends React.Component{
	render(){
		var feed=[]

// console.log(this.props.foo)
// console.log("Akira123456789")

		  for(var i=0;i<this.props.foo.length;i++){
		  	var feedElements = this.props.foo[i];
		  	console.log("feedElements")
		  	console.log(feedElements.length)  
				for( var j=0; j< 5;j++){
					var feedElement = <div class="feedBorder">
								<div class="feedElements">
									<a class="homeFeed" href={feedElements[j].link} target="_blank">
										<p class="titleFeed">{feedElements[j].title}. &nbsp;</p>
										<p class="contentFeed">{feedElements[j].content}</p>
									</a>
								</div>
							  </div>
					feed.push( feedElement);
				}

		  }
		
		// }
		// // console.log(this.props.reddit)
		// for (var i=0;i<5;i++){
		// 	var cnn=  <div class="feedBorder">
		// 				<div class="feedElements">
		// 					<a class="homelink" href="https://edition.cnn.com/" target="_blank">CNN</a>
		// 					<a class="homeFeed" href={this.props.cnn[i].link} target="_blank">
		// 					<p class="titleFeed">{this.props.cnn[i].title}. &nbsp;</p>
		// 					<p class="contentFeed">{this.props.cnn[i].content}</p>
		// 					</a>
		// 				</div>
		// 			</div>
		// 	secondFeed.push( cnn );
		// }
		// for (var i=0;i<5;i++){
		// 	var cbn=<div class="feedBorder">
		// 				<div class="feedElements">
		// 				<a class="homelink" href="http://www1.cbn.com/" target="_blank">CBN</a>
		// 				<a class="homeFeed" href={this.props.cbn[i].link} target="_blank">
		// 				<p class="titleFeed">{this.props.cbn[i].title}. &nbsp;</p>
		// 				<p class="contentFeed">{this.props.cbn[i].content}</p>
		// 				</a>
		// 				</div>
		// 			</div>
		// 	thirdFeed.push( cbn );
		// }
		// // console.log("nytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnytnyt")
		// // console.log(this.props.nyt)


		// for (var i=0;i<5;i++){
		// 	var nyt=<div class="feedBorder">
		// 				<div class="feedElements">
		// 				<a class="homelink" href="https://www.nytimes.com/" target="_blank">New York Times</a>
		// 				<a class="homeFeed" href={this.props.nyt[i].link} target="_blank">
		// 				<p class="titleFeed">{this.props.nyt[i].title}. &nbsp;</p>
		// 				<p class="contentFeed">{this.props.nyt[i].content}</p>
		// 				</a>
		// 				</div>
		// 			</div>
		// 	fourthFeed.push( nyt );
		// }


		// for (var i=0;i<5;i++){
		// 	var wired=<div class="feedBorder">
		// 				<div class="feedElements">
		// 				<a class="homelink" href="https://www.wired.com/" target="_blank">Wired</a>
		// 				<a class="homeFeed" href={this.props.wired[i].link} target="_blank">
		// 				<p class="titleFeed">{this.props.wired[i].title}. &nbsp;</p>
		// 				<p class="contentFeed">{this.props.wired[i].content}</p>
		// 				</a>
		// 				</div>
		// 			</div>
		// 	fifthFeed.push( wired );
		// }


		// for (var i=0;i<5;i++){
		// 	var verge=<div class="feedBorder">
		// 				<div class="feedElements">
		// 				<a class="homelink" href="https://www.theverge.com/" target="_blank">The Verge</a>
		// 				<a href={this.props.verge[i].link} id="vergeTitle">
		// 				<p class="shortFeed" >{this.props.verge[i].title}</p>				
		// 				</a>
		// 				</div>
		// 			   </div>
		// 	sixthFeed.push( verge );
		// }





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
			<link href="https://fonts.googleapis.com/css?family=Knewave" rel="stylesheet"/>
			<link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet" />
						<p id="title">THE CURATOR</p>
				<div>
					<div class="feed">
						<h1 id="feedHeader">~~Latest Articles~~</h1>	
						{feed}
					</div>
				</div>
				<script src="/../public/Script/script.js" />
			</LayoutContainer>
		)
	}
}
module.exports= feed;