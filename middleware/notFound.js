/**MIDDLEWARE NOT FOUNF - Attraverso la funzione, gestiamo le rotte non trovate*/

function notFound(req, res, next) {
    res.status(404) /**Imposta lo status HTTP 404*/
    res.json({ /**Sempre in formato JSON*/
        error: "Not Found", /**Tipo di errore*/
        message: "Pagina non trovata" /**Messaggio d'errore*/
    });
};

module.exports = notFound; /**Esportiamo il middleware per poterlo usare (app.js)*/