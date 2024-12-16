const path = require('path');

module.exports = {
  entry: './app.js', // Punto di ingresso aggiornato
  output: {
    filename: 'bundle.js', // Nome del file di output
    path: path.resolve(__dirname, 'dist'), // Cartella di output
    clean: true, // Pulisce la cartella dist ad ogni build
  },
  mode: 'development', // Modalità di sviluppo
  devServer: {
    static: './dist',
    open: true,
    port: 3000, // Cambia la porta qui (es. 3000 o qualsiasi altra porta libera)
  },
};