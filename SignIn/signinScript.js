const signInButton = document.querySelector("#customer-signIn-button") || document.querySelector("#manager-signIn-button")
const registerButton = document.querySelector("#customer-register-button")
const firstNameInput = document.querySelector("#customer-firstName-input")
const lastNameInput = document.querySelector("#customer-lastName-input")
const emailInput = document.querySelector("#customer-email-input") || document.querySelector("#manager-email-input")
const passwordInput = document.querySelector("#customer-password-input") || document.querySelector("#manager-password-input")
const message = document.querySelector("#customer-signIn-message") || document.querySelector("#manager-signIn-message")

let isAdminPage = false
if (document.querySelector(".manager")) {
    isAdminPage = true
}
console.log(`Admin page is ${isAdminPage}`)

let registering = false

function register() {
    if (users.has(emailInput.value)) {
        message.innerHTML = "User already exists."
    } else if (emailInput.value.length == 0) {
        message.innerHTML = "Enter a username."
    } else if (passwordInput.value.length < 8) {
        message.innerHTML = "Password must be at least 8 characters long."
    } else {
        users.set(emailInput.value, new UserProfile(emailInput.value, firstNameInput.value, lastNameInput.value, passwordInput.value, false))
        console.log(Array.from(users.entries()))
        localStorage.setItem("userProfiles", JSON.stringify(Array.from(users.entries())))

        message.innerHTML = "Successfully created new user."
    }

}

function signIn() {
    if (!users.has(emailInput.value) || passwordInput.value != users.get(emailInput.value).getPassword() || users.get(emailInput.value).isAdmin() != isAdminPage) {
        message.innerHTML = "Username or password is incorrect."
    } else {
        currentUser = users.get(emailInput.value)
        localStorage.setItem("currentUser", JSON.stringify(users.get(emailInput.value)))
        message.innerHTML = "Login successful!"
        window.location.href = "../index.html"
    }
    console.log(users.get(emailInput.value).isAdmin())
}
console.log(users)
signInButton.addEventListener("click", () => {
    console.log("hi")
    if (registering) {
        registering = false
        firstNameInput.parentElement.hidden = true;
        lastNameInput.parentElement.hidden = true;
    }
    signIn()
})

registerButton.addEventListener("click", () => {
    if (registering) {
        register()
    } else {
        registering = true
        firstNameInput.parentElement.hidden = false
        lastNameInput.parentElement.hidden = false
    }
})