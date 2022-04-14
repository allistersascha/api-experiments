
document.querySelector('button').addEventListener('click', catboyPix)

function catboyPix(){
  const url = `https://api.catboys.com/img`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
             document.querySelector('img').src = data.url
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    }
