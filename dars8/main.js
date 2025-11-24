const usersForm = document.getElementById("usersForm");
const tbody = document.getElementById("tbody");

let users = JSON.parse(localStorage.getItem("users")) || [];

function deleteUser(id) {
  users = users.filter((u) => u.id !== id);

  localStorage.setItem("users", JSON.stringify(users));

  render();
}

let editUser = null;

const changeTheButton = () => (btn.innerHTML = editUser ? "Update" : "Save");

const update = (id) => {
  users.forEach((user) => {
    if (user.id === id) {
      editUser = user;
      usersForm.name.value = user.name;
      usersForm.age.value = user.age;
      usersForm.gender.value = user.gender;
    }
  });

  changeTheButton();
};

const render = () => {
  tbody.innerHTML = "";

  if (users.length === 0) {
    tbody.innerHTML = `
      <tr class="bg-neutral-primary border-b border-default">
        <th colspan="5" class="px-6 py-4 font-medium text-center">
          No data
        </th>
      </tr>`;
    return;
  }

  users.map((user, index) => {
    tbody.innerHTML += `
      <tr class="bg-neutral-primary border-b border-default">
        <th class="px-6 py-4 font-medium">${index + 1}</th>
        <td class="px-6 py-4">${user.name}</td>
        <td class="px-6 py-4">${user.age}</td>
        <td class="px-6 py-4">${user.gender}</td>
        <td class="px-6 py-4">
        <button class="cursor-pointer" onclick="update(${user.id})">
            <i class="fa-solid fa-pencil"></i>
        </button>
          <button class="cursor-pointer" onclick="deleteUser(${user.id})">
            <i class="fa-brands fa-apple"></i>
          </button>
        </td>
      </tr>
    `;
  });

  const sum = users.reduce((acc, cur) => acc + Number(cur.age), 0);
  const avg = sum / users.length;

  tbody.innerHTML += `
    <tr class="bg-neutral-primary border-b border-default font-bold">
      <td>TOTAL-${users.length}</td>
      <td>-</td>
      <td>${avg.toFixed(1)}</td>
      <td></td>
    </tr>
  `;
};

usersForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const { name, age, gender } = event.target;

  const newUser = {
    id: Date.now(),
    name: name.value,
    age: age.value,
    gender: gender.value,
  };

  if (editUser) {
    users = users.map((user) => {
      if (user.id === editUser.id)
        user = {
          ...newUser,
          id: editUser.id,
        };

      return user;
    });

    editUser = null;
  } else {
    users.push(newUser);
  }

  localStorage.setItem("users", JSON.stringify(users));

  render();
  changeTheButton();
  event.target.reset();
});

document.addEventListener("DOMContentLoaded", render);
