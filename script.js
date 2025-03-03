const likeCountElement = document.getElementById("likeCount");
const likeButton = document.getElementById("likeButton");

// Load likes from localStorage or default to 0
let likes = localStorage.getItem("likes") ? parseInt(localStorage.getItem("likes")) : 0;
likeCountElement.innerText = likes;

// Function to update likes
likeButton.addEventListener("click", () => {
    likes++;
    localStorage.setItem("likes", likes);
    likeCountElement.innerText = likes;
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const nameText = "Ludwig Cupero";
let index = 0;
function typeEffect() {
    if (index < nameText.length) {
        document.getElementById("typingEffect").innerText += nameText[index];
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();


