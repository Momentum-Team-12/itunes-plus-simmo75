console.log('linked')

let profileDiv = document.querySelector('#profile')

fetch('https://proxy-itunes-api.glitch.me/search?term=jdilla&media=music', {
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


      let resultsDiv = document.createElement('div')
      resultsDiv.classList.add('results')


      let nameDiv = document.createElement('p')
      nameDiv.classList.add('artist')
      nameDiv.innerText = result.artistName
      resultsDiv.appendChild(nameDiv)

      let songDiv = document.createElement('p')
      songDiv.classList.add('song')
      songDiv.innerText = result.trackName
      resultsDiv.appendChild(songDiv)

      let artDiv = document.createElement('img')
      artDiv.classList.add('song')
      artDiv.src = result.artworkUrl100
      resultsDiv.appendChild(artDiv)

      profileDiv.appendChild(resultsDiv)
    }
  })
