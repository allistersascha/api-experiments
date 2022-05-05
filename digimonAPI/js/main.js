document.querySelector('button').addEventListener('click', digimonGet)

function digimonGet(){
  //const choice = document.querySelector('input').value
  const url = `https://digimon-api.vercel.app/api/digimon`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // trying to get a random number out of the array by using Math.random times the number of indeces in the array
        let digiGot = data.at(Math.floor(Math.random()*data.length));
        console.log(digiGot);
        // trying to use the number at digiGot to return the name to the h3 and the image to the img src
        document.querySelector('h3').innerText = digiGot.name
        document.querySelector('img').src = digiGot.img
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

