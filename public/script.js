
window.onload = function(){

    var ajaxUrl = "http://localhost:3001/something";
    // what to do when we recieve the request
    var responseHandler = function() {
      var users = JSON.parse( this.responseText );
      console.log( users );


      //Do all the javascript events here
    };

    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    request.open("GET", ajaxUrl);

    // send the request
    request.send();

};

