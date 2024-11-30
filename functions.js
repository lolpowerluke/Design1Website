function showImage(imageName) {
  let overlayElement = document.getElementById("overlay");
  overlayElement.style.display = "flex";
  let imageElement = document.getElementById(imageName);
  imageElement.style.display = "flex";
}
function hideOverlay(imageName) {
  if (imageName == "all") {
    console.log(imageName);
  }
  let eyeElement = document.getElementById("eye");
  eyeElement.style.display = "none";
  let guitarElement = document.getElementById("guitar");
  guitarElement.style.display = "none";
  let papiElement = document.getElementById("papi");
  papiElement.style.display = "none";
  let patroonElement = document.getElementById("patroon");
  patroonElement.style.display = "none";
  let roomElement = document.getElementById("room");
  roomElement.style.display = "none";
  let thorAndLokiElement = document.getElementById("thor-and-loki");
  thorAndLokiElement.style.display = "none";
  let outisdeViewElement = document.getElementById("outside-view");
  outisdeViewElement.style.display = "none";
  let walkingTheDogsElement = document.getElementById("walking-the-dogs");
  walkingTheDogsElement.style.display = "none";
  let overlayElement = document.getElementById("overlay");
  overlayElement.style.display = "none";
}