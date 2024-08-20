// eyeIcon 
document.addEventListener("DOMContentLoaded", () => {
    const formContainer = document.querySelector(".form-container");
    const pwShowHide = document.querySelectorAll(".eye-icon");
    const signupLink = document.querySelector(".signup-link");
    const loginLink = document.querySelector(".login-link");
    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password")
            pwFields.forEach(password => {
                if (password.type === "password") {
                    password.type = "text";
                    eyeIcon.classList.replace("bxs-hide", "bxs-show");
                } else {
                    password.type = "password";
                    eyeIcon.classList.replace("bxs-show", "bxs-hide");
                }
            });
        });
    });
    // Link Login and Signup Form
    signupLink.addEventListener("click", e => {
        e.preventDefault();
        formContainer.classList.add("show-signup");
    });
    loginLink.addEventListener("click", e => {
        e.preventDefault();
        formContainer.classList.remove("show-signup");
    });
});
// Form Validation
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".login-form form");
    const signupForm = document.querySelector(".signup-form form");
    loginForm.addEventListener("submit", (e) => {
        const email = loginForm.querySelector(".email").value.trim();
        const password = loginForm.querySelector(".password").value.trim();
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            e.preventDefault(); 
        }
        if (!validatePassword(password)) {
            alert("Password must be at least 8 characters long.");
            e.preventDefault(); 
        }
    });
    signupForm.addEventListener("submit", (e) => {
        const email = signupForm.querySelector(".email").value.trim();
        const password = signupForm.querySelector(".password").value.trim();
        const confirmPassword = signupForm.querySelector("input[placeholder='Confirm Password']").value.trim();
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            e.preventDefault(); 
        }
        if (!validatePassword(password)) {
            alert("Password must be at least 8 characters long.");
            e.preventDefault(); 
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            e.preventDefault(); 
        }
    });
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    function validatePassword(password) {
        return password.length >= 8;
    }
});