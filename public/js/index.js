let videoInput = document.getElementById("video-input");
let videoTrack;
let backgroundSound;
let userInteractedWithPage = confirm("Click the OK button below to allow this website to play sounds");


let checkIfCanPlaySound = () => {
    setTimeout(() => {
        if (userInteractedWithPage) {
            playBackgroundSound();
        } else {
            checkIfCanPlaySound();
        }
    }, 1000);
}

let playBackgroundSound = () => {
    backgroundSound = new Audio("../sounds/creepy_ambient_sound.mp3");
    backgroundSound.loop = true;
    backgroundSound.play();
}

const showWebcamFeed = async () => {
    await Twilio.Video.createLocalVideoTrack({
        width: 1280,
        height: 720,
        frameRate: 30,
    }).then((track) => {
        track.attach(videoInput);
        videoTrack = track;
        setProcessor(mirrorProcessor);
        // setProcessor(glitchProcessor)
        // setProcessor(scareProcessor)
    })
}


const setProcessor = (processor) => {
    if (videoTrack.processor) {
        videoTrack.removeProcessor(videoTrack.processor);
    }
    if (processor) {
        videoTrack.addProcessor(processor);
    }
};



checkIfCanPlaySound();
showWebcamFeed();


