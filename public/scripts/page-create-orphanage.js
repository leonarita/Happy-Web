// create map
const map = L.map('mapid').setView([-23.6614778,-46.6568139], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
})


// adicionar campo de fotos
function addPhotoField() {

    // pegar o container de foto
    const container = document.querySelector('#images')

    // pegar o container para duplicar
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // realizar o clone da última imagem selecionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // verificar se o campos está vazio
    const input = newFieldContainer.children[0]

    if(input.value === "")
        return

    // limpar o campo
    input.value = ''

    // adicionar o clone ao container
    container.appendChild(newFieldContainer)
}

function deleteField(event) {

    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = ""

        return
    }

    span.parentNode.remove()
}

function toggleSelect(event) {
    
    document.querySelectorAll('.button-select button').forEach((button) => {
        button.classList.remove('active')
    })

    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
}

function validate(event) {

    const lat = document.querySelector('[name=lat]').value

    if(lat == 0 || lat ==undefined || lat == null) {
        event.preventDefault()

        alert('Selecione um ponto no mapa')
    }
}

