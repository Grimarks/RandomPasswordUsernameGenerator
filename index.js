function toggleUsernameInput() {
    const usernameGroup = document.getElementById("usernameGroup");
    usernameGroup.classList.toggle("hidden", !document.getElementById("includeUsername").checked);
}

function generateCredentials() {
    const includeUsername = document.getElementById("includeUsername").checked;
    const usernameInput = document.getElementById("usernameInput").value.trim();
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    const passwordLength = parseInt(document.getElementById("passwordLength").value, 10);

    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
        alert("Please select at least one option for the password!");
        return;
    }

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?";
    let charPool = "";

    if (includeUppercase) charPool += upper;
    if (includeLowercase) charPool += lower;
    if (includeNumbers) charPool += numbers;
    if (includeSymbols) charPool += symbols;

    let password = Array.from({ length: passwordLength }, () =>
        charPool[Math.floor(Math.random() * charPool.length)]
    ).join("");

    let username = "N/A";
    if (includeUsername) {
        username = usernameInput || `User${Math.floor(Math.random() * 1000)}`;
    }

    document.getElementById("usernameResult").textContent = username;
    document.getElementById("passwordResult").textContent = password;
}
