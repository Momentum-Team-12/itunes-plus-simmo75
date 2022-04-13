console.log('linked')
//checking my main.js file is linked to my index.html doc//

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}
//function to remove all child elements from the parent, to clear the document upon search button submit.

let profileDiv = document.querySelector('#profile')
//defining searchform as the element ID #profile
let searchform = document.querySelector('#search')
//defining searchform as the element ID #search
searchform.addEventListener('submit', function (event) {
  event.preventDefault()
  // listening for search button to be submitted
  let userInput = document.querySelector('#user-input')
  //defining the ID #user-input element
  removeAllChildNodes(profileDiv)
  // removes child elements, pre search input//

  fetch(
    `https://proxy-itunes-api.glitch.me/search?term=${userInput.value}&media=music`,
    {
      method: 'GET',
    },
  )
    // making a request to the database for our search, using the URL in the GET request
    .then(function (response) {
      return response.json()
    })
    // reformatting the search results format into .json

    .then(function (data) {
      let results = data.results.slice(1)
      for (let result of results) {
        let resultsDiv = document.createElement('div')
        resultsDiv.classList.add('results')
        // this div-type element is the container for all artist info

        let artDiv = document.createElement('img')
        artDiv.classList.add('img')
        artDiv.src = result.artworkUrl100.slice(0, -13) + "300x300bb.jpg"
        resultsDiv.appendChild(artDiv)
        // this div-type element is the container for all album artwork info and icreases image resolution

        let audioDiv = document.createElement('audio')
        audioDiv.classList.add('audioPreview')
        audioDiv.src = result.previewUrl
        audioDiv.controls = 'controls'
        resultsDiv.appendChild(audioDiv)
        // this div-type element is the container/player for all audio previews

        let artistDiv = document.createElement('div')
        artistDiv.classList.add('artist')
        artistDiv.innerText = result.artistName
        resultsDiv.appendChild(artistDiv)
        // this div-type element is the container for all artist/band info

        let songDiv = document.createElement('div')
        songDiv.classList.add('song')
        songDiv.innerText = result.trackName
        resultsDiv.appendChild(songDiv)
        // this div-type element is the container for all song info

        let releaseDiv = document.createElement('div')
        releaseDiv.classList.add('releaseDate')
        releaseDiv.innerText = `${moment(result.releaseDate).format('YYYY')}`
        // this div-type element is the container for all release date info and is slicing the date format down to only displaying the year

        resultsDiv.appendChild(releaseDiv)

        profileDiv.appendChild(resultsDiv)

        
      }
    })
})
