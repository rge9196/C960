
const text = "Wake up R@binee and Parchoooou...";
const text2 = "The matrix has you...";
const text3 = "Follow the white rabbit.          :p   "; // Replace with your actual text3 content
const typingSpeed = 150; // milliseconds
let i = 0;
let currentText = 1;

function typeWriter() {
    if (currentText === 1 && i < text.length) {
        document.getElementById("typewriter").getElementsByTagName("h1")[0].innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    } else if (currentText === 1 && i === text.length) {
        currentText = 2;
        i = 0; // Reset i for second text
        setTimeout(typeWriter, typingSpeed + 1500); // Add a delay before starting the second text
    } else if (currentText === 2 && i < text2.length) {
        if (i === 0) {
            document.getElementById("typewriter").getElementsByTagName("h1")[0].innerHTML = ""; // Clear the text
        }
        document.getElementById("typewriter").getElementsByTagName("h1")[0].innerHTML += text2.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    } else if (currentText === 2 && i === text2.length) {
        currentText = 3;
        i = 0; // Reset i for third text
        setTimeout(typeWriter, typingSpeed + 1500); // Add a delay before starting the third text
    } else if (currentText === 3 && i < text3.length) {
        if (i === 0) {
            document.getElementById("typewriter").getElementsByTagName("h1")[0].innerHTML = ""; // Clear the text
        }
        document.getElementById("typewriter").getElementsByTagName("h1")[0].innerHTML += text3.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    }
}

window.onload = typeWriter; // Start the effect when the window loads
