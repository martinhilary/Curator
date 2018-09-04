// var React = require('react')
// class FlashError extends React.Component{
// 	render(){
// 		if(this.props.message){
// 			let errorMsgs= this.props.message.error;
// 			if(errorMsgs){
// 				return <div className="errorFlashMessage">{errorMsgs[0]}</div>	
// 			}else{
// 				return <div className="errorFlashMessage"></div>
// 			}
// 		}else{
// 			return <div className="errorFlashMessage"></div>
// 		}
// 	}
// }


// class FlashInfo extends React.Component{
// 	render(){
// 			if(this.props.message){
// 				let infoMsgs=this.props.messages.info;
// 			}
// 			if(infoMsgs){
// 				return <div className="infoFlashMessage">{infoMsgs[0]}</div>
// 			}else{
// 				return<div className="infoFlashMessage"></div>
// 			}
// 	}

// }



// class FlashSuccess extends React.component{
// 	render(){
// 		if(this.props.message){
// 			let successMsgs=this.props.messages.success
// 		}
// 			if(successMsgs){
// 				return <div className="successFlashMessage">{successMsgs[0]}</div>
// 			}else{
// 				return <div className="successFlashMessage"></div>
// 			}
// 		}else{
// 			return <div className="successFlashMessage"></div>
// 		}
// }

var React=require('react')
class LayoutContainer extends React.Component{
	render(){
		return(
			<html>
				<head>
					<title> Welcome to the Curator </title>
					<link rel="stylesheet" href="/css/style.css" />
					<link href="https://fonts.googleapis.com/css?family=Gaegu" rel="stylesheet" />
				</head>
					<header>
				    	<div className="nav">
					     	<ul>
						        <li id="home" class="active"><a href="/">Home</a></li>
						        <li id="feed"><a  href="/feed">Feed</a></li>
						        <li id="customise"><a href="/feed/curate">Curate</a></li>
						        <li id="login"><a href="/users/login">Login</a></li>
						        <li id="register"><a href="/users/register">Register</a></li>
						        <li id="about"><a href="/users/about">About</a></li>
					     	</ul>
				    	</div>
  					</header>

				<body>
					{this.props.children}
				</body>
				<script src="/Script/script.js"></script>
			</html>
			)
	}
}

module.exports = LayoutContainer;
