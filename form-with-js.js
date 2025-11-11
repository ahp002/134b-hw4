const allowedChars1 = /^[A-Za-z]*$/;

function showError(input, message) {
    const errOut = document.getElementById(input.id + "-error");
    errOut.textContent = message;
    errOut.classList.remove("hidden");
    input.classList.add("flash");
    setTimeout(() => {
        errOut.classList.add("hidden");
        input.classList.remove("flash");
    }, 2000);
}

function enforceCharacterRules(event) {
    if (!allowedChars1.test(event.target.value)) {
        showError(event.target, "Invalid character entered.");
        event.target.value = event.target.value.replace(/[^A-Za-z\s]/g, "");
    }
}

nameInput.addEventListener("input", enforceCharacterRules);

nameInput.addEventListener("invalid", (e) => {
    showError(nameInput, "Please enter your name.");
})