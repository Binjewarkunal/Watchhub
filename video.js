// Initialize Video.js
var player = videojs('movie-player');

// Function to play the movie in Video.js
function playMovie(movieSrc, languageSelectId) {
    const language = document.getElementById(languageSelectId).value;
    const modal = document.getElementById("movie-modal");

    player.src({
        src: movieSrc, // The video file source
        type: 'video/mp4'
    });

    player.load();

    modal.style.display = "block";
    player.play();

    // Select audio track based on language
    player.audioTracks().on('change', function() {
        const audioTracks = player.audioTracks();
        for (let i = 0; i < audioTracks.length; i++) {
            if ((language === 'Hindi' && audioTracks[i].label === 'Hindi') ||
                (language === 'English' && audioTracks[i].label === 'English')) {
                audioTracks[i].enabled = true;
            } else {
                audioTracks[i].enabled = false;
            }
        }
    });
}
