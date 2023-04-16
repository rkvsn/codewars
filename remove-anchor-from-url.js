// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"


function removeUrlAnchor(url) {
  const index = url.indexOf("#");
  if (index !== -1) {
    return url.slice(0, index);
  } else {
    return url;
  }
}
