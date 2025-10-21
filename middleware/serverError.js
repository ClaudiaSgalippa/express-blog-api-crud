/**MIDDLEWARE ERROR - Attraverso la funzione, gestiamo degli errori del server*/

function serverError(err, req, res, next) {
    res.status(500); /**Imposta lo status HTTP 500 (errore interno del server)*/
    res.json({ /**Sempre in formato JSON*/
        error: err.message /**Messaggio d'errore*/
    });
};

module.exports = serverError; /**Esportiamo il middleware per poterlo usare (app.js)*/