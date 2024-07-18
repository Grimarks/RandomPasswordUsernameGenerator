function toggleUsernameInput() {
    const inputUsername = document.getElementById("inputUsername");
    const labelUsername = document.getElementById("labelInputUsername");
    inputUsername.style.display = document.getElementById("CheckUsername").checked ? "block" : "none";
    labelUsername.style.display = document.getElementById("CheckUsername").checked ? "block" : "none";
}

function Generate() {
    const includeUsername = document.getElementById("CheckUsername").checked;
    const inputUsername = document.getElementById("inputUsername").value;
    const includeUppercase = document.getElementById("CheckUpCase").checked;
    const includeLowercase = document.getElementById("CheckLowCase").checked;
    const includeNumber = document.getElementById("CheckNumber").checked;
    const includeSymbol = document.getElementById("Checksymbol").checked;
    const passLength = parseInt(document.getElementById("inputPassLength").value);

    const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Lowercase = "abcdefghijklmnopqrstuvwxyz";
    const StringNumber = "0123456789";
    const StringSymbol = "!@#$%^&*()-_=+[]{}:;<>?";

    let characters = "";
    if (includeUppercase) characters += Uppercase;
    if (includeLowercase) characters += Lowercase;
    if (includeNumber) characters += StringNumber;
    if (includeSymbol) characters += StringSymbol;

    let password = "";
    for (let i = 0; i < passLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    let username = "";
    if (includeUsername) {
        username = inputUsername;
        if (username.length < 15) {
            const remainingLength = 15 - username.length;
            const randomString = Array.from({ length: remainingLength }, () => {
                const randomChar = Math.floor(Math.random() * 3);
                if (randomChar === 0) {
                    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
                } else if (randomChar === 1) {
                    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
                } else {
                    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
                }
            }).join('');
            username += randomString.substring(0, remainingLength);
        } else {
            username = username.substring(0, 15);
        }
    }

    document.getElementById("UsernameResult").innerText = username;
    document.getElementById("PasswordResult").innerText = password;
}
