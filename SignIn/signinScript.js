function onSubmit() {

    const emailElement = document.getElementById('email-input');
    const passwordElement = document.getElementById('password-input');
    
    let userEmail = EmailElement.value.trim().toLowerCase();
    let emailPattern = /^ [^\s@]+ @ [^\s@]+ \. [^\s@]+ $/;

    // /^ represents the start of a string
    // [^\s@]+ represents any n number of letters
    // @, \. represent characters that separate a sequence of characters.
    // $ represents the end of the string

    if (emailPattern.test(userEmail)) {
        alert("good.");
    } else {
        alert("invalid email, please re-enter.");
        userEmail.value = ""
        emailElement.value = ""
        emailElement.focus();
        return;
    }

    let password = passwordElement.value;

    if (password.length >= 8) {
        alert("good.")
    } else {
        alert("password cannot be less than 8 characters.")
        passwordElement.value = "";
        passwordElement.focus();
    }

    return;
}