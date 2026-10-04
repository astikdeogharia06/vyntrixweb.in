// IMPORTANT: Replace these two values with your real business contact details.
const WHATSAPP_NUMBER = "918768279821"; // India country code + number, digits only
const BUSINESS_EMAIL = "hello@vyntrixweb.in";

const waUrl = (message = "Hello VYNTRIXWEB.IN, I would like to discuss a website project.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

document.getElementById("wa-link").href = waUrl();
document.getElementById("float-wa").href = waUrl();
document.getElementById("email-link").href = `mailto:${BUSINESS_EMAIL}`;
document.getElementById("email-link").querySelector("span:nth-child(2)").lastChild.textContent = BUSINESS_EMAIL;
document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "✕" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));

document.getElementById("contact-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = `Hello VYNTRIXWEB.IN!\n\nName: ${form.get("name")}\nEmail: ${form.get("email")}\nService: ${form.get("service")}\nProject details: ${form.get("message")}`;
  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Please add your WhatsApp number in script.js first. Replace 91XXXXXXXXXX with your country code and phone number.");
    return;
  }
  window.open(waUrl(message), "_blank", "noopener,noreferrer");
});
