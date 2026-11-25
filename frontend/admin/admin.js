const loginForm = document.querySelector("#admin-login");
const loginMessage = document.querySelector("#login-message");

if (loginForm && loginMessage) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        loginMessage.classList.remove("hidden");
        loginMessage.textContent =
            "Admin authentication is not configured yet. " +
            "No credentials have been accepted.";
    });
}
