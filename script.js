let time = 0;
let distractions = 0;
let timer = null;
let studying = false;

function startStudy() {
    if (studying) return;

    studying = true;
    document.getElementById("status").innerText = "Studying";

    timer = setInterval(() => {
        time++;
        document.getElementById("time").innerText = "Time: " + time + " sec";
    }, 1000);
}

function distracted() {
    if (!studying) return;

    distractions++;
    document.getElementById("count").innerText = "Distractions: " + distractions;
    document.getElementById("status").innerText = "Distracted";
}

function backToStudy() {
    if (!studying) return;

    document.getElementById("status").innerText = "Studying";
}

function endSession() {
    clearInterval(timer);
    studying = false;

    document.getElementById("status").innerText = "Session Ended";
}