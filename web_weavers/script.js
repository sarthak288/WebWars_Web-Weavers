function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}


function loginUser() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "user@example.com" && password === "password123") {
        alert("Login Successful!");
        closeModal("loginModal");
    } else {
        alert("Invalid email or password!");
    }
}

function signupUser() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    if (email && password) {
        alert("Sign-up Successful! Now login.");
        closeModal("signupModal");
    } else {
        alert("Please fill in all fields!");
    }
}


function generatePlaylist() {
    let mood = document.getElementById("mood").value;
    let spotifyFrame = document.getElementById("spotifyEmbed");

    let playlists = {
        happy: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0",
        sad: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1",
        energetic: "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP",
        calm: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3Ogo9pFvBkY"
    };

    spotifyFrame.src = playlists[mood];
}