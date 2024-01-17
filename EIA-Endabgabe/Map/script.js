const dom = document.getElementById("dom-icon");
const doener = document.getElementById("doener-icon");
const rheintreppen = document.getElementById("skyeline-icon")
const schildergasse = document.getElementById("shopping-icon")
const schokoladenMuseum = document.getElementById("schoko-icon")
const ostasiatischesMusem = document.getElementById("drachen-icon")
//link zu icon aus html definieren
const popupWindow = document.querySelector(".popup-window");
const closeButton = document.getElementById("close-button");
//Link zu Close Button und Pop Up window aus html wird definiert

let WindowsArray = [
    "<h1>Kölner Dom</h1> Cologne Cathedral is the landmark of the city. It was built from 1248 to 1880 and is one of the largest Gothic cathedrals. According to the legend, it contains the bones of the three holy kings. As soon as you arrive at Cologne Central Station, you can see the Grey Monster.",
    "<h1>Kebab Land</h1> Kebab Land is the secret highlight of Cologne. Many people in Cologne would call it the best snack in the world, so you can never eat there without first lining up in a long queue full of hungry visitors. Here you get the best kebab plate, but also the vegetarian offers make your mouth watering.",
    "<h1>Rhein Treppen</h1> Die RheinTreppen sind ein perfekter Ort am Rheinboulevard um die schöne Skyeline Kölns zu betrechten. Sie befinden sich auf der rechten Rheinseite, wodurch man einen perfekten Blick auf den Dom hat. Viele Leute machen es sich hier auf den Treppen beim Sonnenuntergang mit einem Bier und einem Snack gemütlich und lassen den Abend romantisch ausklingen.",
    "<h1>Schildergasse</h1> Schildergasse is Cologne's shopping street. Here you will find everything your heart desires. There is always a busy hustle and bustle and just before Christmas you hardly make any headway here.  Street musicians and cafés decorate the streets between the modern shops. If you want something higher quality, you'll find your treasures one road further up the Hohe Straße.",
    "Schokoladen Museum",
    "Museum für Ost-Asiatische Kunst"
];
//Arrays für PopUp-Window Inhalte

dom.addEventListener("click", function (event) {
    onClickOpenPopupDOM(event);
});
doener.addEventListener("click", function (event) {
    onClickOpenPopupDOENER(event);
});
rheintreppen.addEventListener("click", function (event) {
    onClickOpenPopupRHEINTREPPEN(event);
});
schildergasse.addEventListener("click", function (event) {
    onClickOpenPopupSCHILDERGASSE(event);
});
schokoladenMuseum.addEventListener("click", function (event) {
    onClickOpenPopupSCHOKOLADENMUSEUM(event);
});
ostasiatischesMusem.addEventListener("click", function (event) {
    onClickOpenPopupOSTASIATISCHESMUSEUM(event);
});
//PopUp Link wird Funktion zugeordnet

closeButton.addEventListener("click",function (event) {
        var currentPopup = event.currentTarget.closest(".popup-window");
        currentPopup.style.display = "none";
        //Pop Up Window wird geschlossen
        }
);

function onClickOpenPopupDOM(event) {
    //für verwendung von clicks auf die PopUps, falls website, ohne ESP genutzt werden soll(container 1 + children muss entfernt werden)
    event.preventDefault();
    openPopupDOM();
    //Reagiert auf Event Click und läd dann restliche zugehörige Funktion
}
function openPopupDOM() {
    // Pop Up Window Dom wird durch click aufgerufen
    popupWindow.style.display = "block";
    clearPopupClasses();
    popupWindow.classList.add("dom");
    //Klasse für individuelle gestaltung der PopUp Windows
    PopUpWindowInhalt(WindowsArray[0], popupWindow);
    // Inhalt für die Funktion
}
 
function onClickOpenPopupDOENER(event) {
    //für verwendung von clicks auf die PopUps, falls website, ohne ESP genutzt werden soll(container 1 + children muss entfernt werden)
    event.preventDefault();
    openPopupDOENER();
    //Reagiert auf Event Click und läd dann restliche zugehörige Funktion
}

function openPopupDOENER() {
    // Pop Up Window Doener wird durch click aufgerufen
    popupWindow.style.display = "block";
    clearPopupClasses();
    popupWindow.classList.add("doener");
    //Klasse für individuelle gestaltung der PopUp Windows
    PopUpWindowInhalt(WindowsArray[1], popupWindow);
    // Inhalt für die Funktion
}
   
function onClickOpenPopupRHEINTREPPEN(event) {
    //für verwendung von clicks auf die PopUps, falls website, ohne ESP genutzt werden soll(container 1 + children muss entfernt werden)
    event.preventDefault();
    openPopupRHEINTREPPEN();
    //Reagiert auf Event Click und läd dann restliche zugehörige Funktion
}

function openPopupRHEINTREPPEN() {
    // Pop Up Window Rheintreppen wird durch click aufgerufen
    popupWindow.style.display = "block";
    clearPopupClasses();
    popupWindow.classList.add("rheintreppen");
    PopUpWindowInhalt(WindowsArray[2], popupWindow);
    // Inhalt für die Funktion
}
   
