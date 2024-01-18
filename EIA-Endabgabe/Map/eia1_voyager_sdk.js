//importierte Funktionen aus map.js um Koordinaten zu erhalten
import { updateFahrradPosition } from "./map.js";
import { checkCoordinatesForPopups } from "./map.js";

let dataStream = '';

function startConnection() {
    if (navigator.serial) {
        connectSerial();
    } else {
        alert('Web Serial API not supported.');
    }
};

async function connectSerial() {

    try {
        const port = await navigator.serial.requestPort();
        await port.open({ baudRate: 115200 });

        const decoder = new TextDecoderStream();

        port.readable.pipeTo(decoder.writable);

        const reader = decoder.readable.getReader();

        console.log("ESP ready!");
        connectBtn.name("&#10003; Connected");
        connectBtn.domElement.previousSibling.style.backgroundColor = "#19745a";
        handleLoaded();

        let initComplete = false;

        while (true) {
            const { value, done } = await reader.read();

            if (value) {
                if (value.substr(value.length - 1) == "]" && !initComplete) {
                    initComplete = true;
                } else if (initComplete) {
                    dataStream += value;

                    // data group complete?
                    if (dataStream.length > 8) {
                        let dataElement = dataStream.slice(0, 8);
                        dataStream = dataStream.slice(8);
                        // console.log(dataElement);
                        eventHandler(extractData(dataElement));
                    }
                }
            }
            if (done) {
                console.log('[readLoop] DONE', done);
                reader.releaseLock();
                break;
            }
        }

    } catch (error) {
        connectBtn.name("&#x26A0; Error with ESP");
        connectBtn.domElement.previousSibling.style.backgroundColor = "#842047";
        console.error(error);
    }
}

function extractData(data) {
    let obj = {
        id: parseInt(data.substr(2, 2)),
        intensity: parseInt(data.substr(5, 2)),
    }
    return obj;
}

function eventHandler(data) {
    // Parameter data erhält informationen über Koordinaten
    switch (data.id) {
        case 12:
            if (data.id == 12 && data.intensity < config.sensitivityThresholdT1) {
                console.log(data);
                handleTouch12();
                checkCoordinatesForPopups();//Koordinate um PopUp Fenster zu aktibieren wird überprüft
            }
            break;
        case 13:
            if (data.id == 13 && data.intensity < config.sensitivityThresholdT2) {
                console.log(data);
                handleTouch13();//handleTouch Funktion wird ausgeführt
                checkCoordinatesForPopups();//Koordinate um PopUp Fenster zu aktibieren wird überprüft
            }
            break;
        case 14:
            if (data.id == 14 && data.intensity < config.sensitivityThresholdT2) {
                console.log(data);
                handleTouch14();//handleTouch Funktion wird ausgeführt
                checkCoordinatesForPopups();//Koordinate um PopUp Fenster zu aktibieren wird überprüft
            }
            break;                      
        case 27:
            if (data.id == 27 && data.intensity < config.sensitivityThresholdT2) {    
                console.log(data);
                handleTouch27();//handleTouch Funktion wird ausgeführt
                checkCoordinatesForPopups();//Koordinate um PopUp Fenster zu aktibieren wird überprüft
            }
    }
}


//Fahrrad und Fahrrad Wrapper wird ausgewählt
let fahrrad = document.querySelector(".fahrrad");
let fahrradWrapper = document.querySelector(".fahrradWrapper");

let translateY = 0;//bewegung erst neutral
let translateX = 0;

function handleLoaded() {
}

