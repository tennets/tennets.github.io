/*
 * src.css
 * Javascript for the website
 * Stephan Gahima
*/


const currentYear = new Date().getFullYear();
const templatesPath = "/templates/";
const templates = [
    { file: "bio.html", selector: ".bio" },
    { file: "footer.html", selector: "footer" },
    { file: "meta.html", selector: "head" }
];


/**
 * Inject the code of an HTML file into a specified element.
 *
 * @param {string} file - The path to the HTML file.
 * @param {string} selector - CSS selector for the target element.
 * 
 * @author Stephan Gahima
 */
function injectHTML(file, selector) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${file}: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const targetElement = document.querySelector(selector);
            if (!targetElement) {
                throw new Error(`Element not found: ${selector}`);
            }
            targetElement.innerHTML += data;
        })
        .catch(error => {
            console.error(`Error injecting HTML from ${file}:`, error);
        });
}

// Inject all templates
templates.forEach(template => {
    injectHTML(templatesPath + template.file, template.selector);
});

// Update the current year in the footer
document.getElementById("current-year").textContent = currentYear;