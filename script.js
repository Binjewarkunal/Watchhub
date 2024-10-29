// Predefined 4-digit PIN
const correctPin = "0709";

// Check if entered PIN is correct
function checkPin() {
    const digit1 = document.getElementById('digit1').value;
    const digit2 = document.getElementById('digit2').value;
    const digit3 = document.getElementById('digit3').value;
    const digit4 = document.getElementById('digit4').value;
    const enteredPin = digit1 + digit2 + digit3 + digit4;

    if (enteredPin === correctPin) {
        unlockScreen();
    } else {
        showError();
    }
}

// Unlock the lock screen
function unlockScreen() {
    const lockScreen = document.getElementById('lock-screen');
    lockScreen.style.opacity = '0';
    setTimeout(() => {
        lockScreen.style.display = 'none';
    }, 600);
}

// Show error message
function showError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Incorrect code. Try again.';
}

// Function to move focus to the next input box
function setupPinInputs() {
    const inputs = document.querySelectorAll('.pin-box');
    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace' && input.value === '' && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });
}
// Initialize the PIN input functionality
window.onload = setupPinInputs;
        // Function to play the movie in modal
        function playMovie(movieSrc) {
            var modal = document.getElementById("movie-modal");
            var videoPlayer = document.getElementById("movie-player");
            var movieSource = document.getElementById("movie-source");

            // Get file extension from movieSrc
            var fileExtension = movieSrc.split('.').pop();
            var mimeType = '';

            // Determine the correct MIME type based on file extension
            if (fileExtension === 'mp4') {
                mimeType = 'video/mp4';
            } else if (fileExtension === 'mkv') {
                mimeType = 'video/x-matroska';
            } else {
                alert('Unsupported file type');
                return;
            }

            // Set the source and MIME type dynamically
            movieSource.src = movieSrc;
            movieSource.type = mimeType;

            videoPlayer.load();  // Reload the video with the new source
            modal.style.display = "block";  // Show modal
            videoPlayer.play();  // Auto-play the movie
        }

        // Function to close the modal
        function closeModal() {
            var modal = document.getElementById("movie-modal");
            var videoPlayer = document.getElementById("movie-player");

            videoPlayer.pause();  // Pause video when closing modal
            modal.style.display = "none";  // Hide modal
        }

        // Close modal if clicked outside the content
        window.onclick = function(event) {
            var modal = document.getElementById("movie-modal");
            if (event.target === modal) {
                closeModal();
            }
        }