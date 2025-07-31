<script src="script.js">
    document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

    //    retrieve and trim input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // initialise validation variables
        let isvalid = true;
        const mesages = [];
        // username validation
        if (username.length < 3) {
            isvalid = false;
            mesages.push("Username must be at least 3 characters long.");
        }
        // email validation
        if (!email.includes("@") || !email.includes(".")) {
            isvalid = false;
            mesages.push("Please enter a valid email address.");
        }
        // password validation
        if (password.length < 8) {
            isvalid = false;
            mesages.push("Password must be at least 8 characters long.");
        }
        // display feedback
        feedbackDiv.style.display = "block";
        if (isvalid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "28a745";
        } else {
            feedbackDiv.innerHTML = mesages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
</script>