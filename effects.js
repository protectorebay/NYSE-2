// =====================================================
// Market Sessions Dashboard
// effects.js
// Handles alert sound and pulse helper only.
// =====================================================

// -----------------------------------------------------
// Sound
// -----------------------------------------------------

const alertSound = new Audio("alert.mp3");

// Optional volume (0.0 - 1.0)
alertSound.volume = 1.0;

// Prevent duplicate playback
let alertAlreadyPlayed = false;


// -----------------------------------------------------
// Play alert once
// -----------------------------------------------------

function playAlert(){

    if(alertAlreadyPlayed)
        return;

    alertAlreadyPlayed = true;

    try{

        alertSound.pause();
        alertSound.currentTime = 0;

    }catch(e){}

    alertSound.play().catch(()=>{});

}


// -----------------------------------------------------
// Allow next alert
// -----------------------------------------------------

function resetAlert(){

    alertAlreadyPlayed = false;

}


// -----------------------------------------------------
// CSS helper
// -----------------------------------------------------

function getPulseClass(enabled){

    return enabled ? " pulse" : "";

}


// -----------------------------------------------------
// Last minute helper
// -----------------------------------------------------

function isLastMinute(milliseconds){

    return milliseconds <= 60000;

}


// -----------------------------------------------------
// Called every update by engine
// -----------------------------------------------------

function updateAlert(milliseconds){

    if(isLastMinute(milliseconds))
        playAlert();
    else
        resetAlert();

}
