class UI {
  constructor() {
    //to save the profile div here
    this.profile = document.querySelector("#profile");
  }

  showProfile(profile, repo, haveRepo) {
    this.clearAlert(); //Clear if there is a alart showing from last search result

    //populate li into a string in case of having public repo
    if (haveRepo) {
      var str = "<ul>";
      for (var i = 0; i < repo.length; i++) {
        str +=
          "<li>" +
          repo[i].name +
          '<a target="_blank" href=' +
          repo[i].html_url +
          '><button class="btn btn-outline-dark rounded ml-2 mt-2 mb-2 btn-sm">View on GitHub</button> </a> </li>';
      }
      str += "</ul>";
    }

    //in case of not having public repo
    else {
      str = "<h6> This user doen't have any Public Repo. 🙂 </h6>";
    }

    //populating the main content div #profile
    this.profile.innerHTML = `
        <div class="card card-body mb-3 ">
        <div class="row">
        <div class="col-md-3">
            <img class="img-fluid mb-2" src="${profile.avatar_url}">
            <p target="_blank" class="btn btn-dark btn-block mb-1" style= "border-radius: 4px;" >${
              profile.name
            }</p>
            <p class="text-center list-group-item mb-1" style= "font-size: 14px; font-family: sans-serif; " >${
              profile.bio
            } </p>
            <a href="${
              profile.html_url
            }" target="_blank" class="btn btn-primary btn-block mb-1" style= "border-radius: 4px;" >View Profile</a>
        </div>
          <div class="col-md-9">
            <span class="badge badge-danger">Public Repos: ${
              profile.public_repos
            }</span>
            <span class="badge badge-info">Followers: ${
              profile.followers
            }</span>
            <span class="badge badge-warning">Following: ${
              profile.following
            }</span>
            <br><br>
            <ul class="list-group">
            <li class="list-group-item"> <b> profilename: </b> ${
              profile.login
            } </li>
            <li class="list-group-item"> <b> ID: </b> ${profile.id} </li>
            <li class="list-group-item"> <b> Email: </b> ${profile.email} </li>
            <li class="list-group-item"> <b> Company: </b> ${
              profile.company
            } </li>
            <li class="list-group-item"> <b> Website/Blog: </b> ${
              profile.blog
            } </li>
            <li class="list-group-item"> <b> Location: </b> ${
              profile.location
            } </li>
            <li class="list-group-item"> <b> Member Since: </b> ${profile.created_at.slice(
              0,
              7
            )} </li> 
            <li class="list-group-item"> <b> Last Contribution: </b> ${profile.updated_at.slice(
              0,
              7
            )} </li> 
            </ul>
          </div>
        </div>
      </div>

      <div class="card card-body mb-3 ">
        <div class="col-md-12">
          <p target="_blank" class="btn btn-dark btn-block mb-1" style= "border-radius: 4px;" >Public Repositories</p>
          <br>  
          <ul class="list-group">
            ${str}
          </ul>
        </div>
      </div>
    </div>
        `;
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  showAlert(message, className) {
    this.clearAlert(); //for clearing previous alert if there is any
    this.clearProfile(); //for clearing the main div if there is any previous profile data
    let div = document.createElement("div"); //creating div for alert
    div.className = className; //setting given classname while calling the fn
    div.appendChild(document.createTextNode(message)); //setting the given alert message while calling the fn
    let container = document.querySelector(".searchContainer");
    let search = document.querySelector(".search");
    container.insertBefore(div, search); //placing newly created div before search
  }

  clearAlert() {
    //for sake on not getting a list of alerts (clear previous alert)
    let currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
