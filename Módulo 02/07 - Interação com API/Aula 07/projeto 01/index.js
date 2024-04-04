let powerButton = document.getElementById('powerButton');
let increaseTempButton = document.getElementById('increaseTempButton');
let decreaseTempButton = document.getElementById('decreaseTempButton');
let temperatureInput = document.getElementById('temperature');
let acImage = document.getElementById('acImage');

let remoteState = {};

// Carrega estado do controle remoto do JSON
fetch('remote.json')
    .then(response => response.json())
    .then(data => {
        remoteState = data;
        updateRemoteUI();
    });

powerButton.addEventListener('click', () => {
    remoteState.powerOn = !remoteState.powerOn;
    updateRemoteUI();
    updateJSON();
});

increaseTempButton.addEventListener('click', () => {
    if (remoteState.temperature < 30) {
        remoteState.temperature++;
        updateRemoteUI();
        updateJSON();
    }
});

decreaseTempButton.addEventListener('click', () => {
    if (remoteState.temperature > 16) {
        remoteState.temperature--;
        updateRemoteUI();
        updateJSON();
    }
});

function updateRemoteUI() {
    if (remoteState.powerOn) {
        acImage.src = 'images/ac_on.jpg';
    } else {
        acImage.src = 'images/ac_off.jpg';
    }
    temperatureInput.value = remoteState.temperature;
}

function updateJSON() {
    fetch('remote.json', {
        method: 'PUT',
        body: JSON.stringify(remoteState),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}