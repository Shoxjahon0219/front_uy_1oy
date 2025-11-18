// USERlaga

const tbody_for_users = document.getElementById("tbody_for_users");
const container_for_users = document.getElementById("container");

tbody_for_users.innerHTML += `
<tr>
            <td colspan="4">
            <div class="loader"></div> 
            </td>
        </tr>
`;

container_for_users.innerHTML += `<div class="loader"></div>`;

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((json) => {
    tbody_for_users.innerHTML = "";
    container_for_users.innerHTML = "";
    json.map((user) => {
      tbody_for_users.insertAdjacentHTML(
        "beforeend",
        `
    <tr>
      <td>${user.name}</td>
      <td>${user.username}</td>
      <td>${user.phone}</td>
      <td>${user.website}</td>
    </tr>
  `
      );
      container_for_users.insertAdjacentHTML(
        "beforeend",
        `<div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="our-team">
            <div class="picture">
              <img
                class="img-fluid"
                src="https://picsum.photos/130/130"
              />
            </div>
            <div class="team-content">
              <h3 class="name">${user.name}</h3>
              <h4 class="title">${user.website}</h4>
              <h5>${user.phone}</h5>
              <h6>${user.email}</h2>
            </div>
          </div>
        </div>
      </div>`
      );
    });
  })
  .catch((e) => {
    tbody_for_users.innerHTML += `
<tr>
            <td colspan="4">
            <div class="error"></div> 
            </td>
        </tr>
`;
    container_for_users += `<div class="error"></div>`;
  });

// POSTs

const tbody_for_posts = document.getElementById("tbody_for_posts");
const container_for_posts = document.getElementById("container_for_posts");

tbody_for_posts.innerHTML += `
<tr>
            <td colspan="4">
            <div class="loader"></div> 
            </td>
        </tr>
`;

container_for_posts.innerHTML += `<div class="loader"></div>`;

fetch("https://jsonplaceholder.typicode.com/sposts")
  .then((res) => res.json())
  .then((json) => {
    tbody_for_posts.innerHTML = "";
    container_for_posts.innerHTML = "";
    json.map((post) => {
      tbody_for_posts.insertAdjacentHTML(
        "beforeend",
        `
    <tr>
    <td>${post.id}</td>
      <td>${post.title}</td>
      <td>${post.body}</td>
    </tr>
  `
      );
      container_for_posts.insertAdjacentHTML(
        "beforeend",
        `<div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="our-team">
            <div class="team-content">
              <h6 class="name">${post.title}</h6>
              <p class="title">${post.body}</p>
              
            </div>
          </div>
        </div>
      </div>`
      );
    });
  })
  .catch((e) => {
    tbody_for_posts.innerHTML += `
<tr>
            <td colspan="4">
            <div class="error"></div> 
            </td>
        </tr>
`;
    container_for_posts.innerHTML += `<div class="error"></div>`;
  });
