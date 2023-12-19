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
        registeredUsers[newUsername] = newPassword;
  
        // Clear registration forms
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



function toggleLoginButton() {
  const checkbox = document.getElementById('myCheck');
  const loginButton = document.getElementById('loginButton');

  // login button 
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
    
    toggleLoginButton();
  } else {
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

document.querySelector("#base").addEventListener("change", function() {
  document.querySelector("#input").value = '';
  document.querySelector("#out[ut").value = '';
});