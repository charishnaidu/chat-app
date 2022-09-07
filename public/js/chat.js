socket = io()

socket.on('message', (data)=>{
    console.log(data)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const message = e.target.elements.message.value
    socket.emit('sendMessage', message)
})

document.querySelector('#send-location').addEventListener('click', () => {
    if(!navigator.geolocation){
        return alert('Geolocation is not supported by your browser..')
    }
    navigator.geolocation.getCurrentPosition((position)=>{
        // console.log(position)
        latitude = position.coords.latitude
        longitude = position.coords.longitude
        socket.emit('sendLocation', {latitude, longitude})
    })
})