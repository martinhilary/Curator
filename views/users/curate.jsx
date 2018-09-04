var React=require('react')
var LayoutContainer=require('../layouts/main.jsx')

class curate extends React.Component{
	render(){
		return(
			<LayoutContainer>
			<div id="searchDiv">
				<form method="POST" action="/feed/searchResults">
					<h1>Select your Preferences</h1>{/*
					<input class ="searchBar" type="text" placeholder="Curate.." />
					<input class="searchBar" type="submit" value="Search"/>*/}
				</form>
					<div id="maincurate">
						<form method="POST" action="/feed/tech">
							<div class="curates" id="tech">
								<img class="curate" src="/images/browser.png" />
								<p>Techie</p>
								<input type="hidden" name="" value="tech" />
								<input class="tech" type="submit" value="Add"/>
							</div>
						</form>
						<form method='POST' action='/feed/news'>
							<div class="curates" id="news">
								<img class="curate" src="/images/text-lines.png" />
								<p>News Buff</p>
								<input class="news" type="submit" value="Add" />
							</div>
						</form>
						<form method='POST' action= '/feed/startups'>
							<div class="curates" id="startups">
								<img  class="curate" src="/images/unicorn.png" />
								<p>Finance</p>
								<input class="startups" type="submit" value="Add"/>
							</div>
						</form>
					</div>
			</div>
			</LayoutContainer>
			)
	}
}
module.exports = curate; 