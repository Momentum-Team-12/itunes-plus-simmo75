console.log('linked')
//checking my main.js file is linked to my index.html doc//

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}
//function to remove all child elements from the parent, to clear the document when searching//

let profileDiv = document.querySelector('#profile')

let searchform = document.querySelector('#search')

searchform.addEventListener('submit', function (event) {
  event.preventDefault()

  let userInput = document.querySelector('#user-input')
  console.log(userInput.value)

  removeAllChildNodes(profileDiv)

  fetch(
    `https://proxy-itunes-api.glitch.me/search?term=${userInput.value}&media=music`,
    {
      method: 'GET',
    },
  )
    .then(function (response) {
      return response.json()
    })
    //defining the website/database for our search and then//

    .then(function (data) {
      console.log(data.results)

      let results = data.results.slice(1)
      for (let result of results) {

        let resultsDiv = document.createElement('div')
        resultsDiv.classList.add('results')
        // this div-type element is the container for all artist info
        
        let artDiv = document.createElement('img')
        artDiv.classList.add('img')
        artDiv.src = result.artworkUrl100
        resultsDiv.appendChild(artDiv)
        // this div-type element is the container for all album artwork info
        
        let audioDiv = document.createElement('audio')
        audioDiv.classList.add('audioPreview')
        audioDiv.src = result.previewUrl
        audioDiv.controls = 'controls'
        resultsDiv.appendChild(audioDiv)
        // this div-type element is the container for all audio previews
        
        let songDiv = document.createElement('div')
        songDiv.classList.add('song')
        songDiv.innerText = result.trackName
        resultsDiv.appendChild(songDiv)
        // this div-type element is the container for all song info

        let releaseDiv = document.createElement('div')
        releaseDiv.classList.add('release')
        releaseDiv.innerText = `${moment(result.releaseDate).format("YYYY")}`;
        resultsDiv.appendChild(releaseDiv)
        


        profileDiv.appendChild(resultsDiv)
        profileDiv.remove
      }
    })
})
