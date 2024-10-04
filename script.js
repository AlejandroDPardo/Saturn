// Global variable to store movement
let movement;

// Function to start moving the meme and disable/enable buttons
function startMeme() {
    // Disable start button and enable stop button
    document.getElementById('startBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;

    // Call the function that moves the meme every 100ms
    movement = setInterval(moveMeme, 100);
}

// Function to stop moving the meme and disable/enable buttons
function stopMeme() {
    // Disable stop button and enable start button
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;

    // Clear the interval to stop the meme movement
    clearInterval(movement);
}

// Function to randomly move the meme around the page
function moveMeme() {
    // Get the meme element
    const meme = document.getElementById('meme');

    // Get random positions within the window's width and height
    const randomX = Math.floor(Math.random() * (window.innerWidth - meme.width));
    const randomY = Math.floor(Math.random() * (window.innerHeight - meme.height));

    // Apply new positions to the meme element
    meme.style.left = randomX + 'px';
    meme.style.top = randomY + 'px';
}
