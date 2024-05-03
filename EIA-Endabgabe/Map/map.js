//Elemente für icons werden selektiert
const dom = document.getElementById("dom-icon");
const doener = document.getElementById("doener-icon");
const rheintreppen = document.getElementById("skyeline-icon")
const schildergasse = document.getElementById("shopping-icon")
const schokoladenMuseum = document.getElementById("schoko-icon")
const ostasiatischesMusem = document.getElementById("drachen-icon")
//Link zu Close Button und Pop Up window aus html wird selektiert
const popupWindow = document.querySelector(".popup-window");
const closeButton = document.getElementById("close-button");

//Arrays für PopUp-Window Text Inhalte
let WindowsArray = [
    "<h3>Kölner Dom</h3> <br>Cologne Cathedral is the landmark of the city. It was built from 1248 to 1880 and is one of the largest Gothic cathedrals. According to the legend, it contains the bones of the three holy kings. As soon as you arrive at Cologne Central Station, you can see the Grey Monster.",
    "<h3>Kebab Land</h3> <br>Kebab Land is the secret highlight of Cologne. Many people in Cologne would call it the best snack in the world, so you can never eat there without first lining up in a long queue full of hungry visitors. Here you get the best kebab plate, but also the vegetarian offers make your mouth watering.",
    "<h3>Rhein Treppen</h3> <br>The RheinTreppen are a perfect place on the Rheinboulevard to contemplate the beautiful skyline of Cologne. They are located on the right side of the Rhine, giving you a perfect view of the cathedral. Many people make themselves comfortable here on the stairs at sunset with a beer and a snack and let the evening end romantically.",
    "<h3>Schildergasse</h3> Schildergasse is Cologne's shopping street. Here you will find everything your heart desires. There is always a busy hustle and bustle and just before Christmas you hardly make any headway here.  Street musicians and cafés decorate the streets between the modern shops. If you want something higher quality, you'll find your treasures one road further up the Hohe Straße.",
    "<h3>Schokoladen Museum</h3> <br> In the Chocolate Museum you can find out all about chocolate. We all love chocolate but how is it made? What's its story? Where's it from? In addition to chocolate information, you will also get delicious tastings in this museum and can try yourself as a chocolatier.",
    "<h3>Ost Asiatisches Museum</h3> In the Museum of East Asian Art you can see all kinds of treasures from East Asia. You will learn all about the history of different East Asian countries and see breathtaking art objects in the monthly changing exhibitions. If you are hungry after your visit, you will find your happiness in the built-in café."
];

//PopUp Link wird Funktion zugeordnet, die die entsprechende Popup-Funktion aufrufen
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

 //Pop Up Window wird geschlossen bei close Button click
closeButton.addEventListener("click",function (event) {
        var currentPopup = event.currentTarget.closest(".popup-window");
        currentPopup.style.display = "none";
        }
);

// Funktionen zum Öffnen des Popup-Fensters mit DOM-Manipulationen:
function onClickOpenPopupDOM(event) {
    //für verwendung von clicks auf die PopUps, falls website, ohne ESP genutzt werden soll(container 1 + children muss entfernt werden)
    event.preventDefault();
    openPopupDOM();
    //Reagiert auf Event Click und läd dann restliche zugehörige Funktion
}
function openPopupDOM() {
    //Pop Up Window Dom wird durch sichtbar
    popupWindow.style.display = "block";
    //Der Vorherige Inhalt im PopUp Fenster wird entfernt
    clearPopupClasses();
    //Klasse für individuelle gestaltung der PopUp Windows
    popupWindow.classList.add("dom");
    // Es wird die Funktion PopUPWindowInhalt aufgerufen
    // Inhalt für die Funktion durch zuordnung des Arrays
    PopUpWindowInhalt(WindowsArray[0], popupWindow);
    
}
 
function onClickOpenPopupDOENER(event) {
    //für verwendung von clicks auf die PopUps, falls website, ohne ESP genutzt werden soll(container 1 + children muss entfernt werden)
    event.preventDefault();
    openPopupDOENER();
    //Reagiert auf Event Click und läd dann restliche zugehörige Funktion
}
function openPopupDOENER() {
    // Pop Up Window Doener wird sichtbar
    popupWindow.style.display = "block";
    //Der Vorherige Inhalt im PopUp Fenster wird entfernt mit der Funktion clearPopupClasses
    clearPopupClasses();
    //Klasse für individuelle gestaltung der PopUp Windows
    popupWindow.classList.add("doener");
    // Es wird die Funktion PopUPWindowInhalt aufgerufen
    // Inhalt für die Funktion durch zuordnung des Arrays
    PopUpWindowInhalt(WindowsArray[1], popupWindow);

}
   
function onClickOpenPopupRHEINTREPPEN(event) {
    //für verwendung von clicks auf die PopUps, falls website, ohne ESP genutzt werden soll(container 1 + children muss entfernt werden)
    event.preventDefault();
    openPopupRHEINTREPPEN();
    //Reagiert auf Event Click und läd dann restliche zugehörige Funktion
}

