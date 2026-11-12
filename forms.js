const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        const message = document.getElementById("loginMessage");

        if (email === "" || password === "") {

            message.textContent = "Please fill in all fields.";
            message.style.color = "#b45309";

        } else if (password.length < 8) {

            message.textContent = "Password must be at least 8 characters.";
            message.style.color = "#b45309";

        } else {

            message.textContent =
                "Your details are valid! Login is not connected to a server yet.";

            message.style.color = "#264b70";
        }

    });

}


// Sign Up Form Validation

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("fullName").value.trim();

        const email = document.getElementById("signupEmail").value.trim();

        const password = document.getElementById("signupPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const message = document.getElementById("signupMessage");

        if (name === "" || email === "" ||
            password === "" || confirmPassword === "") {

            message.textContent = "Please fill in all fields.";
            message.style.color = "#b45309";

        } else if (password.length < 8) {

            message.textContent =
                "Password must be at least 8 characters.";

            message.style.color = "#b45309";

        } else if (password !== confirmPassword) {

            message.textContent = "Passwords do not match!";
            message.style.color = "#b45309";

        } else {

            message.textContent =
                "Your information is valid! Account creation is not connected to a server yet.";

            message.style.color = "#264b70";
        }

    });

}
