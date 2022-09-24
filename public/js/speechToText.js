let count = 0

const speechToText = () => {
    let SpeechRecognition = webkitSpeechRecognition;
    let recognition = new SpeechRecognition();
    recognition.start();

    recognition.onstart = function () {
        console.log("Speech Recognition is starting");
    }

    recognition.onerror = function () {
        console.log("Speech recognition error");
        speechToText();
    }

    recognition.onspeechend = function () {
        console.log("Speech recognition is ending");
        speechToText();
    }

    recognition.onresult = function (event) {
        let current = event.resultIndex;
        let transcript = event.results[current][0].transcript.trim().toLowerCase();
        console.log(transcript);

        if (transcript === "bloody mary") {
            if (count < 2) {
                count += 1;
                let glitchSound = new Audio("../sounds/glitch_sound.mp3");
                setProcessor(glitchProcessor);
                glitchSound.play();

                setTimeout(() => {
                    glitchSound.pause();
                    setProcessor(mirrorProcessor);
                }, 3000);

            } else if (count === 2) {
                setTimeout(() => {
                    let screamSound = new Audio("../sounds/scream_sound.mp3");
                    setProcessor(scareProcessor)
                    screamSound.play();
                    backgroundSound.pause();
                }, 3000);
            }
        }
    }
}

speechToText()

