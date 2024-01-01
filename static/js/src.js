/*
 * src.css
 * Javascript for the website
 * Stephan Gahima
*/


// Path to templates
const _TEMPLATES_PATH = "/templates/";
// Methods to select elements
const _CLASSNAME = "ClassName";
const _ID = "Id";
const _TAGNAME = "TagName";


/**
 * Inject the code of an HTML file into a specified element
 *
 * @param {string} file - The path to the HTML file
 * @param {string} element - The element to inject the HTML into
 * @param {string} by - The method to use to select the element
 *                      (ClassName, Id, TagName, or querySelector)   
 * 
 * @author Stephan Gahima
 */
function injectHTML(file, element, by) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            if (by == _CLASSNAME)
                document.getElementsByClassName(element)[0].innerHTML += data;
            else if (by == _ID)
                document.getElementsById(element)[0].innerHTML += data;
            else if (by == _TAGNAME)
                document.getElementsByTagName(element)[0].innerHTML += data;
            else
                document.querySelector(element).innerHTML += data;
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}


// Inject the HTML code of the templates into the page
injectHTML(_TEMPLATES_PATH + "bio.html", "bio", _CLASSNAME);
injectHTML(_TEMPLATES_PATH + "contact-info.html", "sidebar", _CLASSNAME);

injectHTML(_TEMPLATES_PATH + "footer.html", "footer", _TAGNAME);
injectHTML(_TEMPLATES_PATH + "meta.html", "head", _TAGNAME);