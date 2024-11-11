// script.js
document.getElementById('pokemon-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const name = document.getElementById('pokemon-name').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();

    if (response.ok) {
        document.getElementById('pokemon-data').innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
        `;
    } else {
        document.getElementById('pokemon-data').innerHTML = '<p>Pokémon not found</p>';
    }
});