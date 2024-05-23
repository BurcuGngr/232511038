// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    loadFavorites();

    document.querySelectorAll('.favorite-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            toggleFavorite(icon);
        });
    });
});

function toggleFavorite(element) {
    const card = element.parentElement;
    const imgSrc = card.querySelector('img').src;
    const title = card.querySelector('p a').innerText;
    const link = card.querySelector('p a').href;
    
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    const existingIndex = favorites.findIndex(fav => fav.title === title);
    if (existingIndex >= 0) {
        // Remove from favorites
        favorites.splice(existingIndex, 1);
        element.style.color = 'black';
    } else {
        // Add to favorites
        favorites.push({ imgSrc, title, link });
        element.style.color = 'red';
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function loadFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.forEach(fav => {
        document.querySelectorAll('.card').forEach(card => {
            const title = card.querySelector('p a').innerText;
            if (title === fav.title) {
                card.querySelector('.favorite-icon').style.color = 'red';
            }
        });
    });
}


// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    loadFavorites();

    document.querySelectorAll('.favorite-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            toggleFavorite(icon);
        });
    });

    if (document.getElementById('favorites-container')) {
        displayFavorites();
    }
});

function toggleFavorite(element) {
    const card = element.parentElement;
    const imgSrc = card.querySelector('img').src;
    const title = card.querySelector('p a').innerText;
    const link = card.querySelector('p a').href;

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const existingIndex = favorites.findIndex(fav => fav.title === title);
    if (existingIndex >= 0) {
        // Remove from favorites
        favorites.splice(existingIndex, 1);
        element.style.color = 'black';
    } else {
        // Add to favorites
        favorites.push({ imgSrc, title, link });
        element.style.color = 'red';
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));

    if (document.getElementById('favorites-container')) {
        displayFavorites();
    }
}

function loadFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.forEach(fav => {
        document.querySelectorAll('.card').forEach(card => {
            const title = card.querySelector('p a').innerText;
            if (title === fav.title) {
                card.querySelector('.favorite-icon').style.color = 'red';
            }
        });
    });
}

function displayFavorites() {
    const container = document.getElementById('favorites-container');
    container.innerHTML = '';
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favorites.forEach(fav => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${fav.imgSrc}" alt="${fav.title}">
            <p><a href="${fav.link}" style="color: rgb(29, 133, 182); text-decoration: none;">${fav.title}</a></p>
            <button class="remove-favorite" onclick="removeFavorite('${fav.title}')">Sil</button>
        `;
        container.appendChild(card);
    });
}

function removeFavorite(title) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(fav => fav.title !== title);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
}
