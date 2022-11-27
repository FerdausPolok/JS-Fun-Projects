class UI {
  constructor() {
    //to save the profile div here
    this.profile = document.querySelector("#profile");
  }

  showProfile(profile, repo) {
    this.clearAlert();
    var str = '<ul>'

    //looping through the repor data and saing all the repo name as li inside a string
    for (var i = 0; i < repo.length; i++) {
      str += '<li>' + repo[i].name + '</li>';
    }
    str += '</ul>';

    this.profile.innerHTML = `
        <div class="card card-body mb-3 ">
        <div class="row">
        <div class="col-md-3">
            <img class="img-fluid mb-2" src="${profile.avatar_url}">
            <p target="_blank" class="btn btn-dark btn-block mb-1" style= "border-radius: 4px;" >${profile.name}</p>
            <p class="text-center list-group-item mb-1" style= "font-size: 14px; font-family: sans-serif; " >${profile.bio} </p>
            <a href="${profile.html_url}" target="_blank" class="btn btn-primary btn-block mb-1" style= "border-radius: 4px;" >View Profile</a>
        </div>
          <div class="col-md-9">
            <span class="badge badge-danger">Public Repos: ${profile.public_repos}</span>
            <span class="badge badge-info">Followers: ${profile.followers}</span>
            <span class="badge badge-warning">Following: ${profile.following}</span>
            <br><br>
            <ul class="list-group">
            <li class="list-group-item"> <b> profilename: </b> ${profile.login} </li>
            <li class="list-group-item"> <b> ID: </b> ${profile.id} </li>
            <li class="list-group-item"> <b> Email: </b> ${profile.email} </li>
            <li class="list-group-item"> <b> Company: </b> ${profile.company} </li>
            <li class="list-group-item"> <b> Website/Blog: </b> ${profile.blog} </li>
            <li class="list-group-item"> <b> Location: </b> ${profile.location} </li>
            <li class="list-group-item"> <b> Member Since: </b> ${profile.created_at.slice(0, 7)} </li> 
            <li class="list-group-item"> <b> Last Contribution: </b> ${profile.updated_at.slice(0, 7)} </li> 
            </ul>
          </div>
        </div>
      </div>

      <div class="card card-body mb-3 ">
        <div class="col-md-12">
        <p target="_blank" class="btn btn-dark btn-block mb-1" style= "border-radius: 4px;" >Public Repositories</p>
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
    this.clearAlert();
    this.clearProfile();
    let div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    let container = document.querySelector(".searchContainer");
    let search = document.querySelector(".search");
    container.insertBefore(div, search);
  }

  clearAlert() {
    //for sake on not getting list of alerts
    let currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}


