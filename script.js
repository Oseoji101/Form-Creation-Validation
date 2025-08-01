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
        let isValid = true;
        const messages = [];
        // username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }
        // email validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }
        // password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }
        // display feedback
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
        });
    }); 
</script>