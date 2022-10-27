let validators = {};

validators.validateName = (name) => {
  if (name.length === 0) {
    let err = new Error("Name should not be empty");
    err.status = 400;
    throw err;
  }
  return true;
};

validators.validateEmail = (email) => {
  var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  // console.log(emailFormat.test(email));
  if (!(email !== "" && emailFormat.test(email))) {
    let err = new Error("Invalid email, please enter a valid email");
    err.status = 400;
    throw err;
  }
  return true;
};

validators.validatePassword = (pass) => {
  var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
  if (pass.value !== passw) {
    let err = new Error("Password should be atleast 8 characters long");
    err.status = 400;
    throw err;
  }
  return true;
};

validators.validatePhone = (phone) => {
  if (phone.length !== 10) {
    let err = new Error("Phone number should be at least 10 number");
    err.status = 400;
    throw err;
  }
  return true;
};

export default validators;

