let menu = document.getElementById("razas");
fetch("https://dog.ceo/api/breeds/list/all") // URL correcta
    .then(response => response.json())
    .then(data => {
        menu.innerHTML = "";
        let razas = Object.keys(data.message);
        razas.forEach(raza => {
            menu.innerHTML += `<option value="${raza}">${raza}</option>`;
        });
    });

document.getElementById("razas").addEventListener("change", () =>{
    fetch(`https://dog.ceo/api/breed/${menu.value}/images`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("imagenes").innerHTML = `
        <img src="${data.message[0]}" alt="${menu.value}" class="rounded">
        <img src="${data.message[1]}" alt="${menu.value}" class="rounded">
        <img src="${data.message[2]}" alt="${menu.value}" class="rounded">
        `
    })    
})

