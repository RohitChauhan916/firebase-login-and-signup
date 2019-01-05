# firebase-login-and-signup
This project is just a login and signup with help of fire base

project is not run if you not add a API key. Im not given my key beacause of security reason.
 You create a project on firebase and then firebase give you a Javascript code. This code paste in index.html file.
 
<script src="https://www.gstatic.com/firebasejs/5.7.0/firebase.js"></script>
<script>
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);
</script>


this code add in between head tag
 
