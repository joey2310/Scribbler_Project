// post.js

// Function to get URL parameters
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Function to display PostData details on the page
function displayPostDetails(postDataJson) {
  const post = JSON.parse(decodeURIComponent(postDataJson));

  // Display PostData details on the page
  const postTitleElement = document.querySelector('.post-title');
  const postTextElement = document.querySelector('.post-text');
  const postAuthorElement = document.querySelector('.post-author');
  const likeCounterElement = document.querySelector('.like-counter');
  const allCommentsElement = document.querySelector('.all-comments');

  postTitleElement.textContent = post.heading;
  postTextElement.textContent = post.text;
  postAuthorElement.textContent =  post.user;
  likeCounterElement.textContent = 'Be the first one to like this!'; 

  // Display comments (if available)
  allCommentsElement.innerHTML = '';
  if (post.comments && post.comments.length > 0) {
    post.comments.forEach((comment) => {
      const commentElement = document.createElement('div');
      commentElement.textContent = comment;
      allCommentsElement.appendChild(commentElement);
    });
  }
}

// Get the postData from the URL parameters
const postDataJson = getUrlParameter('postData');

if (postDataJson) {
  // Call the function to display PostData details
  displayPostDetails(postDataJson);
} else {
  // PostData not found
  const postDetailsElement = document.querySelector('.post-details');
  postDetailsElement.innerHTML = '<h1>Post Not Found</h1>';
}
// Function to handle the edit/save button click
function handleEditSaveButtonClick() {
  const postTitle = document.querySelector('.post-title');
  const postText = document.querySelector('.post-text');
  const editSaveButton = document.querySelector('.edit-save-button');

  if (editSaveButton.textContent === 'Edit') {
    postTitle.contentEditable = true;
    postText.contentEditable = true;
    postTitle.classList.add('edit-mode');
    postText.classList.add('edit-mode');
    editSaveButton.innerHTML = '<i class="fas fa-save"></i>Save';
  } else {
    postTitle.contentEditable = false;
    postText.contentEditable = false;
    postTitle.classList.remove('edit-mode');
    postText.classList.remove('edit-mode');
    editSaveButton.innerHTML = '<i class="fas fa-edit"></i>Edit';
  }
}

// Event listener for the edit/save button click
const editSaveButton = document.querySelector('.edit-save-button');
editSaveButton.addEventListener('click', handleEditSaveButtonClick);

// Function to handle the like button click
function handleLikeButtonClick() {
  const likeButton = document.querySelector('.like-button');
  const likeCounter = document.querySelector('.like-counter');
  let likeCount = parseInt(likeCounter.textContent);
  

  if (!likeButton.classList.contains('liked')) {
    likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i>Liked!';
    if(typeof(likeCount) === Number){
      likeCount++;
    }
    else{
      likeCount = 1;
    }
  } else {
    likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i>Like';
    likeCount--;
  }

  likeButton.classList.toggle('liked');
  likeCounter.textContent = likeCount === 0 ? 'Be the first one to like this!' : `${likeCount} person like this!`;
}

// Event listener for the like button click
const likeButton = document.querySelector('.like-button');
likeButton.addEventListener('click', handleLikeButtonClick);

// Function to handle the comment button click
function handleCommentButtonClick() {
  const commentInput = document.querySelector('.comment-input');
  const allComments = document.querySelector('.all-comments');
  allComments.classList.add('show');
  const newComment = commentInput.value.trim();

  if (newComment !== ' ') {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.textContent = ` ${newComment}`;
    allComments.insertBefore(commentDiv, allComments.firstChild);
    commentInput.value = '';
  }
}

// Event listener for the comment button click
const commentButton = document.querySelector('.comment-button');
commentButton.addEventListener('click', handleCommentButtonClick);

