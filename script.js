const likeCountElement = document.getElementById("likeCount");
const likeButton = document.getElementById("likeButton");

// Debugging: Ensure elements are found
console.log("✅ script.js loaded successfully!");
console.log("🔍 Checking HTML elements:", likeCountElement, likeButton);

function getLikes() {
    fetch("http://localhost:5000/api/likes")
        .then(response => response.json())
        .then(data => {
            console.log("📥 Fetched Likes:", data); // Debug log
            likeCountElement.innerText = data.count;
        })
        .catch(error => console.error("❌ Error fetching likes:", error));
}

// Handle like button click
likeButton.addEventListener("click", () => {
    console.log("👍 Like button clicked! Sending request...");
    fetch("http://localhost:5000/api/like", { method: "POST" })
        .then(response => response.json())
        .then(data => {
            console.log("📤 Updated Likes:", data); // Debug log
            likeCountElement.innerText = data.count;
        })
        .catch(error => console.error("❌ Error updating likes:", error));
});

// Get likes on page load
getLikes();
