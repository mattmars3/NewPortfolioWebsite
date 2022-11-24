
function showMore(elementId) {
  const pTagCollection = document.getElementById(elementId).querySelectorAll('p.moreContent');

  const showMoreButton = document.getElementById(elementId).getElementsByClassName('showMoreButton')[0];
  
  let visibility = '';
  let buttonText = '';
  if (showMoreButton.innerText == 'Show More') {
    buttonText = 'Hide Info'
    visibility = 'block'
  } else {
    buttonText = 'Show More'
    visibility = 'none'
  }

  for (let pTag in pTagCollection) {
    pTagCollection[pTag].style.display = visibility; 
    showMoreButton.innerText = buttonText;
  }

  // fix css issue
}