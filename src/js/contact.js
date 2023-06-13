function validateForm() {
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var phoneInput = document.getElementById('phone');
  var nameError = document.getElementById('nameError');
  var emailError = document.getElementById('emailError');
  var phoneError = document.getElementById('phoneError');

  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';

  if (nameInput.value.length > 10) {
    nameError.textContent = 'Name must not exceed 10 characters.';
    return false;
  }

  if (!isValidEmail(emailInput.value)) {
    emailError.textContent = 'Invalid email address.';
    return false;
  }

  if (!isValidPhoneNumber(phoneInput.value)) {
    phoneError.textContent = 'Invalid phone number.';
    return false;
  }

  return true;
}

function isValidEmail(email) {
  // Simple email validation using a regular expression
  var emailPattern = /^\S+@\S+\.\S+$/;
  return emailPattern.test(email);
}

function isValidPhoneNumber(phone) {
  // Simple phone number validation using a regular expression
  var phonePattern = /^\d{10}$/;
  return phonePattern.test(phone);
}