//Funktion die bei HandleTouch 12 ausgeführt wird
function handleTouch12() {
    translateX -= 10; //der Fahrrad Wrapper bewegt sich -10 auf der X Achse
    fahrradWrapper.style.transform = "translateX(" + translateX + "px)";
    // Aktualisierung der Fahrradposition und überprüfe die Koordinaten für Popups
    updateFahrradPosition(-10, 0);
    checkCoordinatesForPopups();
}
//Funktion die bei HandleTouch 13 ausgeführt wird
function handleTouch13() {
    translateY -= 10;//der Fahrrad Wrapper bewegt sich -10 auf der Y Achse
    fahrrad.style.transform = "translateY(" + translateY + "px)";
    // Aktualisierung der Fahrradposition und überprüfe die Koordinaten für Popups
    updateFahrradPosition(0, -10);
    checkCoordinatesForPopups();
}
//Funktion die bei HandleTouch 14 ausgeführt wird
function handleTouch14() {
    translateY += 10;//der Fahrrad Wrapper bewegt sich 10 auf der Y Achse
    fahrrad.style.transform = "translateY(" + translateY + "px)";
    // Aktualisierung der Fahrradposition und überprüfe die Koordinaten für Popups
    updateFahrradPosition(0, 10);
    checkCoordinatesForPopups();
}
//Funktion die bei HandleTouch 27 ausgeführt wird
function handleTouch27() {
    translateX += 10;//der Fahrrad Wrapper bewegt sich 10 auf der X Achse
    fahrradWrapper.style.transform = "translateX(" + translateX + "px)";
        // Aktualisierung der Fahrradposition und überprüfe die Koordinaten für Popups
    updateFahrradPosition(10, 0);
    checkCoordinatesForPopups();
}

/**
 * Add Event Keyboard Suppport
 * 
 * Mapping:
 * 1 = 12
 * 2 = 13
 * 3 = 14
 * 4 = 27
 * 5 = 32
 * 6 = 33
 * 
 */

window.addEventListener("keypress", function (event) {
    switch (event.key) {
        case "1":
            handleTouch12();
            break;
        case "2":
            handleTouch13();
            break;
        case "3":
            handleTouch14();
            break;
        case "4":
            handleTouch27();
            break;
        case "5":
    }
})


let config = {
    sensitivityThreshold: 24,
    sensitivityThresholdT1: 24,
    sensitivityThresholdT2: 24,
    sensitivityThresholdT3: 24,
    sensitivityThresholdT4: 24,
    sensitivityThresholdT5: 24,
    sensitivityThresholdT6: 24,

    connect: function () {

    }
};


let gui = new dat.gui.GUI();

let guiMain = gui.addFolder("EIA1 Voyager SDK");
guiMain.open();
let guiGroupTouch = guiMain.addFolder("Touch Config");
guiGroupTouch.open();
guiGroupTouch.add(config, 'sensitivityThreshold').name("Sensitivity (All)").min(1).max(99).step(1).onChange(function () {
    console.log("okok")
    config.sensitivityThresholdT1 = config.sensitivityThreshold;
    config.sensitivityThresholdT2 = config.sensitivityThreshold;
    config.sensitivityThresholdT3 = config.sensitivityThreshold;
    config.sensitivityThresholdT4 = config.sensitivityThreshold;
    config.sensitivityThresholdT5 = config.sensitivityThreshold;
    config.sensitivityThresholdT6 = config.sensitivityThreshold;
})
guiGroupTouch.add(config, 'sensitivityThresholdT1').name("Touch (12)").min(1).max(99).step(1).listen();
guiGroupTouch.add(config, 'sensitivityThresholdT2').name("Touch (13)").min(1).max(99).step(1).listen();
guiGroupTouch.add(config, 'sensitivityThresholdT3').name("Touch (14)").min(1).max(99).step(1).listen();
guiGroupTouch.add(config, 'sensitivityThresholdT4').name("Touch (27)").min(1).max(99).step(1).listen();
guiGroupTouch.add(config, 'sensitivityThresholdT5').name("Touch (32)").min(1).max(99).step(1).listen();
guiGroupTouch.add(config, 'sensitivityThresholdT6').name("Touch (33)").min(1).max(99).step(1).listen();

gui.add(config, 'connect').name("&#8594 Connect to ESP").onChange(
    function () {
        startConnection();
    }
)

let connectBtn = gui.__controllers[0];
connectBtn.domElement.previousSibling.style.backgroundColor = "#842047";