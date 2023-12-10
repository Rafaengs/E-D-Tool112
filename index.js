function decrypt() {
    var ciphertext = document.getElementById("ciphertext").value;
    var decryptKey = parseInt(document.getElementById("decryptKey").value);

    var decrypted_message = "";
    for (var i = 0; i < ciphertext.length; i++) {
        var char = ciphertext[i];
        if (char.match(/[a-zA-Z]/)) {
            if (char.match(/[a-z]/)) {
                decrypted_char = String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) - decryptKey + 26) % 26 + 'a'.charCodeAt(0));
            } else {
                decrypted_char = String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) - decryptKey + 26) % 26 + 'A'.charCodeAt(0));
            }
            decrypted_message += decrypted_char;
        } else {
            decrypted_message += char;
        }
    }

    var decryptResultElement = document.getElementById("decryptResult");
    decryptResultElement.textContent = "Decrypted message: " + decrypted_message;
    decryptResultElement.classList.add("fade-in");
    decryptResultElement.style.display = "block";

    var encryptResultElement = document.getElementById("encryptResult");
    encryptResultElement.style.display = "none"; 
}

function encrypt() {
    var plaintext = document.getElementById("plaintext").value;
    var encryptKey = parseInt(document.getElementById("encryptKey").value);

    var encrypted_message = "";
    for (var i = 0; i < plaintext.length; i++) {
        var char = plaintext[i];
        if (char.match(/[a-zA-Z]/)) {
            if (char.match(/[a-z]/)) {
                encrypted_char = String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) + encryptKey) % 26 + 'a'.charCodeAt(0));
            } else {
                encrypted_char = String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) + encryptKey) % 26 + 'A'.charCodeAt(0));
            }
            encrypted_message += encrypted_char;
        } else {
            encrypted_message += char;
        }
    }

    var encryptResultElement = document.getElementById("encryptResult");
    encryptResultElement.textContent = "Encrypted message: " + encrypted_message;
    encryptResultElement.classList.add("fade-in");
    encryptResultElement.style.display = "block";

    var decryptResultElement = document.getElementById("decryptResult");
    decryptResultElement.style.display = "none";
}