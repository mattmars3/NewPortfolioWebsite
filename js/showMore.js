function showMore(elementId) {
  // get all moreContent paragraph tags
  const pTagCollection = document
    .getElementById(elementId)
    .querySelectorAll(".moreContent");

  // get the showmore button
  const showMoreButton = document
    .getElementById(elementId)
    .getElementsByClassName("showMoreButton")[0];

  // visibilty of the text and inner text of button
  let visibility = "";
  let buttonText = "";

  // if button says show more then
  if (showMoreButton.innerText == "Show More") {
    buttonText = "Show Less";
    visibility = "block";
  } else {
    buttonText = "Show More";
    visibility = "none";
  }

  for (let pTag in pTagCollection) {
    showMoreButton.innerText = buttonText;
    let out = pTagCollection[pTag].childNodes; 
    console.log(out)
    /*  
    pTagCollection[pTag].setAttribute("style", `display:${visibility};`);
    */
  }
  
  // re-apply all the css cuz it won't work for some reason
  const showMoreButtons = document.getElementsByClassName('showMoreButton');
  for (let showMoreButton in showMoreButtons) {
    showMoreButtons[showMoreButton].setAttribute('style', 'font-family: "Impact"')
    console.log('completed font change')
  }
}

function show(elementId) {
  const showMores = document.body.querySelector(elementId).querySelectorAll('.moreContent');
  for (let i in showMores) {
  }
}
