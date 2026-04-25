const menuItems = [
  {
    name: "Signature Cappuccino",
    description: "Rich espresso with creamy microfoam.",
    price: "35 Birr",
  },
  {
    name: "Iced Caramel Latte",
    description: "Smooth cold latte with house caramel.",
    price: "45 Birr",
  },
  {
    name: "Avocado Toast",
    description: "Multigrain toast, avocado, chili flakes.",
    price: "50 Birr",
  },
  {
    name: "Blueberry Muffin",
    description: "Fresh-baked, soft center, crunchy top.",
    price: "40 Birr",
  },
];

const menuGrid = document.getElementById("menuGrid");
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuItems.forEach((item) => {
  const card = document.createElement("article");
  card.className = "menu-item";
  card.innerHTML = `
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <p class="price-tag">${item.price}</p>
  `;
  menuGrid.appendChild(card);
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  formMessage.textContent = `Thanks ${name}! Your reservation request for ${date} at ${time} was received.`;
  formMessage.style.color = "#2e7d32";
  bookingForm.reset();
});

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});
