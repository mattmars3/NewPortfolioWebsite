/*
  Matt Marsico
  11/11/2022
*/

// create a url for random Images from unsplash
function argsToUnsplashUrl(size, argList) {
  // generate the string to append to request
  const createArgString = (args) => {
    let argString = "";
    // add comma for each element
    for (let ele in argList) {
      argString += argList[ele] + ",";
    }
    return argString.substring(0, argString.length - 1);
  };

  // argument List
  let argString = createArgString(argList);

  // unsplash url
  const dimensionString = size[0] + "x" + size[1];
  const baseURL = "https://source.unsplash.com/random/";
  const requestURL = `url(${baseURL}${dimensionString}?${argString})`;
  return requestURL;
}

////////////////////////////////////////////////////////////////////

// gets a random image url from LoremPicSum
function argsToLoremPicsumUrl(size) {
  const baseUrl = "https://picsum.photos/";
  const requestUrl = `url(${baseUrl}${size[0]}/${size[1]})`;
  return requestUrl;
}

// gets the url for a specific picture on LoremPicsum given id
function specificLoremPicsumPicture(size, num = 0) {
  // cool picture ids

  const coolPicsumPicNums = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 27, 28, 29, 62, 67, 66, 69, 70, 71,
    74, 77, 79, 80, 81, 83, 88, 89, 90, 93, 92, 94, 95, 107, 106, 110, 109, 112,
    114, 115, 116, 122, 165, 166, 168, 170, 171, 172, 176, 179, 184, 185, 187,
    188, 191, 193, 194, 197, 198, 202, 206, 204, 213, 217, 218, 220, 221, 222,
    227, 228, 229, 230, 231, 235, 241, 243, 244, 249, 255, 256, 257, 260, 264,
    265, 270, 277, 278, 281, 287, 289, 295, 300, 301, 306, 308, 314, 316, 317,
    328, 350, 351, 353,
  ];
  if (num == 0) {
    let randIndex = Math.floor(Math.random() * coolPicsumPicNums.length);
    num = coolPicsumPicNums[randIndex];

    try {
      setPictureId(num);
    } catch {}
  }
  const baseUrl = "https://picsum.photos/";
  const requestURL = `url(${baseUrl}/id/${num}/${size[0]}/${size[1]})`;
  return requestURL;
}

function setPictureId(id) {
  document.getElementById("picId").innerText = id;
}

// set background to the URL

function setBackgroundFromUrl(backgroundUrl) {
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundImage = backgroundUrl;
}

/////////////////////////////////////////////////////////////////////
function unsplashBackground(argsString) {
  const unsplashArgStr = argsString;
  const unsplashArgList = unsplashArgStr.split(" ");

  const unsplashUrl = argsToUnsplashUrl(
    [window.innerWidth, window.innerHeight],
    unsplashArgList
  );
  console.log(unsplashUrl)
  setBackgroundFromUrl(unsplashUrl);
}

function loremPicsumBackground(id = 0) {
  const picsumUrl = specificLoremPicsumPicture(
    [window.innerWidth, window.innerHeight],
    id
  );
  setBackgroundFromUrl(picsumUrl);
}
