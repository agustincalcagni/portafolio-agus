(async() => {
    await fetch("https://api.freegpt4.ddns.net/?text=Hola perro dame un ejemplo en python para postgresql!!").then((res) => res.text()).then((res) => console.log(res)).catch((err) => console.error(err))
} )()