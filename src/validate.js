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
