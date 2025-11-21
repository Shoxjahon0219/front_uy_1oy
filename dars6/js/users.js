const root = document.getElementById("root");
const toggle = document.getElementById("toggle");

let usersData = [];
let isGrid = false;

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((json) => {
    usersData = json;
    render();
  })
  .catch((err) => console.error(err));

function render() {
  root.innerHTML = "";

  root.className = isGrid
    ? "grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[700px] mx-auto my-8"
    : "space-y-4 max-w-[700px] mx-auto my-8";

  usersData.forEach((user) => {
    const card = document.createElement("div");
    card.className = "bg-slate-600 p-4 rounded shadow-md";
    card.innerHTML = `
      <h2 class="font-bold text-lg mb-1">${user.name}</h2>
      <p class="text-gray-300 text-sm">${user.email}</p>
      <p class="text-gray-300 text-sm">${user.phone}</p>
    `;
    root.appendChild(card);
  });
}

toggle.addEventListener("click", () => {
  isGrid = !isGrid;
  render();
});
