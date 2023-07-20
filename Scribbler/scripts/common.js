fetch('index.html')
    .then(response => response.text())
    .then(data => {
        // Extract the header content from the fetched data
        // Extract the content of the 'header' div
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const header1 = doc.getElementById('header1');

        // Insert the header content into the container
        document.getElementById('header1').appendChild(header1);

        const signUpModal = document.getElementById('signup-modal');
        const signInModal = document.getElementById('signin-modal');
        const createPostModal = document.getElementById('createpost-modal');

        // Get the buttons that open the modals
        const signUpBtn = document.querySelector('.sign-up');
        const signInBtn = document.querySelector('.sign-in');
        const allPostsBtn = document.querySelector('.all-post');
        const createPostBtn = document.querySelector('.create-post');

        
    })
    .catch(error => console.error('Error fetching header:', error));

