// Form Validation
document.getElementById('userForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  let isValid = true;

  // Validate Username
  if (!username) {
    document.getElementById('usernameError').classList.remove('hidden');
    isValid = false;
  } else {
    document.getElementById('usernameError').classList.add('hidden');
  }

  // Validate Email
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    document.getElementById('emailError').classList.remove('hidden');
    isValid = false;
  } else {
    document.getElementById('emailError').classList.add('hidden');
  }

  // If valid, display success message
  if (isValid) {
    document.getElementById('outputMessage').textContent = `Welcome, ${username}! Your email is ${email}.`;
  }
});

// Interactive Element
const interactiveBox = document.getElementById('interactiveBox');
interactiveBox.addEventListener('click', function () {
  const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  interactiveBox.style.backgroundColor = randomColor;
  document.getElementById('outputMessage').textContent = `Box color changed to ${randomColor}!`;
});