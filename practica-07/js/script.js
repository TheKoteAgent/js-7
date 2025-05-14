document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("task-10");
  const output = document.getElementById("out-1");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();
    output.innerHTML = "";

    const data = {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      userEmail: form.userEmail.value.trim(),
      userPassword: form.userPassword.value.trim(),
      userAddress: form.userAddress.value.trim(),
      userCity: form.userCity.value.trim(),
      userRegion: form.userRegion.value,
      userZip: form.userZip.value.trim(),
    };

    const isValid = validateForm(data);

    if (isValid) {
      showOutput(data);
    }
  });

  function validateForm(data) {
    let valid = true;

    // First Name, Last Name
    const nameRegex = /^[A-Z][a-zA-Z]{4,24}$/;
    if (!nameRegex.test(data.firstName)) {
      showError(
        "inputFirstName",
        "First Name must start with a capital letter, contain only Latin letters, and be 5-25 characters."
      );
      valid = false;
    }
    if (!nameRegex.test(data.lastName)) {
      showError(
        "inputLastName",
        "Last Name must start with a capital letter, contain only Latin letters, and be 5-25 characters."
      );
      valid = false;
    }

    // Email
    const emailRegex = /^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(data.userEmail)) {
      showError(
        "inputEmail",
        "Invalid email format. Example: example@mail.com"
      );
      valid = false;
    }

    // Password
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/;
    if (!passRegex.test(data.userPassword)) {
      showError(
        "inputPassword",
        "Password must contain 1 lowercase, 1 uppercase, 1 digit, and be 8-20 characters."
      );
      valid = false;
    }

    // Address
    const addressRegex = /^[A-Za-z\s]{5,}$/;
    if (!addressRegex.test(data.userAddress)) {
      showError(
        "inputAddress",
        "Address must contain only Latin letters and be at least 5 characters."
      );
      valid = false;
    }

    // City
    if (!nameRegex.test(data.userCity)) {
      showError(
        "inputCity",
        "City must start with a capital letter, contain only Latin letters, and be 5-25 characters."
      );
      valid = false;
    }

    // Zip
    const zipRegex = /^\d{5}$/;
    if (!zipRegex.test(data.userZip)) {
      showError("inputZip", "Zip must contain exactly 5 digits.");
      valid = false;
    }

    return valid;
  }

  function showError(inputId, message) {
    const input = document.getElementById(inputId);
    let error = document.createElement("div");
    error.className = "text-danger mt-1";
    error.textContent = message;
    input.closest(".field-group").appendChild(error);
  }

  function clearErrors() {
    document.querySelectorAll(".text-danger").forEach((el) => el.remove());
  }

  function showOutput(data) {
    output.innerHTML = `
        <h4>Submitted Information:</h4>
        <ul>
          <li><strong>First Name:</strong> ${data.firstName}</li>
          <li><strong>Last Name:</strong> ${data.lastName}</li>
          <li><strong>Email:</strong> ${data.userEmail}</li>
          <li><strong>Password:</strong> ${data.userPassword}</li>
          <li><strong>Address:</strong> ${data.userAddress}</li>
          <li><strong>City:</strong> ${data.userCity}</li>
          <li><strong>Region:</strong> ${data.userRegion}</li>
          <li><strong>Zip:</strong> ${data.userZip}</li>
        </ul>
      `;
  }
});
