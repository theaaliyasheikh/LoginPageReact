import { useState } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    let countSpecialCharacters = 0;
    let countUpperCase = 0;
    let countLowerCase = 0;
    let countDigit = 0;

    if (username.length === 0) {
      alert('Invalid Form, username can not be empty')
      return
    }

    for (let i = 0; i < password.length; i++) {
      const specialCharacters = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '[',
        '{',
        ']',
        '}',
        ':',
        ';',
        '<',
        '>',
      ]
      if (specialCharacters.includes(password[i])) {
        countSpecialCharacters++;
      }
      else if (!isNaN(password[i] * 1)) {
        countDigit++
      }
      else {
        if (password[i] === password[i].toUpperCase()) {
          countUpperCase++
        }
        if (password[i] === password[i].toLowerCase()) {
          countLowerCase++
        }
      }
    }
    
    if (password.length === 0) {
      alert ('please enter the password!')
    }

   else if (countLowerCase === 0) {
      alert('Invalid Form, 0 lower case characters in password')
      return
    }

   else if (countUpperCase === 0) {
      alert('Invalid Form, 0 upper case characters in password')
      return
    }

   else if (countDigit === 0) {
      alert('Invalid Form, 0 digit characters in password')
      return
    }

   else if (countSpecialCharacters === 0) {
      alert('Invalid Form, 0 special characters in password')
      return
    }
   else alert('Form is valid')
  }

  return (
    <main>
      <div className="container">
        <div className="loginContainer">
          <div className="left">
            <h1>Welcome to My Login App</h1>
            <p>This is a simple login page created with the help of React.js, Node.JS, HTML, CSS, Bootstrap. I am looking forward to add more features into this application. It is done with the best practices of programming skills that I learned by myself and with the guidance of my colleagues.</p>
          </div>
          <div className="right">
            <h1>USER LOGIN</h1>
            <form className="loginForm">
              <div><input className='username' type="text" placeholder='&#xf007;' onChange={(e) => setUsername(e.target.value)} /></div>
              <div><input className='password' type="password" placeholder='&#xf023;' onChange={(e) => setPassword(e.target.value)} /></div>
              <div className="others">
                <div>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>
                <div>
                  <a href="#">Forgot Password?</a>
                </div>
              </div>
              <div><button type="button" className="btn btn-primary" onClick={() => {
            validateForm()
          }}>Login</button></div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
