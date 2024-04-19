
import { barcelona, roma, paris, londres } from "./cities.js";

// Obtenemos elementos del DOM
const links = document.querySelectorAll('a');
const title = document.querySelector('#titulo');
const subTitle = document.querySelector('#subtitulo');
const paragraph = document.querySelector('#parrafo');

// Agregamos evento Click
links.forEach( function (link) {
    link.addEventListener('click', function(event) {
        // Prevenir comportamiento por default del enlace
        event.preventDefault();
        //Remove active
        links.forEach( function (link) {
            link.classList.remove('active');
        });

        // Add active class
        this.classList.add('active');
    
        // Get info
        let content = getContent(this.textContent);
        // Show the content on HTML
        title.innerHTML = content.titulo;
        subTitle.innerHTML = content.subtitulo;
        paragraph.innerHTML = content.parrafo;
    });
});

// Function for get info from cities.js

function getContent(linkText){
    const content = {
    'Barcelona' : barcelona,
    'Roma' : roma,
    'París' : paris,
    'Londres' : londres
    };
    return content[linkText];
}