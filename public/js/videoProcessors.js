const mirrorProcessor = {
    processFrame: (inputFrame, outputFrame) => {
        const ctx = outputFrame.getContext("2d");
        ctx.scale(-1, 1);
        ctx.drawImage(inputFrame, 0, 0, -inputFrame.width, inputFrame.height);
    }
}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const glitchProcessor = {
    processFrame: (inputFrame, outputFrame) => {
        const ctx = outputFrame.getContext("2d");

        let verticalSlices = Math.round(inputFrame.height / 20);
        let maxHorizontalOffset = 20;

        ctx.scale(-1, 1);

        for (let i = 0; i < verticalSlices; i++) {
            let horizontalOffset = getRandom(
                -Math.abs(maxHorizontalOffset),
                maxHorizontalOffset
            );

            ctx.drawImage(
                inputFrame,
                0,
                i * verticalSlices,
                inputFrame.width,
                i * verticalSlices + verticalSlices,
                horizontalOffset,
                i * verticalSlices,
                -inputFrame.width,
                i * verticalSlices + verticalSlices
            );
        }

        ctx.font = "82px specialFont";
        const text = "Bloody Mary";
        const sz = ctx.measureText(text);
        ctx.fillStyle = "Red";
        ctx.fillText(
            "Bloody Mary",
            outputFrame.width / 5,
            outputFrame.height - 44
        );
    }
}

const scareProcessor = {
    processFrame: (inputFrame, outputFrame) => {
        const ctx = outputFrame.getContext("2d");
        let img = document.getElementById("scary-img");
        ctx.drawImage(img, 0, 0, inputFrame.width, inputFrame.height);
    }
}
