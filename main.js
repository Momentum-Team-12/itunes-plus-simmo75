console.log('linked')

let profileDiv = document.querySelector('#profile')

let searchform = document.querySelector('#search')

searchform.addEventListener ('submit', function(event) {
event.preventDefault()

let userInput = document.querySelector('#user-input')
console.log (userInput.value)



fetch(`https://proxy-itunes-api.glitch.me/search?term=${userInput.value}&media=music`, {
  method: 'GET',
})
.then(function (response) {
  return response.json()
})
.then(function (data) {
  console.log(data.results)
  
  
  
  let results = data.results.slice(1)
  for (let result of results) {
    let resultsDiv = document.createElement('div')
    resultsDiv.classList.add('results')
    
    let nameDiv = document.createElement('div')
    nameDiv.classList.add('artist')
    nameDiv.innerText = result.artistName
    resultsDiv.appendChild(nameDiv)
    
    let artDiv = document.createElement('img')
    artDiv.classList.add('img')
    artDiv.src = result.artworkUrl100
    resultsDiv.appendChild(artDiv)
    
    let songDiv = document.createElement('div')
    songDiv.classList.add('song')
    songDiv.innerText = result.trackName
    resultsDiv.appendChild(songDiv)
    
    let releaseDiv = document.createElement('div')
    releaseDiv.classList.add('release')
    releaseDiv.innerText = result.releaseDate
    resultsDiv.appendChild(releaseDiv)
  
      profileDiv.appendChild(resultsDiv)
  } 
  })
})