function openPopupRHEINTREPPEN() {
    // Pop Up Window Rheintreppen wird sichtbar
    popupWindow.style.display = "block";
    //Der Vorherige Inhalt im PopUp Fenster wird entfernt
    clearPopupClasses();
    popupWindow.classList.add("rheintreppen");
    // Es wird die Funktion PopUPWindowInhalt aufgerufen
    // Inhalt für die Funktion durch zuordnung des Arrays
    PopUpWindowInhalt(WindowsArray[2], popupWindow);
}
   
function onClickOpenPopupSCHILDERGASSE(event) {
    //für verwendung von clicks auf die PopUps, falls website, ohne ESP genutzt werden soll(container 1 + children muss entfernt werden)
    event.preventDefault();
    openPopupSCHILDERGASSE();
    //Reagiert auf Event Click und läd dann restliche zugehörige Funktion
}

function openPopupSCHILDERGASSE() {
    // Pop Up Window Schildergasse wird dsichtbar
    popupWindow.style.display = "block";
    //Der Vorherige Inhalt im PopUp Fenster wird entfernt    
    clearPopupClasses();
    popupWindow.classList.add("schildergasse");
    // Es wird die Funktion PopUPWindowInhalt aufgerufen
    // Inhalt für die Funktion durch zuordnung des Arrays
    PopUpWindowInhalt(WindowsArray[3], popupWindow);

}

function onClickOpenPopupSCHOKOLADENMUSEUM(event) {
    //für verwendung von clicks auf die PopUps, falls website, ohne ESP genutzt werden soll(container 1 + children muss entfernt werden)
    event.preventDefault();
    openPopupSCHOKOLADENMUSEUM();
    //Reagiert auf Event Click und läd dann restliche zugehörige Funktion
}

function openPopupSCHOKOLADENMUSEUM() {
    // Pop Up Window Schokoladenmuseum wird sichtbar
    popupWindow.style.display = "block";
    //Der Vorherige Inhalt im PopUp Fenster wird entfernt    
    clearPopupClasses();
    popupWindow.classList.add("schokoladenmuseum");
    // Es wird die Funktion PopUPWindowInhalt aufgerufen
    // Inhalt für die Funktion durch zuordnung des Arrays
    PopUpWindowInhalt(WindowsArray[4], popupWindow);

}

function onClickOpenPopupOSTASIATISCHESMUSEUM(event) {
    //für verwendung von clicks auf die PopUps, falls website, ohne ESP genutzt werden soll(container 1 + children muss entfernt werden)
    event.preventDefault();
    openPopupOSTASIATISCHESMUSEUM();
    //Reagiert auf Event Click und läd dann restliche zugehörige Funktion
}

function openPopupOSTASIATISCHESMUSEUM() {
    // Pop Up Window Museum für Ostasiatische Kunst wird dsichtbar
    popupWindow.style.display = "block";
    //Der Vorherige Inhalt im PopUp Fenster wird entfernt    
    clearPopupClasses();
    popupWindow.classList.add("ostasiatischesmuseum");
    // Es wird die Funktion PopUPWindowInhalt aufgerufen
    // Inhalt für die Funktion durch zuordnung des Arrays
    PopUpWindowInhalt(WindowsArray[5], popupWindow);
}

// Funktion um Inhalt in Window Einzusetzen
function PopUpWindowInhalt(textContent, obj) {
    //Hat PopUpWIndow mehr als ein Child Element?
    if (obj.childElementCount > 1)
        obj.lastElementChild.remove();// Inhalt wird aus Window entfernt, wenn es mehr als ein Kind Element gibt
    //Eine Konstante wird genutzt um einen neuen Paragraph zu erstellen
    const content = document.createElement("p");
    //Der Paragraph erhält seinen Inhalt
    content.innerHTML = textContent;
    //Paragraph wird ins Popup-Fenster eingefügt
    obj.appendChild(content);
}  

//Funktion um alle zuvor hinzugefügten Klassen zu löschen
function clearPopupClasses() {
    popupWindow.classList = "popup-window";
}   

//Funktion umd PopUp zu schließen
function closePopup() {
    popupWindow.style.display = "none";
}

//-----------------------------------------------------------------------ESP Positions Überprüfung und Koordinaten der Icons
//

var element = document.getElementById("dom-icon"); // Selektiert Elemet von dem die Koordinate gesucht wird
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

// Funktionen zur Überprüfung der Fahrradposition und Öffnen der Popup-Fenster bei bestimmten Koordinaten
// Die Funktion wird and das ESP JS exportiert
export function updateFahrradPosition(x, y) {
    //die Position x wird durch mit der neuen Position x addiert wodurch man die aktuelle Position des Fahrrads erhält
    fahrradPosition.x += x;
    //wie bei x
    fahrradPosition.y += y;
}

// Die Funktion wird and das ESP JS exportiert
export function checkCoordinatesForPopups() {
    // Überprüft und Öffnet das Popup , wenn das Fahrrad eine bestimmte Position erreicht
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
    //Bedigungen für das öffnen der jehweiligen PopUp Fenster
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
    } else {
    // Keine der Bedingungen erfüllt, also bleibt Popup geschlossen
        closePopup();
    }

}
