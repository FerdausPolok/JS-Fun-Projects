class UI {
  constructor() {
    //to save the profile div here
    this.profile = document.querySelector("#profile");
  }

  showProfile(user) {
    this.clearAlert();
    this.profile.innerHTML = `
        <div class="card card-body mb-3 ">
        <div class="row">
        <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <p target="_blank" class="btn btn-dark btn-block mb-1" style= "border-radius: 4px;" >${user.name}</p>
            <p class="text-center list-group-item mb-1" style= "font-size: 14px; font-family: sans-serif; " >${user.bio} </p>
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-1" style= "border-radius: 4px;" >View Profile</a>
        </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
            <li class="list-group-item"> <b> Username: </b> ${user.login} </li>
            <li class="list-group-item"> <b> ID: </b> ${user.id} </li>
            <li class="list-group-item"> <b> Email: </b> ${user.email} </li>
            <li class="list-group-item"> <b> Company: </b> ${user.company} </li>
            <li class="list-group-item"> <b> Website/Blog: </b> ${user.blog} </li>
            <li class="list-group-item"> <b> Location: </b> ${user.location} </li>
            <li class="list-group-item"> <b> Member Since: </b> ${user.created_at.slice(0, 7)} </li> 
            <li class="list-group-item"> <b> Last Contribution: </b> ${user.updated_at.slice(0, 7)} </li> 
            </ul>
          </div>
        </div>
      </div>

      <div class="card card-body mb-3 ">
        <div class="col-md-12">
        <p target="_blank" class="btn btn-dark btn-block mb-1" style= "border-radius: 4px;" >Public Repositories</p>

          <ul class="list-group">
            <li class="list-group-item"> <b> Will Implement Soon! </b></li>
          </ul>
        
          </div>
      </div>
    </div>
        `;
  }

  showRepo(user) { }

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


