function getAttributes() {
  let element = document.getElementById("w3r");
  console.log("href: " + element.getAttribute("href"));
  console.log("hreflang: " + element.getAttribute("hreflang"));
  console.log("rel: " + element.getAttribute("rel"));
  console.log("target: " + element.getAttribute("target"));
  console.log("type: " + element.getAttribute("type"));
}