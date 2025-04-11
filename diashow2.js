let slideIndex1 = 1;
let slideIndex2 = 1;

showSlides(slideIndex1, "main_1");
showSlides(slideIndex2, "main_2");

function showSlides(index, containerId) {
  let slides = document.querySelectorAll(`.${containerId} .slide`);
  let dots = document.querySelectorAll(`.${containerId} .dot`);

  // Überprüfe, ob die slideIndex-Nummer im gültigen Bereich liegt
  if (index < 1) {
    index = slides.length;
  } else if (index > slides.length) {
    index = 1;
  }

  // Verstecke alle Slides und setze die Punkte zurück
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  // Zeige den aktuellen Slide und setze den zugehörigen Punkt als aktiv
  slides[index - 1].style.display = "block";
  dots[index - 1].classList.add("active");

  // Setze den slideIndex für die nächste Anzeige
  if (containerId === "main_1") {
    slideIndex1 = index;
  } else if (containerId === "main_2") {
    slideIndex2 = index;
  }
}

function plusSlides(n, containerId) {
  if (containerId === "main_1") {
    showSlides(slideIndex1 += n, containerId);
  } else if (containerId === "main_2") {
    showSlides(slideIndex2 += n, containerId);
  }
}

function currentSlide(index, containerId) {
  if (containerId === "main_1") {
    showSlides(slideIndex1 = index, containerId);
  } else if (containerId === "main_2") {
    showSlides(slideIndex2 = index, containerId);
  }
}

// Entferne die vorherige setInterval-Funktion

// Füge eine Funktion hinzu, um das automatische Wechseln der Diashow zu starten
function startAutoSlide(containerId) {
  if (containerId === "main_1") {
    slideInterval1 = setInterval(() => {
      plusSlides(1, containerId);
    }, 8000);
  } else if (containerId === "main_2") {
    slideInterval2 = setInterval(() => {
      plusSlides(1, containerId);
    }, 8000);
  }
}

// Starte das automatische Wechseln der Diashows
startAutoSlide("main_1");
startAutoSlide("main_2");

// Füge Eventlistener für die Punkte hinzu, um direkt auf das entsprechende Bild zu springen
let dots1 = document.querySelectorAll(".main_1 .dot");
let dots2 = document.querySelectorAll(".main_2 .dot");
for (let i = 0; i < dots1.length; i++) {
  dots1[i].addEventListener("click", () => {
    currentSlide(i + 1, "main_1");
    clearInterval(slideInterval1); // Stoppe das automatische Wechseln der Diashow beim Klicken
    startAutoSlide("main_1"); // Starte das automatische Wechseln wieder
  });
}
for (let i = 0; i < dots2.length; i++) {
  dots2[i].addEventListener("click", () => {
    currentSlide(i + 1, "main_2");
    clearInterval(slideInterval2); // Stoppe das automatische Wechseln der Diashow beim Klicken
    startAutoSlide("main_2"); // Starte das automatische Wechseln wieder
  });
}
