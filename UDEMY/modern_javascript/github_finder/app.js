// INIT GITHUB
const github = new Github();
// INIT UI
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if (userText != '') {
        // Make http call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    // Show an alert
                    ui.showAlert('User Not Found!', 'alert alert-danger');
                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
            .catch(error => console.log(error));
    } else {
        // clear the profile
        ui.clearProfile();
    }
});