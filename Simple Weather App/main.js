$(document).ready(() => {
  let APIKEY = '804b50f8f39291dabe91c1cd47a28a09'

  var form = document.querySelector('form')
  var main = document.querySelector('main')
  var data = ''

  // Si se da click en el boton Ir que es de type submit se envia la informacion por el formulario
  // En ese caso se inserto manualmente una ubicacion, por eso capturo el evento onsubmite del formulario
  form.onsubmit = (event) => {
    event.preventDefault()

    var ubicacion = $('input[name="ubicacion"]').val()
    var units = $('input[name="units"]:checked').val()

    if(ubicacion) {
      $.ajax({
        type: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion}&lang=es&units=${units}&appid=${APIKEY}`,
        success: (response) => {
          informarDelClima(response)
        },
        error: () => {
          alert('Ha ocurrido un error')
        },
        timeout: 10000
      })
    }
  }

  // Si se clickea el boton usar mi ubicacion capturo el evento
  $('#btn-ubicacion').click(() => {
    var units = $('input[name="units"]:checked').val()
    var latitude = ''
    var longitude = ''

    if ("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition((position) => {
        $.ajax({
          type: 'GET',
          url: `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&lang=es&units=${units}&appid=${APIKEY}`,
          success: (response) => {
            informarDelClima(response)
          },
          error: () => {
            alert('Ha ocurrido un error')
          },
          timeout: 10000
        })
      })
    }else{
      alert('El navegador no tiene soporte de geolocalizacion');
    }
  })

  function informarDelClima(response) {
    var cajaClima = main.querySelector('div#clima')

    if(!cajaClima){
      cajaClima = document.createElement('div')
      cajaClima.setAttribute('id', 'clima')
      cajaClima.style.display = 'none'
      main.append(cajaClima)
      $('#clima').toggle('fold', 'slow')
    }

    cajaClima.innerHTML = ''
    cajaClima.innerHTML += `<h2>${response.name}, ${response.sys.country}</h2><hr>`
    cajaClima.innerHTML += `<h3>Ahora <span>${response.main.temp}°</span>\t|\t<span class="description">${response.weather[0].description}</span></h3><hr>`
    cajaClima.innerHTML += `<h3>Sensacion termica ${response.main.feels_like}°</h3><hr>`
    cajaClima.innerHTML += `<h3>Min ${response.main.temp_min}°\t|\tMax ${response.main.temp_max}°</h3><hr>`
    cajaClima.innerHTML += `<h3>Presion ${response.main.pressure}hPa</h3><hr>`
    cajaClima.innerHTML += `<h3>Humedad ${response.main.humidity}%</h3><hr>`
    cajaClima.innerHTML += `<h3>Nubosidad ${response.clouds.all}%</h3><hr>`
    cajaClima.innerHTML += `<h3>Longitud ${response.coord.lon} | Latitud ${response.coord.lat}</h3>`
  }
})
