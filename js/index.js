// //logical content
// function convert() {
//     var fromBase = document.getElementById("fromBase").value;
//     var toBase = document.getElementById("toBase").value;
//     var input = document.getElementById("numberInput").value;

//     var decimalNumber = parseInt(input, fromBase === "binary" ? 2 : fromBase === "octal" ? 8 : fromBase === "hexadecimal" ? 16 : 10);
//     var output = decimalNumber.toString(toBase === "binary" ? 2 : toBase === "octal" ? 8 : toBase === "hexadecimal" ? 16 : 10);

//     document.getElementById("result").value = output.toUpperCase();
//   }

//   document.getElementById("numberInput").addEventListener("keypress", function(event) {
//     var fromBase = document.getElementById("fromBase").value;
//     var char = String.fromCharCode(event.charCode);

//     if (!/^[01]$/.test(char) && fromBase === "binary") {
//       event.preventDefault();
//     } else if (!/^[0-7]$/.test(char) && fromBase === "octal") {
//       event.preventDefault();
//     } else if (!/^[0-9A-Fa-f]$/.test(char) && fromBase === "hexadecimal") {
//       event.preventDefault();
//     } else if (!/^\d$/.test(char) && fromBase === "decimal") {
//       event.preventDefault();
//     }
//   });



// Keep track of registered users
const registeredUsers = {};

function showRegistrationForm() {
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('registration-container').style.display = 'block';
}

function showLoginForm() {
  document.getElementById('login-container').style.display = 'block';
  document.getElementById('registration-container').style.display = 'none';
  // Reset login form inputs
  document.getElementById('uname').value = '';
  document.getElementById('pwd').value = '';
  document.getElementById('myCheck').checked = false;
  document.getElementById('loginButton').disabled = true;
}


function register() {
    const newUsername = document.getElementById('new-uname').value;
    const newPassword = document.getElementById('new-pwd').value;
  
    if (newUsername.trim() !== '' && newPassword.trim() !== '') {
      if (!registeredUsers.hasOwnProperty(newUsername)) {
        // Use a more secure method for storing passwords in a real-world scenario
        registeredUsers[newUsername] = newPassword;
  
        // Clear registration form
        document.getElementById('new-uname').value = '';
        document.getElementById('new-pwd').value = '';
  
        showLoginForm();
      } else {
        alert('Username already exists. Please choose another.');
      }
    } else {
      alert('Username and password are required.');
    }
  }




// Function to toggle the login button based on the checkbox state
function toggleLoginButton() {
  const checkbox = document.getElementById('myCheck');
  const loginButton = document.getElementById('loginButton');

  // Enable the login button if the checkbox is checked, otherwise disable it
  loginButton.disabled = !checkbox.checked;
}

function login() {
  const username = document.getElementById('uname').value;
  const password = document.getElementById('pwd').value;

  if (username.trim() !== '' && registeredUsers.hasOwnProperty(username) && password === registeredUsers[username]) {
    // Clear login form
    document.getElementById('uname').value = '';
    document.getElementById('pwd').value = '';

    document.getElementById('login-container').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('logout').style.display = 'block';

    document.getElementById('user-info').innerText = 'Welcome, ' + username + '!';
    document.getElementById('user-info').style.display = 'block';
    
    // Toggle the login button after successful login
    toggleLoginButton();
  } else {
    // Display an alert for wrong username or password
    alert('Wrong username or password. Please try again.');
  }
}


function logout() {
  document.getElementById('logout').style.display = 'none';
  document.getElementById('content').style.display = 'none';
  document.getElementById('login-container').style.display = 'block';
  document.getElementById('user-info').style.display = 'none';
  document.getElementById('myCheck').checked = false;
  document.getElementById('loginButton').disabled = true;
}



/*===========>>>Logical content (Number Converter)<<<==========*/

document.querySelector('#input').addEventListener("keypress", function(event){
    let base = document.querySelector("#base").value;
    let char = String.fromCharCode(event.charCode);

    if(!/^[01]$/.test(char) && base === "binary"){
        event.preventDefault();
    } else if(!/^\d$/.test(char) && base === "decimal"){
        event.preventDefault();
    } else if(!/^[0-7]$/.test(char) && base === "octal"){
        event.preventDefault();
    } else if(!/^[0-9A-F]$/.test(char) && base === "hexadecimal"){
        event.preventDefault();
    }
});

function convert(){
  let base = document.querySelector("#base").value;
  let result = document.querySelector("#result").value;
  let input = document.querySelector("#input").value;

    let decimal = parseInt(input, base === "binary"? 2 : base === "octal"? 8 : base === "hexadecimal"? 16 : 10);
    let output = decimal.toString(result === "binary"? 2 : result === "octal"? 8 : result === "hexadecimal"? 16 : 10);

    document.querySelector("#output").value = output.toUpperCase();
}

function reset(){
    document.querySelector("#input").value = '';
    document.querySelector("#output").value = '';
}