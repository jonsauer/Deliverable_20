var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

 	document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
 });

 var video = document.querySelector(".video");
 video.autoplay = false;
 video.loop = false;
 
 document.querySelector("#play").addEventListener("click", function() {
	 console.log("Play Video");
	 video.play();
	 document.querySelector("#volume").textContent = video.volume * 100 + "%";
 });

 var video = document.getElementById("player1");
  var pauseButton = document.getElementById("pause");

  // Add a click event listener to the pause button
  pauseButton.addEventListener("click", function() {
    if (video.paused) {
      // If the video is already paused, do nothing
      return;
    } else {
      // Pause the video if it's currently playing
      video.pause();
    }
  });
  var video = document.getElementById("player1");
  var slowButton = document.getElementById("slower");
  var fastButton = document.getElementById("faster");
  var skipButton = document.getElementById("skip");

  // Add click event listeners for the Slow Down button
  slowButton.addEventListener("click", function() {
    video.playbackRate -= 0.10; // Decrease playback rate by 0.25
  });

  // Add click event listeners for the Speed Up button
  fastButton.addEventListener("click", function() {
    video.playbackRate += 0.10; // Increase playback rate by 0.25
  });

  // Add click event listeners for the Skip Ahead button
  skipButton.addEventListener("click", function() {
    video.currentTime += 10; // Skip ahead 10 seconds (adjust the value as needed)
  });
  var video = document.getElementById("player1");
  var volumeSlider = document.getElementById("slider");
  var volumeDisplay = document.getElementById("volume");

  // Add input event listener to the volume slider
  volumeSlider.addEventListener("input", function() {
    var volume = parseFloat(volumeSlider.value) / 100; // Convert the slider value to a volume level between 0 and 1
    video.volume = volume; // Set the video's volume to the adjusted level
    volumeDisplay.textContent = (volume * 100).toFixed(0) + "%"; // Display the volume percentage
  });
  // Get references to the video element and the mute button
  var video = document.getElementById("player1");
  var muteButton = document.getElementById("mute");

  // Add a click event listener to the mute button
  muteButton.addEventListener("click", function() {
    if (video.muted) {
      // If the video is already muted, unmute it
      video.muted = false;
      muteButton.textContent = "Mute";
    } else {
      // If the video is not muted, mute it
      video.muted = true;
      muteButton.textContent = "Unmute";
    }
  });
// Get references to the video element and the Old School and Original buttons
var video = document.getElementById("player1");
var oldSchoolButton = document.getElementById("vintage");
var originalButton = document.getElementById("orig");

// Add click event listener for the Old School button
oldSchoolButton.addEventListener("click", function() {
  video.playbackRate = 0.5; // Set playback rate for Old School
});

// Add click event listener for the Original button
originalButton.addEventListener("click", function() {
  video.playbackRate = 1.0; // Set playback rate for Original
});
