let currentIndex = 0; // Per tracciare le notizie caricate
const newsPerPage = 10; // Numero di notizie per pagina
const newsList = document.getElementById('news-list');
const loadMoreButton = document.getElementById('load-more');
let newsIds = [];

// Funzione per ottenere gli ID delle news
async function fetchNewsIds() {
    try {
        const response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
        if (!response.ok) throw new Error('Errore nella risposta delle API');
        const data = await response.json();
        console.log('News IDs:', data); // Verifica che ci siano almeno 10 ID
        return data;
    } catch (error) {
        console.error('Errore nel recupero degli ID delle news:', error);
        return [];
    }
}

// Funzione per ottenere i dettagli di una singola news
async function fetchNewsDetails(id) {
    try {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        if (!response.ok) throw new Error(`Errore nella risposta per l'ID ${id}`);
        const data = await response.json();
        console.log(`Dettagli della news ${id}:`, data); // Verifica i dettagli delle news
        return data;
    } catch (error) {
        console.error(`Errore nel recupero dei dettagli della news con ID ${id}:`, error);
        return null;
    }
}

// Funzione per filtrare solo le notizie tech
function isTechNews(news) {
    const keywords = ['tech', 'AI', 'software', 'programming', 'developer', 'data', 'machine learning', 'coding'];
    return news && news.title && keywords.some(keyword => news.title.toLowerCase().includes(keyword));
}

// Funzione per visualizzare una news
function renderNews(news) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <a href="${news.url}" target="_blank">${news.title || 'Nessun titolo disponibile'}</a>
        <p>${news.time ? new Date(news.time * 1000).toLocaleString() : 'Nessuna data disponibile'}</p>
    `;
    newsList.appendChild(listItem);
}

// Funzione per caricare le news
async function loadNews() {
    try {
        // Se non ci sono ancora news IDs, li scarichiamo
        if (newsIds.length === 0) {
            newsIds = await fetchNewsIds();
        }

        const loadedNews = []; // Array per le notizie caricate correttamente
        while (loadedNews.length < newsPerPage && currentIndex < newsIds.length) {
            const id = newsIds[currentIndex];
            currentIndex++; // Incrementa l'indice

            const news = await fetchNewsDetails(id);
            if (news && isTechNews(news)) {
                loadedNews.push(news);
                renderNews(news); // Renderizza immediatamente la notizia
            }
        }

        // Nasconde il pulsante se non ci sono altre news da caricare
        if (currentIndex >= newsIds.length && loadedNews.length === 0) {
            loadMoreButton.style.display = 'none';
        }
    } catch (error) {
        console.error('Errore nel caricamento delle news:', error);
    }
}

// Carica automaticamente le prime news al caricamento della pagina
document.addEventListener('DOMContentLoaded', () => {
    loadNews(); // Carica le prime 10 news automaticamente
});

// Listener per il pulsante "Load more"
loadMoreButton.addEventListener('click', () => {
    loadNews(); // Carica le successive 10 news
});
