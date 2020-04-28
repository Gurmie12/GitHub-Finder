const searchUser = document.getElementById('searchUser');
const git = new Github;
const ui = new UI;

searchUser.addEventListener('keyup', (e) =>{
    const userText = e.target.value;

    if(userText !== ""){
        git.getUser(userText)
        .then(response =>{
            if(response.profile.message === "Not Found"){
                ui.showAlert('User Not Found!', 'alert alert-danger');
            }else{
                ui.showProfile(response.profile);
                ui.showRepos(response.repos);
            }
        })
        .catch(err => console.log(err))
    }else{
        ui.clearProfile();
    }
});