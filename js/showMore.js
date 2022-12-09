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
  if (showMoreButton.innerText == "+") {
    buttonText = "-";
    visibility = "block";
  } else {
    buttonText = "+";
    visibility = "none";
  }

  for (let pTag in pTagCollection) {
    showMoreButton.innerText = buttonText;
    pTagCollection[pTag].setAttribute("style", `display:${visibility};`);
  }
}
