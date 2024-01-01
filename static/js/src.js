/*
 * src.css
 * Javascript for the website
 * Stephan Gahima
*/


// Path to templates
const TEMPLATES_PATH = "/templates/";


/*
 * Inject the code of an HTML file into a specified element
 *
 * @param {string} file - The path to the HTML file
 * @param {string} element - The element to inject the HTML into
 */
function injectHTML(file, element) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            const elem = document.querySelector(element);
            elem.innerHTML = data;
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}


// Inject HTML code into the footer
injectHTML(TEMPLATES_PATH + "footer.html", "footer");

// Update the copyright year in the footer          
document.getElementsByClassName("footer-copyright")[0].innerHTML = "&copy; Stephan Gahima 2023 - " + new Date().getFullYear() + ". All rights reserved.";