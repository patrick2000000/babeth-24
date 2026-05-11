function applyNow() {
  alert("Application received!");
}

document.addEventListener("DOMContentLoaded", () => {

  let form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;
      let msg = document.getElementById("msg");

      if (!name || !email || !message) {
        msg.style.color = "red";
        msg.textContent = "Fill all fields";
      } else {
        msg.style.color = "green";
        msg.textContent = "Sent successfully!";
      }
    });
  }

});