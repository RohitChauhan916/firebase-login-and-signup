firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById('user').style.display="none";
	document.getElementById('log').style.display="block";
	
	var user = firebase.auth().currentUser;
	if(user !=null){
		var email_id = user.email;
		document.getElementById('para').innerHTML = "Welcome User <br>" + email_id;
	}
  } else {
    document.getElementById('user').style.display="block";
	document.getElementById('log').style.display="none";
	
  }
});


function login(){

	var email_fie = document.getElementById('email').value;
	var pass = document.getElementById('pass').value;
	
	firebase.auth().signInWithEmailAndPassword(email_fie, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  window.alert("Error : " + errorMessage);
});
}

function create(){
	var email_fie = document.getElementById('email').value;
	var pass = document.getElementById('pass').value;
	
	firebase.auth().createUserWithEmailAndPassword(email_fie, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}
function logout(){
	
	firebase.auth().signOut();
}