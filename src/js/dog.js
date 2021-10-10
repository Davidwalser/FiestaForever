/* eslint-disable require-jsdoc */
// eslint-disable-next-line no-unused-vars
function getDog() {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://dog.ceo/api/breed/airedale/images/random', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    // Response
      const response = JSON.parse(this.responseText);
      const image = document.createElement('img');
      image.src = response.message;
      // image.id = response.message;
      image.width = 250;
      image.height = 250;
      image.addEventListener('click', () => {
        buyDog(image);
      });
      document.getElementById('dogList').appendChild(image);
      // document.body.appendChild(image);
    }
  };
  xhttp.send();
}

function buyDog(picture) {
  if (picture.parentElement.id == 'dogList') {
    const cart = document.getElementById('favourites');
    picture.parentElement = cart;
    cart.appendChild(picture);
  } else {
    const dogList = document.getElementById('dogList');
    dogList.appendChild(picture);
  }
}

module.exports = {
  getDog,
};
