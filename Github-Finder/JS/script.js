let searchBtn = document.querySelector("#searchBtn"); //search button
let searchUser = document.querySelector("#searchUser"); //user input form data from search bar
let ui = new UI();

searchBtn.addEventListener("click", (e) => {
    let userGivenText = searchUser.value;
    if (userGivenText != "") {
        //Geting User Data via Fetch API
        fetch(`https://api.github.com/users/${userGivenText}`)
            .then(result => result.json())
            .then(data => {
                //Geting User Repo Data via Fetch API   
                fetch(data.repos_url)
                    .then(result => result.json())
                    .then(data2 => {
                        console.log(data2);
                        // ui.showRepo(data2)
                        // if(data2.message== 'Not Found'){
                        //     //Show Alert that usernamen not found
                        //     ui.showAlert("User not found!", "alert alert-danger")
                        // } else{
                        //     //send repo rata
                        //     ui.showRepo(data2)
                        // }
                    })
                //console.log(data.repos_url);

                if (data.message == 'Not Found') {
                    //Show Alert that usernamen not found
                    ui.showAlert("User not found!", "alert alert-danger")
                } else {
                    //send profile data
                    ui.showProfile(data)
                }
            })

    } else {
        //Clear Profile
        ui.clearProfile();
    }
})

