const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// prompt user to select mdia stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch(error) {
    // catch error here
    
  }
}

button.addEventListener('click', async () => {
  // Disable button
  button.disabled = true;
  // start Picture in picture
  await videoElement.requestPictureInPicture();
  // Reset button
  button.disabled = false;
});

// On load {
selectMediaStream();
