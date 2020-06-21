let delayInSeconds = 0.2;

function playRandomColors() {
    window.setTimeout(function() {
        let rValue = Math.floor(Math.random() * 255);
        let gValue = Math.floor(Math.random() * 255);
        let bValue = Math.floor(Math.random() * 255); 
        let newColor = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";
        document.body.style.backgroundColor = newColor
        playRandomColors();
    }, delayInSeconds * 1000);
}