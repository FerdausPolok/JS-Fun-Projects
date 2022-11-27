let searchBtn = document.querySelector("#searchBtn"); //search button
let searchUser = document.querySelector("#searchUser"); //user input form data from search bar
let ui = new UI();

searchBtn.addEventListener("click", fetch_data); //for button click
searchUser.addEventListener("keyup", (e) => {
  //for enter key
  if (e.keyCode === 13) {
    fetch_data();
  }
});

function fetch_data() {
  let userGivenText = searchUser.value;
  if (userGivenText != "") {
    //Geting User Data via Fetch API
    fetch(`https://api.github.com/users/${userGivenText}`)
      .then((result) => result.json())
      .then((profile_data) => {
        //Geting User Repo Data via Fetch API
        fetch(profile_data.repos_url)
          .then((result) => result.json())
          .then((repo_data) => {
            console.log(repo_data);
            if (repo_data == "") {
              //in case of not having public repo
              ui.showProfile(profile_data, repo_data, false);
            } else {
              //in case of having public repo
              ui.showProfile(profile_data, repo_data, true);
            }
          });
        //console.log(data.repos_url);

        if (profile_data.message == "Not Found") {
          //Show Alert that usernamen not found
          ui.showAlert("User not found!", "alert alert-danger");
        } else {
          //send profile data
          ui.showProfile(profile_data);
        }
      });
  } else {
    //Clear Profile
    ui.clearProfile();
  }
}
