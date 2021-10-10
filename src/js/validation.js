/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
function validate() {
  const username = document.getElementById('username');
  // eslint-disable-next-line max-len
  const validated = Boolean(validateAge(), validateEmail(), validateUsername(), validatePassword());
  if (validated) {
    document.getElementById('container').style = 'display:none';
    const hello = document.createTextNode('Hello ' + username.value);
    document.getElementById('app').appendChild(hello);
  }
}

function validateEmail() {
  const mail = document.getElementById('email');
  const maillbl = document.getElementById('emaillbl');
  // eslint-disable-next-line max-len
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
    maillbl.className = 'noErrorHappen';
    return (true);
  } else {
    maillbl.className = 'errorHappen';
    return (false);
  }
}

function validateAge() {
  const age = document.getElementById('age');
  const agelbl = document.getElementById('agelbl');
  // eslint-disable-next-line max-len
  if (age.value >= 18) {
    agelbl.className = 'noErrorHappen';
    return (true);
  } else {
    agelbl.className = 'errorHappen';
    return (false);
  }
}

function validateUsername() {
  const username = document.getElementById('username');
  const usernamelbl = document.getElementById('usernamelbl');
  // eslint-disable-next-line max-len
  if (username.value.length >= 5) {
    usernamelbl.className = 'noErrorHappen';
    return (true);
  } else {
    usernamelbl.className = 'errorHappen';
    return (false);
  }
}

function validatePassword() {
  const pwd = document.getElementById('psw');
  console.log(pwd);
  const pwdrepeat = document.getElementById('psw-repeat');
  const pwdlbl = document.getElementById('pswlbl');
  const pwdrepeatlbl = document.getElementById('psw-repeatlbl');
  // eslint-disable-next-line max-len
  if (pwd.value == pwdrepeat.value && pwd.value.length >= 6) {
    pwdlbl.className = 'noErrorHappen';
    pwdrepeatlbl.className = 'noErrorHappen';
    return (true);
  } else {
    pwdlbl.className = 'errorHappen';
    pwdrepeatlbl.className = 'errorHappen';
    return (false);
  }
}

module.exports = {
  validate,
};
