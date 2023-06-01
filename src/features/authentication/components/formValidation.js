export const validateSignupForm = (userDetails) => {
  let isValid = true;
  const errors = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  if (!userDetails.firstName) {
    errors.firstName = "Please enter your first name";
    isValid = false;
  } else if (!userDetails.firstName.match(nameRegex)) {
    errors.firstName = "Invalid first name";
    isValid = false;
  }

  if (!userDetails.lastName) {
    errors.lastName = "Please enter your last name";
    isValid = false;
  } else if (!userDetails.lastName.match(nameRegex)) {
    errors.lastName = "Invalid last name";
    isValid = false;
  }

  if (!userDetails.email) {
    errors.email = "Please enter your email";
    isValid = false;
  } else if (!userDetails.email.match(emailRegex)) {
    errors.email = "Invalid email";
    isValid = false;
  }

  if (!userDetails.username) {
    errors.username = "Please enter your user name";
    isValid = false;
  } else if (!userDetails.username.match(nameRegex)) {
    errors.username = "Invalid user name";
    isValid = false;
  }

  if (!userDetails.password) {
    errors.password = "Please enter a password";
    isValid = false;
  } else if (!userDetails.password.match(passwordRegex)) {
    errors.password =
      "Password must contain at least 8 characters, one lowercase letter, one uppercase letter, and one number";
    isValid = false;
  }
  if (!userDetails.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
    isValid = false;
  } else if (userDetails.password !== userDetails.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
    isValid = false;
  }

  return { isValid, errors };
};
