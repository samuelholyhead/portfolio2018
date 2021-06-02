document.addEventListener("DOMContentLoaded", function(event) {

  console.log("product-page.js DOMContentLoaded");
  var checkbox = document.getElementById("pp_demoConsent");
  checkbox.addEventListener("click", function(){ handleChange(checkbox); });
  
});

function loadScript(scriptSrc, scriptID){
   var el = document.createElement("script");
   el.src = scriptSrc;
   el.type= "text/javascript";
   el.async = true;
   el.id = scriptID;
   document.getElementsByTagName("head")[0].appendChild(el);
}

function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

function removeElement(elementId) {
    // Removes an element from the document
    if (document.getElementById(elementId) != null) {
      var element = document.getElementById(elementId);
      element.parentNode.removeChild(element);
  }
}

function handleChange(checkbox) {


      console.log("checkbox true");
      removeElement("hp_mapPlaceholder");
      var html = `<iframe class="hp_map" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC8czSNUCgQnzKx4ImMLUv91pRPgvjr9YQ&q=Somerset+House" allowfullscreen></iframe>`
      addElement("pp_protoContainer", "div", "pp_protoDiv", html);

}

