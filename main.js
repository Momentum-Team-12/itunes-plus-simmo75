console.log('linked')

let profileDiv = document.querySelector('#profile')

fetch('https://itunes.apple.com/search?term=jdilla&media=music', {
  method: 'GET',
})
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data.results)
  
    // }

    let results = data.results.slice(1)
    for (let result of results) {
      let nameDiv = document.createElement('p')
      nameDiv.classList.add('artist')
      nameDiv.innerText = result.artistName
      profileDiv.appendChild(nameDiv)

      let songDiv = document.createElement('p')
      songDiv.classList.add('song')
      songDiv.innerText = result.trackName
      profileDiv.appendChild(songDiv)

      let artDiv = document.createElement('img')
      artDiv.classList.add('song')
      artDiv.src = result.artworkUrl100
      profileDiv.appendChild(artDiv)
    }
  })
