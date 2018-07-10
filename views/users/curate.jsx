var React=require('react')
var LayoutContainer=require('../layouts/main.jsx')

class curate extends React.Component{
	render(){
		return(
			<LayoutContainer>
			<div id="searchDiv">
				<input id ="searchBar" type="text" placeholder="Curate.." />
			</div>
			</LayoutContainer>
			)
	}
}
module.exports = curate; 