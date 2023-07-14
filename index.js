// Get the modal elements
const signUpModal = document.getElementById('signup-modal');
const signInModal = document.getElementById('signin-modal');
const createPostModal = document.getElementById('createpost-modal');

// Get the buttons that open the modals
const signUpBtn = document.querySelector('.sign-up');
const signInBtn = document.querySelector('.sign-in');
const allPostsBtn = document.querySelector('.all-post');
const createPostBtn = document.querySelector('.create-post');

// Get the close buttons
const signUpCloseBtn = signUpModal.querySelector('.close');
const signInCloseBtn = signInModal.querySelector('.close');
const createPostCloseBtn = createPostModal.querySelector('.close');

// Function to open the modal
function openModal(modal) {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal(modal) {
  modal.style.display = 'none';
}

// Event listener for the Sign Up button
signUpBtn.addEventListener('click', () => openModal(signUpModal));

// Event listener for the Sign In button
signInBtn.addEventListener('click', () => openModal(signInModal));

// Event listener for the All Posts button (redirect to bloglist.html)
allPostsBtn.addEventListener('click', () => {
  window.location.href = 'bloglist.html';
});

// Event listener for the Create Post button
createPostBtn.addEventListener('click', () => openModal(createPostModal));

// Event listeners for the close buttons
signUpCloseBtn.addEventListener('click', () => closeModal(signUpModal));
signInCloseBtn.addEventListener('click', () => closeModal(signInModal));
createPostCloseBtn.addEventListener('click', () => closeModal(createPostModal));

// Get the "Sign Up" button
const signUpButton = signUpModal.querySelector('.button');

// Function to validate the form inputs
function validateForm() {
  const nameInput = signUpModal.querySelector('input[name="name"]');
  const usernameInput = signUpModal.querySelector('input[name="username"]');
  const passwordInput = signUpModal.querySelector('input[name="password"]');
  const confirmPasswordInput = signUpModal.querySelector('input[name="confirm-password"]');

  if (!nameInput.value) {
    alert('Please fill out the Name field.');
    return false;
  }

  if (!usernameInput.value) {
    alert('Please fill out the Username field.');
    return false;
  }

  if (!passwordInput.value) {
    alert('Please fill out the Password field.');
    return false;
  }

  if (!confirmPasswordInput.value) {
    alert('Please fill out the Confirm Password field.');
    return false;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Password and Confirm Password do not match.');
    return false;
  }

  return true;
}

// Event listener for the "Sign Up" button
signUpButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the form from submitting

  if (validateForm()) {
    // Perform sign up logic or submit the form here
    console.log('Form submitted successfully!');
  }
});

s