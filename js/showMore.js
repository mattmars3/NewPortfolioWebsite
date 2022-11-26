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
    buttonText = "Hide Info";
    visibility = "block";
  } else {
    buttonText = "Show More";
    visibility = "none";
  }

  for (let pTag in pTagCollection) {
    showMoreButton.innerText = buttonText;
    pTagCollection[pTag].setAttribute("style", `display:${visibility};`);
  }
}
