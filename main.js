console.log('linked')

let profileDiv = document.querySelector('#profile')

fetch('https://itunes.apple.com/lookup?id=16589310&entity=song&limit=10', {
  method: 'GET',
  
})
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    let nameDiv = document.createElement('p')
    // nameDiv.classList.add('name')
    nameDiv.innerText = data.artistName
    profileDiv.appendChild(nameDiv)
  
  })

