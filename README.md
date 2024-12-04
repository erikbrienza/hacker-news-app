
# Hacker News Tech Reader

Un'applicazione web per visualizzare le ultime notizie tecnologiche utilizzando l'API di Hacker News. All'avvio, l'app carica automaticamente le prime 10 notizie tech. Puoi caricare altre notizie cliccando sul pulsante "Load More".

## Funzionalità
- Recupero delle ultime notizie utilizzando l'API di Hacker News.
- Filtro per mostrare solo le notizie relative alla tecnologia.
- Caricamento incrementale di blocchi da 10 notizie con il pulsante "Load More".
- Visualizzazione del titolo, del link e della data di pubblicazione per ogni notizia.

## Tecnologie Utilizzate
- **HTML**: Struttura della pagina.
- **CSS**: Stile e design responsivo.
- **JavaScript**: Logica per chiamate API, filtraggio e gestione delle notizie.
- **Hacker News API**: Fonte delle notizie.

## Installazione
1. Clona il repository:
   ```bash
   git clone <repository_url>
   ```
2. Apri il file `index.html` nel browser.

## Come Funziona
1. L'applicazione richiama `https://hacker-news.firebaseio.com/v0/newstories.json` per ottenere una lista di 500 ID delle ultime news.
2. Recupera i dettagli delle prime 10 news utilizzando `https://hacker-news.firebaseio.com/v0/item/<ID>.json`.
3. Filtra le notizie per mostrare solo quelle relative alla tecnologia.
4. Visualizza le notizie nella pagina.
5. Con il pulsante "Load More", carica e mostra i successivi blocchi di 10 notizie.

## Prova l'App
https://hachernewsapp.netlify.app


## Contributi
Contributi, bug fix e suggerimenti sono benvenuti! Sentiti libero di fare un fork del progetto.
