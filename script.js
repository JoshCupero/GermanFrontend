const likeCountElement = document.getElementById("likeCount");
const likeButton = document.getElementById("likeButton");

// Get likes from localStorage or set to 0
let likes = localStorage.getItem("likes") ? parseInt(localStorage.getItem("likes")) : 0;
likeCountElement.innerText = likes;

// Increment likes on button click
likeButton.addEventListener("click", () => {
    likes++;
    localStorage.setItem("likes", likes);
    likeCountElement.innerText = likes;
});

document.getElementById("qr-link").addEventListener("click", function() {
    alert("QR-Code wird bald hinzugefügt!");
});
