const membersContainer = document.getElementById("members");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

async function fetchMembers() {
  const response = await fetch("data/members.json");
  const members = await response.json();

  displayMembers(members);
}

function displayMembers(members) {
  membersContainer.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("business-card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    membersContainer.appendChild(card);
  });
}

gridBtn.addEventListener("click", () => {
  membersContainer.classList.add("grid-view");
  membersContainer.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
  membersContainer.classList.add("list-view");
  membersContainer.classList.remove("grid-view");
});

fetchMembers();
