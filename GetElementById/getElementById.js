function getElementById(id) {
  // Getting all elements in the document
  var elements = document.getElementsByTagName("*");

  // Looping through the elements and finding the one with the id
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].id === id) {
      return elements[i];
    }
  }

  // Returning null if no element was found
  return null;
}
