// Para nombre del trabajo

var char = '-';
var subtitleForWorshop = document.getElementById("subtitle");
var workshopName = prompt("Nombre del trabajo (Ej. Laboratorio 2, Peer Review, etc.)");

if(workshopName == "" || workshopName === null) {
  workshopName = "Programación interactiva";
  subtitleForWorshop.innerHTML = workshopName;
  window.document.title = "Análisis y diseño de software " + char + " " + workshopName;
} else {
  subtitleForWorshop.innerHTML = workshopName;
  window.document.title = "Análisis y diseño de software " + char + " " + workshopName;
}

// Para nombre del proyecto

var subtitleForProject = document.querySelectorAll("#subtitleTwo");
var projectName = prompt("Nombre del proyecto (Ej. Triangulo, Caja Registradora, etc.)");

if(projectName == "" || projectName === null) {
  projectName = "Nombre no definido";
  for(var i = 0; i < subtitleForProject.length; i++) {
    subtitleForProject[i].innerHTML = projectName;
  }
} else {
  for(var i = 0; i < subtitleForProject.length; i++) {
    subtitleForProject[i].innerHTML = projectName;
  }
}

// Para imagen de diagrama de clases

function setImg() {
  var diagramUrl = prompt("URL de la imagen para el diagrama de clases");
  var diagram = document.getElementById("diagram");

  diagram.src = 'https://analisis-y-diseno-de-software.alejolilo1234.repl.co/' + diagramUrl;
}

setImg();

// Para settear imagen

var diagramImg = document.getElementById("diagramImg");

diagramImg.addEventListener("click", () => {
  setImg();
})

document.addEventListener("DOMContentLoaded", () => {
  let boton = document.getElementById("createPDF");
  boton.addEventListener("click", () => {
    const $elementoParaConvertir = document.body; 
    html2pdf()
    .set({
      margin: .5,
      filename: 'Análisis y diseño de software ' + char + " " + workshopName + '.pdf',
      image: {
        type: 'jpeg',
        quality: 0.98
      },
      html2canvas: {
        scale: 1.5,
        letterRendering: true,
      },
      jsPDF: {
        unit: "in",
        format: "letter",
        orientation: 'portrait'
      }
    })
    .from($elementoParaConvertir)
    .save()
    .catch(err => console.log(err));
  })
})