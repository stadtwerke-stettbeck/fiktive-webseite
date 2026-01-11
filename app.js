const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
const hidden_2Elements = document.querySelectorAll('.hidden_2');
const hidden_22Elements = document.querySelectorAll('.hidden_22');
const hidden_3Elements = document.querySelectorAll('.hidden_3');
hiddenElements.forEach((el) => observer.observe(el));
hidden_2Elements.forEach((el) => observer.observe(el));
hidden_22Elements.forEach((el) => observer.observe(el));
hidden_3Elements.forEach((el) => observer.observe(el));

document.getElementById("bereich-zum-kopieren").addEventListener("click", function() {
    var bereich = document.getElementById("bereich-zum-kopieren");
    var bereichText = bereich.innerText || bereich.textContent;

    // Erstellen eines unsichtbaren Textbereichs zum Kopieren
    var kopierBereich = document.createElement("textarea");
    kopierBereich.value = bereichText;
    document.body.appendChild(kopierBereich);

    // Kopieren des Textes aus dem unsichtbaren Textbereich
    kopierBereich.select();
    document.execCommand("copy");

    // Entfernen des unsichtbaren Textbereichs
    document.body.removeChild(kopierBereich);

    // Feedback an den Benutzer
    alert("Wurde erfolgreich in deine Zwischenablage kopiert!");
});
document.getElementById("bereich-zum-kopieren2").addEventListener("click", function() {
    var bereich = document.getElementById("bereich-zum-kopieren2");
    var bereichText = bereich.innerText || bereich.textContent;

    // Erstellen eines unsichtbaren Textbereichs zum Kopieren
    var kopierBereich = document.createElement("textarea");
    kopierBereich.value = bereichText;
    document.body.appendChild(kopierBereich);

    // Kopieren des Textes aus dem unsichtbaren Textbereich
    kopierBereich.select();
    document.execCommand("copy");

    // Entfernen des unsichtbaren Textbereichs
    document.body.removeChild(kopierBereich);

    // Feedback an den Benutzer
    alert("Wurde erfolgreich in deine Zwischenablage kopiert!");
});
document.getElementById("bereich-zum-kopieren3").addEventListener("click", function() {
    var bereich = document.getElementById("bereich-zum-kopieren3");
    var bereichText = bereich.innerText || bereich.textContent;

    // Erstellen eines unsichtbaren Textbereichs zum Kopieren
    var kopierBereich = document.createElement("textarea");
    kopierBereich.value = bereichText;
    document.body.appendChild(kopierBereich);

    // Kopieren des Textes aus dem unsichtbaren Textbereich
    kopierBereich.select();
    document.execCommand("copy");

    // Entfernen des unsichtbaren Textbereichs
    document.body.removeChild(kopierBereich);

    // Feedback an den Benutzer
    alert("Wurde erfolgreich in deine Zwischenablage kopiert!");
});
document.getElementById("bereich-zum-kopieren4").addEventListener("click", function() {
    var bereich = document.getElementById("bereich-zum-kopieren4");
    var bereichText = bereich.innerText || bereich.textContent;

    // Erstellen eines unsichtbaren Textbereichs zum Kopieren
    var kopierBereich = document.createElement("textarea");
    kopierBereich.value = bereichText;
    document.body.appendChild(kopierBereich);

    // Kopieren des Textes aus dem unsichtbaren Textbereich
    kopierBereich.select();
    document.execCommand("copy");

    // Entfernen des unsichtbaren Textbereichs
    document.body.removeChild(kopierBereich);

    // Feedback an den Benutzer
    alert("Wurde erfolgreich in deine Zwischenablage kopiert!");
});
document.getElementById("bereich-zum-kopieren5").addEventListener("click", function() {
    var bereich = document.getElementById("bereich-zum-kopieren5");
    var bereichText = bereich.innerText || bereich.textContent;

    // Erstellen eines unsichtbaren Textbereichs zum Kopieren
    var kopierBereich = document.createElement("textarea");
    kopierBereich.value = bereichText;
    document.body.appendChild(kopierBereich);

    // Kopieren des Textes aus dem unsichtbaren Textbereich
    kopierBereich.select();
    document.execCommand("copy");

    // Entfernen des unsichtbaren Textbereichs
    document.body.removeChild(kopierBereich);

    // Feedback an den Benutzer
    alert("Wurde erfolgreich in deine Zwischenablage kopiert!");
});
document.getElementById("bereich-zum-kopieren6").addEventListener("click", function() {
    var bereich = document.getElementById("bereich-zum-kopieren6");
    var bereichText = bereich.innerText || bereich.textContent;

    // Erstellen eines unsichtbaren Textbereichs zum Kopieren
    var kopierBereich = document.createElement("textarea");
    kopierBereich.value = bereichText;
    document.body.appendChild(kopierBereich);

    // Kopieren des Textes aus dem unsichtbaren Textbereich
    kopierBereich.select();
    document.execCommand("copy");

    // Entfernen des unsichtbaren Textbereichs
    document.body.removeChild(kopierBereich);

    // Feedback an den Benutzer
    alert("Wurde erfolgreich in deine Zwischenablage kopiert!");
});
document.getElementById("bereich-zum-kopieren7").addEventListener("click", function() {
    var bereich = document.getElementById("bereich-zum-kopieren7");
    var bereichText = bereich.innerText || bereich.textContent;

    // Erstellen eines unsichtbaren Textbereichs zum Kopieren
    var kopierBereich = document.createElement("textarea");
    kopierBereich.value = bereichText;
    document.body.appendChild(kopierBereich);

    // Kopieren des Textes aus dem unsichtbaren Textbereich
    kopierBereich.select();
    document.execCommand("copy");

    // Entfernen des unsichtbaren Textbereichs
    document.body.removeChild(kopierBereich);

    // Feedback an den Benutzer
    alert("Wurde erfolgreich in deine Zwischenablage kopiert!");
});
document.getElementById("bereich-zum-kopieren8").addEventListener("click", function() {
    var bereich = document.getElementById("bereich-zum-kopieren8");
    var bereichText = bereich.innerText || bereich.textContent;

    // Erstellen eines unsichtbaren Textbereichs zum Kopieren
    var kopierBereich = document.createElement("textarea");
    kopierBereich.value = bereichText;
    document.body.appendChild(kopierBereich);

    // Kopieren des Textes aus dem unsichtbaren Textbereich
    kopierBereich.select();
    document.execCommand("copy");

    // Entfernen des unsichtbaren Textbereichs
    document.body.removeChild(kopierBereich);

    // Feedback an den Benutzer
    alert("Wurde erfolgreich in deine Zwischenablage kopiert!");
});
document.getElementById("bereich-zum-kopieren9").addEventListener("click", function() {
    var bereich = document.getElementById("bereich-zum-kopieren9");
    var bereichText = bereich.innerText || bereich.textContent;

    // Erstellen eines unsichtbaren Textbereichs zum Kopieren
    var kopierBereich = document.createElement("textarea");
    kopierBereich.value = bereichText;
    document.body.appendChild(kopierBereich);

    // Kopieren des Textes aus dem unsichtbaren Textbereich
    kopierBereich.select();
    document.execCommand("copy");

    // Entfernen des unsichtbaren Textbereichs
    document.body.removeChild(kopierBereich);

    // Feedback an den Benutzer
    alert("Wurde erfolgreich in deine Zwischenablage kopiert!");
});
document.getElementById("bereich-zum-kopieren10").addEventListener("click", function() {
    var bereich = document.getElementById("bereich-zum-kopieren10");
    var bereichText = bereich.innerText || bereich.textContent;

    // Erstellen eines unsichtbaren Textbereichs zum Kopieren
    var kopierBereich = document.createElement("textarea");
    kopierBereich.value = bereichText;
    document.body.appendChild(kopierBereich);

    // Kopieren des Textes aus dem unsichtbaren Textbereich
    kopierBereich.select();
    document.execCommand("copy");

    // Entfernen des unsichtbaren Textbereichs
    document.body.removeChild(kopierBereich);

    // Feedback an den Benutzer
    alert("Wurde erfolgreich in deine Zwischenablage kopiert!");
});