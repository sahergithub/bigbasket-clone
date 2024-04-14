

window.addEventListener('load', function() {
 const slideImages = document.querySelectorAll('.img-container img');
 const sliderFrame = document.querySelector('.slider-frame');
 let totalHeight = 0;

 slideImages.forEach(image => {
   totalHeight += image.clientHeight;
 });

 sliderFrame.style.height = totalHeight + 'px';
});


document.addEventListener('DOMContentLoaded', function() {
  // Get the login button element
  const loginButton = document.getElementById('loginButton');
  const loginForm = document.getElementById('loginForm');

  // Add click event listener to the login button
  loginButton.addEventListener('click', function() {
      // Show the login form
      loginForm.style.display = 'block';
  });

  // Get the close button in the login form
  const closeButton = document.getElementById('closeButton');

  // Add click event listener to the close button
  closeButton.addEventListener('click', function() {
      // Hide the login form
      loginForm.style.display = 'none';
  });

  // Get the login form element
  const form = document.getElementById('loginFormContent');

  // Add submit event listener to the form
  form.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();

      // Get the values entered by the user
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Simulate login logic - replace this with your actual login logic
      if (username === 'your_username' && password === 'your_password') {
          // Login successful
          alert('Login successful! Welcome, ' + username + '!');
          // Here you can redirect the user to another page if needed
          // For example: window.location.href = 'dashboard.html';
      } else {
          // Login failed
          alert('Incorrect username or password. Please try again.');
      }
  });
});