function onClickOpenPopupSCHILDERGASSE(event) {
    //für verwendung von clicks auf die PopUps, falls website, ohne ESP genutzt werden soll(container 1 + children muss entfernt werden)
    event.preventDefault();
    openPopupSCHILDERGASSE();
    //Reagiert auf Event Click und läd dann restliche zugehörige Funktion
}

function openPopupSCHILDERGASSE() {
    // Pop Up Window Schildergasse wird durch click aufgerufen
    popupWindow.style.display = "block";
    clearPopupClasses();
    popupWindow.classList.add("schildergasse");
    PopUpWindowInhalt(WindowsArray[3], popupWindow);
    // Inhalt für die Funktion
}

function onClickOpenPopupSCHOKOLADENMUSEUM(event) {
    //für verwendung von clicks auf die PopUps, falls website, ohne ESP genutzt werden soll(container 1 + children muss entfernt werden)
    event.preventDefault();
    openPopupSCHOKOLADENMUSEUM();
    //Reagiert auf Event Click und läd dann restliche zugehörige Funktion
}

function openPopupSCHOKOLADENMUSEUM() {
    // Pop Up Window Schokoladenmuseum wird durch click aufgerufen
    popupWindow.style.display = "block";
    clearPopupClasses();
    popupWindow.classList.add("schokoladenmuseum");
    PopUpWindowInhalt(WindowsArray[4], popupWindow);
    // Inhalt für die Funktion
}

function onClickOpenPopupOSTASIATISCHESMUSEUM(event) {
    //für verwendung von clicks auf die PopUps, falls website, ohne ESP genutzt werden soll(container 1 + children muss entfernt werden)
    event.preventDefault();
    openPopupOSTASIATISCHESMUSEUM();
    //Reagiert auf Event Click und läd dann restliche zugehörige Funktion
}

function openPopupOSTASIATISCHESMUSEUM() {
    // Pop Up Window Museum für Ostasiatische Kunst wird durch click aufgerufen
    popupWindow.style.display = "block";
    clearPopupClasses();
    popupWindow.classList.add("ostasiatischesmuseum");
    PopUpWindowInhalt(WindowsArray[5], popupWindow);
    // Inhalt für die Funktion
}

function closePopup() {
    popupWindow.style.display = "none";
}


function clearPopupClasses() {

    // Remove all previously added classes
    popupWindow.classList = "popup-window";
}    

function PopUpWindowInhalt(textContent, obj) {
    // Funktion um Inhalt in Window Einzusetzen, greift auf Inahlte der einzelnen  Funktionen zu
    if (obj.childElementCount > 1)
        obj.lastElementChild.remove();
    // Inhalt wird im Window angezeigt, wenn es mehr als ein Kind Element gibt
    const content = document.createElement("p");
    content.innerHTML = textContent;
    obj.appendChild(content);
}   

//-----------------------------------------------------------------------
//

var element = document.getElementById("dom-icon"); // Selektiert Elemet von dem Koordinate gesucht wird
var rect = element.getBoundingClientRect();

console.log("Dom-X relativ zum Dokument: " + (rect.left + window.scrollX));
//X-Koordinate relativ zum Dokument: 676.796875
console.log("Dom-Y relativ zum Dokument: " + (rect.top + window.scrollY));
//Y-Koordinate relativ zum Dokument: 308.9375

var element = document.getElementById("shopping-icon"); // Selektiert Elemet von dem Koordinate gesucht wird
var rect = element.getBoundingClientRect();

console.log("Shopping-X relativ zum Dokument: " + (rect.left + window.scrollX));
//X-Koordinate relativ zum Dokument: 518.3984375 
console.log("Shopping-Y relativ zum Dokument: " + (rect.top + window.scrollY));
//Y-Koordinate relativ zum Dokument: 325.1953125

var element = document.getElementById("drachen-icon"); // Selektiert Elemet von dem Koordinate gesucht wird
var rect = element.getBoundingClientRect();

console.log("Drache-X relativ zum Dokument: " + (rect.left + window.scrollX));
//X-Koordinate relativ zum Dokument: 201.59375
console.log("Drache-Y relativ zum Dokument: " + (rect.top + window.scrollY));
//Y-Koordinate relativ zum Dokument: 325.1953125

var element = document.getElementById("skyeline-icon"); // Selektiert Elemet von dem Koordinate gesucht wird
var rect = element.getBoundingClientRect();

console.log("Skyeline-X relativ zum Dokument: " + (rect.left + window.scrollX));
//X-Koordinate relativ zum Dokument: 777.59375
console.log("Skyeline-Y relativ zum Dokument: " + (rect.top + window.scrollY));
//Y-Koordinate relativ zum Dokument: 365.84375

var element = document.getElementById("schoko-icon"); // Selektiert Elemet von dem Koordinate gesucht wird
var rect = element.getBoundingClientRect();

