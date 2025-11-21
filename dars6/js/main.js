const rootElement = document.getElementById("root");
const btn_next = document.getElementById("btn_next");
const btn_back = document.getElementById("btn_back");
const buttons = document.getElementById("buttons");

let usersData;
let page;

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((json) => {
    usersData = json;
    page = 0;
    render(usersData.slice(0, 25));
  })
  .catch((err) => {
    console.error(err);
  });

function render(data) {
  rootElement.innerHTML = "";

  data.map((user) => {
    rootElement.innerHTML += `
      <div class="bg-slate-600 mb-3 rounded p-2 shadow">
          <h5>${user.id}</h5>
          <p>${user.title}</p>
          <p>${user.body}</p>
      </div>
    `;
  });
}

btn_next.addEventListener("click", () => {
  page += 1;
  reloadedPage = page * 25;

  const nextData = usersData.slice(reloadedPage, reloadedPage + 25);
  render(nextData);

  btn_back.classList.remove("hidden");

  if (reloadedPage + 25 >= usersData.length) {
    btn_next.classList.add("hidden");
  }
});

btn_back.addEventListener("click", () => {
  reloadedPage = (page - 1) * 25;

  const prevData = usersData.slice(reloadedPage, reloadedPage + 25);
  render(prevData);

  page -= 1;

  if (page === 0) {
    btn_back.classList.add("hidden");
  }

  btn_next.classList.remove("hidden");
});
