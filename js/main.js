window.onload = function() {

  // Video
  var video = document.getElementById("main-video");
  var videoContainer = document.getElementById("video-container");

  // Buttons
  var playButton = document.getElementById("play-pause");
  var muteToggle = document.getElementById("mute-toggle");
  var fullScreenButton = document.getElementById("full-screen");

  // video-time
  var videoTime = document.getElementById("video-time");
  var formattedCurrentTime = formatTime(video.currentTime);
  var formattedDuration = formatTime(video.duration);

  // Set initial videoTime
  videoTime.innerHTML = formattedCurrentTime + " / " + formattedDuration;

  // icons
  var playIcon = "<img src=icons/play-icon.png alt=play button icon/>";
  var pauseIcon = "<img src=icons/pause-icon.png alt=pause button icon/>";
  var volumeOnIcon = "<img src=icons/volume-on-icon.png alt=volume on icon/>";
  var volumeOffIcon = "<img src=icons/volume-off-icon.png alt=volume off icon/>";

  // Bars
  var progressBar = document.getElementById("progress-bar");
  var volumeBar = document.getElementById("volume-bar");
  var prgress = document.getElementById("progress");

  // Video Controls
  var videoControls = document.getElementById("video-controls");
  var controlBar = document.getElementById("control-bar");

  // Transcript
  var transcript = document.getElementById("transcript");

  // Format videoTime
  function formatTime(seconds) {
    minutes = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
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

  // Event listener for mouseover on videoContainer
  videoContainer.addEventListener("mouseover", function() {
    controlBar.style.height = "50px";
    videoControls.style.display = "block";
  });

  // Event listener for mouseout on videoContainer
  videoContainer.addEventListener("mouseout", function() {
    controlBar.style.height = "15px";
    videoControls.style.display = "none";
  });

  // Event listener for the progressBar bar
  progressBar.addEventListener("click", function(e) {
    var newWidth = e.offsetX;
    // Update progress width
    progress.style.width = newWidth + "px";
    // Calculate the new time
    var time = video.duration * (newWidth / progressBar.offsetWidth);
    // Update the video time
    video.currentTime = time;
  });

  // Update the progressBar and videoTime as the video plays
  video.addEventListener("timeupdate", function() {
    // Get current video time
    var time = video.currentTime;
    // Calculate the progress value
    var value = (100 / video.duration) * time;
    // Update the progress value
    progress.style.width = value + "%";
    // Update videoTime value
    formattedCurrentTime = formatTime(time);
    videoTime.innerHTML = formattedCurrentTime + " / " + formattedDuration;

    // Update transcript text color
    var transcriptSection = transcript.children;


      console.log(transcriptSection.length);

    if (time >= 0.240 && time < 4.130){
      transcriptSection[0].style.color = "#ff9900";
    } else {
      transcriptSection[0].style.color = "black";
    }

    if (time >= 4.130 && time < 7.535){
      transcriptSection[1].style.color = "#ff9900";
    } else {
      transcriptSection[1].style.color = "black";
    }

    if (time >= 7.535 && time < 11.270){
      transcriptSection[2].style.color = "#ff9900";
    } else {
      transcriptSection[2].style.color = "black";
    }

    if (time >= 11.270 && time < 13.960){
      transcriptSection[3].style.color = "#ff9900";
    } else {
      transcriptSection[3].style.color = "black";
    }

    if (time >= 13.960 && time < 17.940){
      transcriptSection[4].style.color = "#ff9900";
    } else {
      transcriptSection[4].style.color = "black";
    }

    if (time >= 17.940 && time < 22.370){
      transcriptSection[5].style.color = "#ff9900";
    } else {
      transcriptSection[5].style.color = "black";
    }

    if (time >= 22.370 && time < 26.880){
      transcriptSection[6].style.color = "#ff9900";
    } else {
      transcriptSection[6].style.color = "black";
    }

    if (time >= 26.880 && time < 30.920){
      transcriptSection[7].style.color = "#ff9900";
    } else {
      transcriptSection[7].style.color = "black";
    }

    if (time >= 32.100 && time < 34.730){
      transcriptSection[8].style.color = "#ff9900";
    } else {
      transcriptSection[8].style.color = "black";
    }

    if (time >= 34.730 && time < 39.430){
      transcriptSection[9].style.color = "#ff9900";
    } else {
      transcriptSection[9].style.color = "black";
    }

    if (time >= 39.430 && time < 41.190){
      transcriptSection[10].style.color = "#ff9900";
    } else {
      transcriptSection[10].style.color = "black";
    }

    if (time >= 42.350 && time < 46.300){
      transcriptSection[11].style.color = "#ff9900";
    } else {
      transcriptSection[11].style.color = "black";
    }

    if (time >= 46.300 && time < 49.270){
      transcriptSection[12].style.color = "#ff9900";
    } else {
      transcriptSection[12].style.color = "black";
    }

    if (time >= 49.270 && time < 53.760){
      transcriptSection[13].style.color = "#ff9900";
    } else {
      transcriptSection[13].style.color = "black";
    }

    if (time >= 53.760 && time < 57.780){
      transcriptSection[14].style.color = "#ff9900";
    } else {
      transcriptSection[14].style.color = "black";
    }

    if (time >= 57.780 && time < 60.150){
      transcriptSection[15].style.color = "#ff9900";
    } else {
      transcriptSection[15].style.color = "black";
    }
  });
}
