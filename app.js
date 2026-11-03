// ===== HOPE HOSPITAL - ALL PAGES JAVASCRIPT =====
// 1. Show if hospital is Open or Closed (Kampala time
document.addEventListener("DOMContentLoaded", () => {
  const hour = new Date().getHours();const el = document.getElementById('open-status');if (el) {
    if (hour >= 8 && hour < 18) {el.textContent = "Open Now 8AM - 6PM";el.style.color = "green";el.style.fontWeight = "bold"; } 
      else {el.textContent = "Closed - Emergency Only (Call 256790208934)";el.style.color = "red";el.style.fontWeight = "bold";}}});
// 2. Contact Page - Form Validation
function checkform() {
  let nameInput = document.getElementById('name');
  let messageInput = document.getElementById('message');
  let name = nameInput ? nameInput.value.trim() : "";
  let message = messageInput ? messageInput.value.trim() : "";if (name.length < 3) {alert("Please enter your full name");return false;}
  if (message.length < 10) {
  alert("Please write a longer message (at least 10 characters)");return false;}
  alert("Thank you " + name + "! Your message has been sent to Hope Hospital.");
  // Keep the form from submitting until a backend is connected.
  return false;
}
// 3. Open WhatsApp
function whatsApp() {let nameField = document.getElementById('name');
  let name = nameField && nameField.value ? nameField.value : "Patient";
  let text = `Hello Hope Hospital, I am ${name}. I need assistance.`;
  window.open("https://wa.me/256790208934?text=" + encodeURIComponent(text), "_blank");}
// 4. Book Appointment (works on all 3 pages)
function book() {alert("Appointment request received! We will call you shortly on 256790208934");whatsApp();}
// 5. FOR service.html - Live Search
function searchService() {
  let searchBox = document.getElementById('serviceSearch');
  if (!searchBox) return;
  let input = searchBox.value.toLowerCase();
  let cards = document.querySelectorAll('.service-card');cards.forEach(card => {let text = card.innerText.toLowerCase();
  card.style.display = text.includes(input) ? "" : "none";});}
// 6. FOR index.html - Auto changing banner
let slides = ["Welcome to Hope Hospital", "24/7 Emergency Care in Kampala", "Qualified Doctors - Affordable Care"];
let slideIndex = 0;
setInterval(() => {
  let banner = document.getElementById('home-banner');
  if (banner) {
    slideIndex = (slideIndex + 1) % slides.length;
    banner.innerText = slides[slideIndex];
  }
}, 3000);
