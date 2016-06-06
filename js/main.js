window.onload = function() {

  // Video
  var video = document.getElementById("main-video");

  // Buttons
  var playButton = document.getElementById("play-pause");
  var muteToggle = document.getElementById("mute-toggle");
  var fullScreenButton = document.getElementById("full-screen");

  // video-time
  var videoTime = document.getElementById("video-time");
  var formattedCurrentTime = formatTime(video.currentTime);
  var formattedDuration = formatTime(video.duration);

  // Set initial videoTime
  videoTime.innerHTML = formattedCurrentTime + "/" + formattedDuration;

  // icons
  var playIcon = "<img src=icons/play-icon.png alt=play button icon/>";
  var pauseIcon = "<img src=icons/pause-icon.png alt=pause button icon/>";
  var volumeOnIcon = "<img src=icons/volume-on-icon.png alt=volume on icon/>";
  var volumeOffIcon = "<img src=icons/volume-off-icon.png alt=volume off icon/>";

  // Sliders
  var progressBar = document.getElementById("progress-bar");
  var volumeBar = document.getElementById("volume-bar");

  // Format videoTime
  function formatTime(seconds) {
    minutes = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    console.log(minutes + ":" + seconds);
    return minutes + ":" + seconds;
  }

  // Event listener for the play/pause button
  playButton.addEventListener("click", function() {
    if (video.paused == true) {
      // Play the video
      video.play();
      // Update the button img to pauseIcon
      playButton.innerHTML = pauseIcon;
    } else {
      // Pause the video
      video.pause();
      // Update the button img to playIcon
      playButton.innerHTML = playIcon;
    }
  });

  // Event listener for the mute button
  muteToggle.addEventListener("click", function() {
    if (video.muted == false) {
      // Mute the video
      video.muted = true;
      // Update the button icon to volumeOffIcon
      muteToggle.innerHTML = volumeOffIcon;
      // Update the volumeBar
      volumeBar.value = 0;
    } else {
      // Unmute the video
      video.muted = false;
      // Update the button icon to volumeOnIcon
      muteToggle.innerHTML = volumeOnIcon;
      // Update the volumeBar
      volumeBar.value = 1;
    }
  });

  // Event listener for the full-screen button
  fullScreenButton.addEventListener("click", function() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Chrome and Safari
    }
  });

  // Event listener for the progressBar bar
  progressBar.addEventListener("change", function() {
    // Calculate the new time
    var time = video.duration * (progressBar.value / 100);
    // Update the video time
    video.currentTime = time;
  });

  // Update the progressBar and videoTime as the video plays
  video.addEventListener("timeupdate", function() {
    // Calculate the slider value
    var value = (100 / video.duration) * video.currentTime;
    // Update the slider value
    progressBar.value = value;
    // Updae videoTime value
    formattedCurrentTime = formatTime(video.currentTime);
    videoTime.innerHTML = formattedCurrentTime + "/" + formattedDuration;
  });

  // Event listener for the volume bar
  volumeBar.addEventListener("change", function() {
    // Update the video volume
    video.volume = volumeBar.value;
    // Change volume icon
    if(volumeBar.value == 0){
      // Update the button icon to volumeOffIcon
      muteToggle.innerHTML = volumeOffIcon;
    } else {
      // Update the button icon to volumeOnIcon
      muteToggle.innerHTML = volumeOnIcon;
    }
  });

}