console.log("Schok-X relativ zum Dokument: " + (rect.left + window.scrollX));
//X-Koordinate relativ zum Dokument: 705.59375
console.log("Schok-Y relativ zum Dokument: " + (rect.top + window.scrollY));
//Y-Koordinate relativ zum Dokument: 398.3671875

var element = document.getElementById("doener-icon"); // Selektiert Elemet von dem Koordinate gesucht wird
var rect = element.getBoundingClientRect();

console.log("Doener-X relativ zum Dokument: " + (rect.left + window.scrollX));
//X-Koordinate relativ zum Dokument: 57.59375
console.log("Doener-Y relativ zum Dokument: " + (rect.top + window.scrollY));
//Y-Koordinate relativ zum Dokument: 8.125

let fahrradPosition = { x: 0, y: 0 };
//Ursprungsposition des Fahrrads speichern


export function updateFahrradPosition(x, y) {
    // Aktualisierung der Position des Fahrrads basierend auf den ESP-Daten
    fahrradPosition.x += x;
    fahrradPosition.y += y;
}


export function checkCoordinatesForPopups() {
    // Öffnet das Popup , wenn das Fahrrad eine bestimmte Position erreicht
    const DomThresholdTopLeft = {x: 600, y: 260}; // Randkooardinate bei "Kölner Dom" links oben
    const DomThresholdBottomRight = {x:745, y:380}; // Randkooardinate bei "Kölner Dom" rechts unten
    const SchildergasseThresholdTopLeft = {x: 430, y: 270}; // Randkooardinate bei "Schildergasse" links oben
    const SchildergasseThresholdBottomRight = {x:580, y:400}; // Randkooardinate bei "Schildergasse" rechts unten
    const OstAsiatischesMuseumThresholdTopLeft = {x: 150, y: 250}; // Randkooardinate bei "Ostasiatisches Museum" links oben
    const OstAsiatischesMuseumThresholdBottomRight = {x:270, y:400}; // Randkooardinate bei "Ostasiatisches Museum" rechts unten
    const RheinTreppenThresholdTopLeft = {x: 740, y: 300}; // Randkooardinate bei "Rheintreppen" links oben
    const RheinTreppenThresholdBottomRight = {x:850, y:450}; // Randkooardinate bei "Rheintreppen" rechts unten
    const SchokoladenMuseumThresholdTopLeft = {x: 600, y: 370}; // Randkooardinate bei "Scokoladen Museum" links oben
    const SchokoladenmuseumThresholdBottomRight = {x:745, y:560}; // Randkooardinate bei "Scokoladen Museum" rechts unten
    const DoenerThresholdTopLeft = {x: 3, y: -5}; // Randkooardinate bei "Kölner Dom" links oben
    const DoenerThresholdBottomRight = {x:100, y:100}; // Randkooardinate bei "Kölner Dom" rechts unten

    console.log(fahrradPosition.x, fahrradPosition.y);

    if (fahrradPosition.x > DomThresholdTopLeft.x && fahrradPosition.y > DomThresholdTopLeft.y
        && fahrradPosition.x < DomThresholdBottomRight.x && fahrradPosition.y < DomThresholdBottomRight.y) {
        openPopupDOM();
    } else if (fahrradPosition.x > SchildergasseThresholdTopLeft.x && fahrradPosition.y > SchildergasseThresholdTopLeft.y
        && fahrradPosition.x < SchildergasseThresholdBottomRight.x && fahrradPosition.y < SchildergasseThresholdBottomRight.y) {
        openPopupSCHILDERGASSE();
    } else if (fahrradPosition.x > OstAsiatischesMuseumThresholdTopLeft.x && fahrradPosition.y > OstAsiatischesMuseumThresholdTopLeft.y
        && fahrradPosition.x < OstAsiatischesMuseumThresholdBottomRight.x && fahrradPosition.y < OstAsiatischesMuseumThresholdBottomRight.y) {
        openPopupOSTASIATISCHESMUSEUM();
    } else if (fahrradPosition.x > RheinTreppenThresholdTopLeft.x && fahrradPosition.y > RheinTreppenThresholdTopLeft.y
        && fahrradPosition.x < RheinTreppenThresholdBottomRight.x && fahrradPosition.y < RheinTreppenThresholdBottomRight.y) {
        openPopupRHEINTREPPEN();
    } else if (fahrradPosition.x > SchokoladenMuseumThresholdTopLeft.x && fahrradPosition.y > SchokoladenMuseumThresholdTopLeft.y
        && fahrradPosition.x < SchokoladenmuseumThresholdBottomRight.x && fahrradPosition.y < SchokoladenmuseumThresholdBottomRight.y) {
        openPopupSCHOKOLADENMUSEUM();
    } else if (fahrradPosition.x > DoenerThresholdTopLeft.x && fahrradPosition.y > DoenerThresholdTopLeft.y
        && fahrradPosition.x < DoenerThresholdBottomRight.x && fahrradPosition.y < DoenerThresholdBottomRight.y) {
        openPopupDOENER();
    //Bedigungen für das öffnen der jehweiligen PopUp Fenster)
    } else {
    // Keine der Bedingungen erfüllt, also Popup schließen
        closePopup();
    }

}
